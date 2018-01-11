<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\LogicalSensor;
use App\LogicalSensorThreshold;
use Illuminate\Http\Request;

use App\Http\Requests;

class LogicalSensorThresholdController extends Controller
{

    /**
     * ApiController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('logical_sensor_thresholds.index', [
            'logical_sensor_thresholds' => LogicalSensorThreshold::orderBy('created_at', 'desc')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $belongTo_Options['LogicalSensor'] = LogicalSensor::get();

        return view('logical_sensor_thresholds.create', [
            'belongTo_Options' => $belongTo_Options,
            'preset' => $request->input('preset')
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $logical_sensor_threshold = LogicalSensorThreshold::find($id);
        if (is_null($logical_sensor_threshold)) {
            return view('errors.404', [], 404);
        }

        return view('logical_sensor_thresholds.show', [
            'logical_sensor_threshold' => $logical_sensor_threshold
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $logical_sensor_threshold = LogicalSensorThreshold::find($id);

        if (is_null($logical_sensor_threshold)) {
            return view('errors.404', [], 404);
        }

        $belongTo_Options['LogicalSensor'] = LogicalSensor::get();

        return view('logical_sensor_thresholds.edit', [
            'logical_sensor_threshold' => $logical_sensor_threshold,
            'belongTo_Options' => $belongTo_Options
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    public function delete($id)
    {
        $logical_sensor_threshold = LogicalSensorThreshold::find($id);

        if (is_null($logical_sensor_threshold)) {
            return view('errors.404', [], 404);
        }

        return view('logical_sensor_thresholds.delete', [
            'logical_sensor_threshold'     => $logical_sensor_threshold
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
