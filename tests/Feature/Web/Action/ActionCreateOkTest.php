<?php

namespace Tests\Feature\Web\Action;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\TestHelperTrait;

/**
 * Class ActionIndexOkTest
 * @package Tests\Feature
 */
class ActionCreateOkTest extends TestCase
{

    use TestHelperTrait;

    public function test()
    {

        $user = $this->createUserWeb();

        $this->actingAs($user)->get('/actions/create')->assertStatus(200);

        $this->cleanupUsers();

    }

}
