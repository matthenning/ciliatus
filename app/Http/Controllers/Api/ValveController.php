<?php

namespace App\Http\Controllers\Api;

use App\Controlunit;
use App\Pump;
use App\Terrarium;
use App\Valve;
use Gate;
use Illuminate\Http\Request;


/**
 * Class ValveController
 * @package App\Http\Controllers
 */
class ValveController extends ApiController
{

    /**
     * ValveController constructor.
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        parent::__construct($request);

        $this->errorCodeNamespace = '2E';
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        return parent::default_index($request);
    }

    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, $id)
    {
        return parent::default_show($request, $id);
    }

    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(Request $request, $id)
    {

        if (Gate::denies('api-write:valve')) {
            return $this->respondUnauthorized();
        }

        /**
         * @var Valve $valve
         */
        $valve = Valve::find($id);
        if (is_null($valve)) {
            return $this->respondNotFound();
        }

        $valve->delete();

        return $this->setStatusCode(200)->respondWithData([], [
            'redirect' => [
                'uri'   => url('valves')
            ]
        ]);

    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {

        if (Gate::denies('api-write:valve')) {
            return $this->respondUnauthorized();
        }

        if (!$request->has('name')) {
            return $this->setStatusCode(422)
                        ->setErrorCode('104')
                        ->respondWithErrorDefaultMessage(['missing_fields' => 'name']);
        }

        /**
         * @var Valve $valve
         */
        $valve = Valve::create([
            'name' => $request->input('name')
        ]);

        return $this->setStatusCode(200)->respondWithData(
            [
                'id'    => $valve->id
            ],
            [
                'redirect' => [
                    'uri'   => url('valves/' . $valve->id . '/edit')
                ]
            ]
        );

    }

    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {

        if (Gate::denies('api-write:valve')) {
            return $this->respondUnauthorized();
        }

        /**
         * @var Valve $valve
         */
        $valve = Valve::find($id);
        if (is_null($valve)) {
            return $this->respondNotFound();
        }

        if ($request->filled('pump') && strlen($request->input('pump')) > 0) {
            $pump = Pump::find($request->input('pump'));
            if (is_null($pump)) {
                return $this->respondRelatedModelNotFound(Pump::class);
            }
        }

        if ($request->filled('terrarium') && strlen($request->input('terrarium')) > 0) {
            $terrarium = Terrarium::find($request->input('terrarium'));
            if (is_null($terrarium)) {
                return $this->respondRelatedModelNotFound(Terrarium::class);
            }
        }

        if ($request->filled('controlunit') && strlen($request->input('controlunit')) > 0) {
            $controlunit = Controlunit::find($request->input('controlunit'));
            if (is_null($controlunit)) {
                return $this->respondRelatedModelNotFound(Controlunit::class);
            }
        }

        $this->updateModelProperties($valve, $request, [
            'name', 'pump_id' => 'pump', 'terrarium_id' => 'terrarium', 'controlunit_id' => 'controlunit', 'model'
        ]);

        $this->updateExternalProperties($valve, $request, [
            'ControlunitConnectivity' => [
                'bus_type', 'i2c_address', 'i2c_multiplexer_address', 'i2c_multiplexer_port', 'gpio_pin', 'gpio_default_high'
            ]
        ]);
        $valve->save();

        return $this->setStatusCode(200)->respondWithData([], [
            'redirect' => [
                'uri'   => url('valves')
            ]
        ]);

    }

}
