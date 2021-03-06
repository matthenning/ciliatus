<?php

namespace App\Events;

use App\CriticalState;
use App\Http\Transformers\CriticalStateTransformer;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Queue\SerializesModels;
use Tests\Feature\CriticalStateTest;

/**
 * Class CriticalStateCreated
 * @package App\Events
 */
class CriticalStateCreated implements ShouldBroadcast
{
    use InteractsWithSockets, SerializesModels;

    /**
     * @var string $id
     */
    public $id;

    /**
     * Create a new event instance.
     *
     * @param CriticalState $critical_state
     */
    public function __construct(CriticalState $critical_state)
    {
        $this->id = $critical_state->id;
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
