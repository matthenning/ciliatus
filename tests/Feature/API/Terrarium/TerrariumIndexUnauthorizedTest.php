<?php

namespace Tests\Feature\API\Terrarium;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\TestHelperTrait;

/**
 * class TerrariumIndexUnauthorizedTest
 * @package Tests\Feature
 */
class TerrariumIndexUnauthorizedTest extends TestCase
{

    use TestHelperTrait;

    public function test()
    {

        $token = $this->createUserNothing();

        $response = $this->json('GET', '/api/v1/terraria', [], [
            'Authorization' => 'Bearer ' . $token
        ]);
        $response->assertStatus(401);

        $this->cleanupUsers();

    }

}
