<?php

namespace App\Http\Controllers\Web;

use App\CustomComponentType;
use App\Http\Controllers\Controller;
use App\LogicalSensor;
use Gate;
use Illuminate\Http\Request;

/**
 * Class CustomComponentTypeController
 * @package App\Http\Controllers\Web
 */
class CustomComponentTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return void
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Gate::denies('api-write:custom_component_type')) {
            return response()->view('errors.401', [], 401);
        }

        return view('custom_components.types.create', [
            'sensorreading_types' => json_encode(LogicalSensor::types())
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return void
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param string $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $type = CustomComponentType::find($id);
        if (is_null($type)) {
            return response()->view('errors.404', [], 404);
        }

        return view('custom_components.types.show', [
            'custom_component_type' => $type
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param string $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        if (Gate::denies('api-write:custom_component_type')) {
            return response()->view('errors.401', [], 401);
        }

        $type = CustomComponentType::find($id);
        if (is_null($type)) {
            return response()->view('errors.404', [], 404);
        }

        return view('custom_components.types.edit', [
            'custom_component_type' => $type,
            'sensorreading_types' => LogicalSensor::types()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param string $id
     * @return void
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function delete($id)
    {
        if (Gate::denies('api-write:custom_component_type')) {
            return response()->view('errors.401', [], 401);
        }

        $type = CustomComponentType::find($id);
        if (is_null($type)) {
            return response()->view('errors.404', [], 404);
        }

        return view('custom_components.types.delete', [
            'custom_component_type' => $type
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param string $id
     * @return void
     */
    public function destroy($id)
    {
        //
    }
}
