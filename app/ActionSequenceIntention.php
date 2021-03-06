<?php

namespace App;

use App\Events\ActionSequenceIntentionDeleted;
use App\Events\ActionSequenceIntentionUpdated;
use App\Traits\Uuids;
use Carbon\Carbon;
use Illuminate\Notifications\Notifiable;

/**
 * Class ActionSequenceIntention
 * @package App
 */
class ActionSequenceIntention extends CiliatusModel
{

    use Uuids, Notifiable;

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    const TYPE_HUMIDITY_PERCENT = 'humidity_percent';
    const TYPE_TEMPERATURE_CELSIUS = 'temperature_celsius';
    const INTENTION_INCREASE = 'increase';
    const INTENTION_DECREASE = 'decrease';

    /**
     * @var array
     */
    protected $fillable = [
        'name', 'action_sequence_id', 'timeframe_start', 'timeframe_end',
        'intention', 'type', 'minimum_timeout_minutes'
    ];

    /**
     * @var array
     */
    protected $dates = ['created_at', 'updated_at', 'last_start_at', 'last_finished_at'];

    /**
     * @var array
     */
    protected $dispatchesEvents = [
        'updated' => ActionSequenceIntentionUpdated::class,
        'deleting' => ActionSequenceIntentionDeleted::class
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function properties()
    {
        return $this->hasMany('App\Property', 'belongsTo_id')->where('belongsTo_type', 'ActionSequenceIntention');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function sequence()
    {
        return $this->belongsTo('App\ActionSequence', 'action_sequence_id', 'id');
    }

    /**
     *
     */
    public function start()
    {
        $this->last_start_at = Carbon::now();
        $this->save();

        $this->info('start',null, null, $this->sequence);
    }

    /**
     *
     */
    public function finish()
    {
        $this->last_finished_at = Carbon::now();
        $this->save();

        RunningAction::where('action_sequence_intention_id', $this->id)->delete();

        if ($this->sequence->runonce === true) {
            $this->sequence->delete();
        }

        $this->info('finish',null, null, $this->sequence);
    }

    /**
     * @param Controlunit $controlunit
     * @return array|void
     */
    public static function createAndUpdateRunningActions(Controlunit $controlunit)
    {
        if (ActionSequence::stopped()) {
            return;
        }

        foreach (ActionSequenceIntention::get() as $asi) {

            if (!$asi->shouldBeHandledBy($controlunit)) {
                continue;
            }

            if (!$asi->checkConsistency()) {
                continue;
            }

            if (!$asi->running() && !$asi->shouldBeRunning()) {
                continue;
            }

            if ($asi->shouldBeStarted()) {
                $asi->start();
            }

            $all_actions_finished = true;

            foreach ($asi->sequence->actions as $a) {
                $running_action = RunningAction::where('action_id', $a->id)
                    ->where('action_sequence_intention_id', $asi->id)
                    ->first();

                /*
                 * Check whether the RunningAction
                 * ran long enough
                 */
                if (is_null($running_action)) {
                    $all_actions_finished = false;

                    if ($a->startConditionsMetForIntention($asi, $controlunit)) {
                        RunningAction::create([
                            'action_id' => $a->id,
                            'action_sequence_intention_id' => $asi->id,
                            'started_at' => Carbon::now()
                        ]);
                    }
                }
                elseif ($running_action->shouldBeStopped()) {
                    $running_action->stop();
                }
                else {
                    // Action still running
                    $all_actions_finished = false;
                }
            }

            if ($all_actions_finished) {
                $running_actions = RunningAction::where('action_sequence_intention_id', $asi->id)->get();
                foreach ($running_actions as $ra) {
                    $ra->delete();
                }
                $asi->finish();
            }
        }

    }

    /**
     * Return true if the schedule has a valid sequence
     *
     * @return bool
     */
    public function checkConsistency()
    {
        return !is_null($this->sequence);
    }

    /**
     * @return bool
     */
    public function running()
    {
        return ($this->last_start_at > $this->last_finished_at
            || !is_null($this->last_start_at) && is_null($this->last_finished_at));
    }


    /**
     * Checks whether any of the sequences actions
     * can be started by this $controlunit.
     *
     * If not return false
     *
     * @param Controlunit $controlunit
     * @return bool
     * @throws \Exception
     */
    public function shouldBeHandledBy(Controlunit $controlunit)
    {
        if (is_null($this->sequence)) {
            $this->delete();
            return false;
        }


        foreach ($this->sequence->actions as $a) {
            if (!is_null($a->target_object()) && $a->target_object()->controlunit_id == $controlunit->id) {
                return true;
            }
        }

        return false;
    }

    /**
     * Checks whether any of the sequences actions
     * can be started by this $controlunit.
     *
     * If not return false,
     * otherwise return result of shouldBeStarted
     *
     * @param Controlunit $controlunit
     * @return bool
     * @throws \Exception
     */
    public function shouldBeStartedBy(Controlunit $controlunit)
    {
        return $this->shouldBeHandledBy($controlunit) && $this->shouldBeStarted();
    }

    /**
     * Returns true if it should be running but isn't
     *
     * @return bool
     */
    public function shouldBeStarted()
    {
        return $this->shouldBeRunning() && !$this->running();
    }

    /**
     * Gets sensorreadings withing reference_value_duration_threshold_minutes
     * from the LogicalSensor and tries to match them to the trigger condition.
     * If one sensorreadings is not withing trigger bounds, return false
     * Otherwise return true
     *
     * @return bool
     */
    public function shouldBeRunning()
    {
        if ($this->timeframe_start_today()->gt(Carbon::now())
            || $this->timeframe_end_today()->lt(Carbon::now())) {

            return false;
        }

        if (!is_null($this->last_finished_at) && !is_null($this->minimum_timeout_minutes) &&
            $this->last_finished_at->addMinutes($this->minimum_timeout_minutes) > Carbon::now()) {

            return false;
        }

        if (!is_null($this->next_start_not_before) && $this->next_start_not_before->lt(Carbon::now())) {
            return false;
        }

        $critical_states = CriticalState::whereNull('recovered_at')
            ->where('is_soft_state', false)
            ->where('belongsTo_type', 'LogicalSensor')
            ->get();

        if ($critical_states->count() < 1) {
            return false;
        }

        foreach ($critical_states as $cs) {
            if ($this->matchCondition($cs)) {
                return true;
            }
        }

        return false;

    }

    /**
     * Returns true if critical state can be solved
     * by this intention
     *
     * @param CriticalState $cs
     * @return bool
     */
    private function matchCondition(CriticalState $cs)
    {
        $ls = $cs->belongsTo_object();
        if (is_null($ls)) {
            return false;
        }

        if (!is_a($ls, 'App\LogicalSensor')) {
            return false;
        }

        if (is_null($ls->physical_sensor)) {
            return false;
        }

        if (!is_null($ls->physical_sensor->belongsTo_object()) &&
            $ls->physical_sensor->belongsTo_object()->id == $this->sequence->terrarium_id) {
            if ($ls->type == $this->type) {
                switch ($this->intention) {
                    case 'increase':
                        return $ls->isCurrentValueLowerThanThreshold();
                    case 'decrease':
                        return $ls->isCurrentValueGreaterThanThreshold();
                }
            }
        }

        return false;
    }

    /**
     * @return Carbon
     */
    private function timeframe_start_today()
    {
        if (!$this->timeframe_start) {
            return Carbon::today();
        }
        $timeframe_split = explode(':', $this->timeframe_start);
        $time = Carbon::now();
        $time->hour = (int)($timeframe_split[0]);
        $time->minute = (int)($timeframe_split[1]);
        $time->second = 0;

        return $time;
    }

    /**
     * @return Carbon
     */
    private function timeframe_end_today()
    {
        if (!$this->timeframe_end) {
            return Carbon::tomorrow()->subSecond();
        }
        $timeframe_split = explode(':', $this->timeframe_end);
        $time = Carbon::now();
        $time->hour = (int)($timeframe_split[0]);
        $time->minute = (int)($timeframe_split[1]);
        $time->second = 0;

        return $time;
    }

    /**
     * @return string
     */
    public function icon()
    {
        return 'compass';
    }

    /**
     *
     */
    public function url()
    {
        return url('action_sequence_intentions/' . $this->id);
    }
}
