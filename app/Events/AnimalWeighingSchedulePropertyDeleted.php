<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

/**
 * Class AnimalWeighingScheduleEventDeleted
 * @package App\Events
 */
class AnimalWeighingSchedulePropertyDeleted implements ShouldBroadcast
{
    use InteractsWithSockets, SerializesModels;

    /**
     * @var
     */
    public $animal_weighing_schedule_id;


    /**
     * AnimalWeighingScheduleDeleted constructor.
     * @param String $animal_weighing_schedule_id
     */
    public function __construct($animal_weighing_schedule_id)
    {
        $this->animal_weighing_schedule_id = $animal_weighing_schedule_id;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('dashboard-updates');
    }
}