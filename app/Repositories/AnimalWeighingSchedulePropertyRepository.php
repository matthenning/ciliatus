<?php

namespace App\Repositories;

use App\Property;
use Carbon\Carbon;

/**
 * Class AnimalWeighingSchedulePropertyRepository
 * @package App\Repositories
 */
class AnimalWeighingSchedulePropertyRepository extends Repository {

    /**
     * @var Property
     */
    protected $scope;

    /**
     * AnimalWeighingScheduleRepository constructor.
     * @param Property $scope
     */
    public function __construct(Property $scope = null)
    {

        $this->scope = $scope ? : new Property();
        $this->addCiliatusSpecificFields();

    }

    /**
     * @return Property
     */
    public function show()
    {
        $ws = $this->scope;
        $belongsTo_object = $ws->belongsTo_object();
        $ws->animal = is_null($belongsTo_object) ? null : $ws->belongsTo_object()->enrich();
        $last_weighing_of_type = $belongsTo_object->last_weighing();
        $starts_at = $ws->property('AnimalWeighingScheduleStartDate', 'starts_at');

        /*
         * If there already was a weighing of this type
         * and the last weighing was after the schedule's starts_at date:
         *
         * Compare the schedule to the last weighing
         */
        if ((!is_null($last_weighing_of_type) && is_null($starts_at)) ||
            (!is_null($last_weighing_of_type) && !is_null($starts_at) && Carbon::parse($starts_at->value)->lte($last_weighing_of_type->created_at->addDays((int)$ws->value)))) {
            $last_weighing_at = $last_weighing_of_type->created_at;
            $last_weighing_at->hour = 0;
            $last_weighing_at->minute = 0;
            $last_weighing_at->second = 0;

            $next_weighing_at = (clone $last_weighing_at)->addDays((int)$ws->value);

            $now = Carbon::now();
            $now->hour = 0;
            $now->minute = 0;
            $now->second = 0;

            $ws->next_weighing_at = $next_weighing_at->format('Y-m-d');
            $ws->next_weighing_at_diff = $now->diffInDays($next_weighing_at, false);
        }
        else {
            /*
             * There was no last weighing or
             * there was no weighing since the starts_at value of the schedule:
             *
             * Compare to the starts_at date
             * if there is no starts_at: Compare to current date
             */
            $next_weighing_at = '';
            if (is_null($starts_at)) {
                $next_weighing_at = $ws->created_at->addDays((int)$ws->value);
                $ws->next_weighing_at = $next_weighing_at->format('Y-m-d');
            }
            else {
                $next_weighing_at = Carbon::parse($starts_at->value);
                $ws->next_weighing_at = $starts_at->value;
            }
            $ws->next_weighing_at_diff = Carbon::now()->diffInDays($next_weighing_at, false);
        }
        return $ws;
    }

}