<?php

namespace Tests\Feature\Web\ActionSequence;

use App\ActionSequence;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\TestHelperTrait;

/**
 * Class ActionSequenceIndexOkTest
 * @package Tests\Feature
 */
class ActionSequenceShowOkTest extends TestCase
{

    use TestHelperTrait;

    public function test()
    {

        $user = $this->createUserWeb();

        $as = ActionSequence::create();
        $this->actingAs($user)->get('/action_sequences/' . $as->id)->assertStatus(302);
        $as->delete();

        $this->cleanupUsers();

    }

}
