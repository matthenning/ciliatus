<?php

namespace App\Events;

use App\Http\Transformers\ActionSequenceIntentionTransformer;
use App\ActionSequenceIntention;
use Carbon\Carbon;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Log;

class ActionSequenceIntentionDeleted implements ShouldBroadcast
{
    use InteractsWithSockets, SerializesModels;

    public $action_sequence_intention_id;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($action_sequence_intention_id)
    {
        $this->action_sequence_intention_id = $action_sequence_intention_id;
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
