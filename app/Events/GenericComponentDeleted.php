<?php

namespace App\Events;

use App\Http\Transformers\GenericComponentTransformer;
use App\GenericComponent;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class GenericComponentDeleted implements ShouldBroadcast
{
    use InteractsWithSockets, SerializesModels;

    public $generic_component_id;

    /**
     * Create a new event instance.
     */
    public function __construct($generic_component_id)
    {
        $this->generic_component_id = $generic_component_id;
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