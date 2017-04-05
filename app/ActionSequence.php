<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class ActionSequence
 * @package App
 */
class ActionSequence extends CiliatusModel
{

    use Traits\Uuids;

    const TEMPLATE_IRRIGATION = 'irrigate';
    const TEMPLATE_VENTILATE = 'ventilate';
    const TEMPLATE_HEAT_UP = 'heat_up';
    const TEMPLATE_COOL_DOWN = 'cool_down';

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     *
     */
    public function delete()
    {
        foreach ($this->actions as $a) {
            $a->delete();
        }
        foreach ($this->schedules as $ass) {
            $ass->delete();
        }
        foreach ($this->triggers as $ast) {
            $ast->delete();
        }
        foreach ($this->intentions as $asi) {
            $asi->delete();
        }

        parent::delete();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function actions()
    {
        return $this->hasMany('App\Action')->orderBy('sequence_sort_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function schedules()
    {
        return $this->hasMany('App\ActionSequenceSchedule')->orderBy('starts_at');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function triggers()
    {
        return $this->hasMany('App\ActionSequenceTrigger')->with('logical_sensor')->orderBy('timeframe_start');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function intentions()
    {
        return $this->hasMany('App\ActionSequenceIntention')->orderBy('timeframe_start');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function terrarium()
    {
        return $this->belongsTo('App\Terrarium');
    }

    /**
     * Generates an associated Action Sequence Intention
     *
     * @param $type
     * @param $intention
     * @param null $minimum_timeout_minutes
     * @param null $timeframe_start
     * @param null $timeframe_end
     * @return mixed
     */
    public function generateIntention($type,
                                      $intention,
                                      $minimum_timeout_minutes = null,
                                      $timeframe_start = null,
                                      $timeframe_end = null)
    {
        $minimum_timeout_minutes = is_null($minimum_timeout_minutes) ?
            Carbon::parse(env('DEFAULT_DAY_START', '08:00:00'))->format('H:i:s') : $minimum_timeout_minutes;

        $timeframe_start = is_null($timeframe_start) ? env('DEFAULT_DAY_START', '08:00:00'): $timeframe_start;
        $timeframe_end = is_null($timeframe_end) ? env('DEFAULT_DAY_END', '08:00:00'): $timeframe_end;

        $asi = ActionSequenceIntention::create([
            'name' => 'ASI_' . $this->name . '_' . $minimum_timeout_minutes,
            'type' => $type,
            'intention' => $intention,
            'minimum_timeout_minutes' => $minimum_timeout_minutes,
            'timeframe_start' => $timeframe_start,
            'timeframe_end' => $timeframe_end,
            'action_sequence_id' => $this->id
        ]);

        return $asi;
    }

    /**
     * @param $template
     */
    public function generateIntentionsByTemplate($template)
    {
        switch ($template) {

            case self::TEMPLATE_IRRIGATION:
                $this->generateIntention(ActionSequenceIntention::TYPE_HUMIDITY_PERCENT, ActionSequenceIntention::INTENTION_INCREASE);
                break;

            case self::TEMPLATE_VENTILATE:
                $this->generateIntention(ActionSequenceIntention::TYPE_HUMIDITY_PERCENT, ActionSequenceIntention::INTENTION_DECREASE);
                break;

        }
    }

    /**
     * Tries to generate actions for components matching the defined template.
     * E.g. the irrigation template activates associated valves and pumps.
     *
     * @param $template
     */
    public function generateActionByTemplate($template)
    {
        switch ($template) {

            case self::TEMPLATE_IRRIGATION:

                if (!$this->valves->count() > 0)
                    break;

                foreach ($this->terrarium->valves as $valve) {
                    $action = $valve->generateActionForSequence($this->duration_minutes, 'running', $this);
                    $this->appendAction($action);

                    if (!is_null($valve->pump)) {
                        $action = $valve->pump->generateActionForSequence($this->duration_minutes, 'running', $this);
                        $this->appendAction($action);
                    }
                }

                break;

            case self::TEMPLATE_VENTILATE:

                $generic_components = GenericComponentType::getGenericComponentsByIntention(
                    ActionSequenceIntention::TYPE_HUMIDITY_PERCENT,
                    ActionSequenceIntention::INTENTION_DECREASE,
                    $this->terrarium->generic_components()->getQuery()
                );

                $this->generateActionsForComponentsAndAppend($generic_components);

                break;

            case self::TEMPLATE_HEAT_UP:

                $generic_components = GenericComponentType::getGenericComponentsByIntention(
                    ActionSequenceIntention::TYPE_TEMPERATURE_CELSIUS,
                    ActionSequenceIntention::INTENTION_INCREASE,
                    $this->terrarium->generic_components()->getQuery()
                );

                $this->generateActionsForComponentsAndAppend($generic_components);

                break;

            case self::TEMPLATE_COOL_DOWN:

                $generic_components = GenericComponentType::getGenericComponentsByIntention(
                    ActionSequenceIntention::TYPE_TEMPERATURE_CELSIUS,
                    ActionSequenceIntention::INTENTION_DECREASE,
                    $this->terrarium->generic_components()->getQuery()
                );

                $this->generateActionsForComponentsAndAppend($generic_components);

                break;
        }
    }

    /**
     * Generates Actions for all passed components
     * and appends them to the sequence.
     *
     * @param $components
     */
    public function generateActionsForComponentsAndAppend($components)
    {
        foreach ($components as $component) {
            $this->appendAction(
                $component->generateActionForSequence(
                    $this->duration_minutes,
                    $component->getDefaultRunningState(),
                    $this
                ),
                false
            );
        }
    }

    /**
     * Assigns an action to this action sequence
     * and automatically sets sequence_sort_id
     *
     * @param Action $action
     * @param bool $auto_wait If the wait_for_started_action_id will be set to the previous action by sequence_sort_id
     */
    public function appendAction(Action $action, $auto_wait = true)
    {
        $action->action_sequence_id = $this->id;

        $sequence_prev = $this->actions()->orderBy('sequence_sort_id', 'desc')->get()->first();
        $action->sequence_sort_id = is_null($sequence_prev) ? 1 : $sequence_prev->sequence_sort_id + 1;

        if ($auto_wait) {
            $action->wait_for_started_action_id = is_null($sequence_prev) ? null : $sequence_prev->id;
        }

        $action->save();
    }


    /**
     * @return bool
     */
    public static function stopped()
    {
        return !is_null(Property::where('type', 'SystemProperty')->where('name', 'stop_all_action_sequences')->get()->first());
    }

    /**
     * @return string
     */
    public function icon()
    {
        return 'playlist_play';
    }

    /**
     *
     */
    public function url()
    {
        return url('action_sequences/' . $this->id);
    }
}
