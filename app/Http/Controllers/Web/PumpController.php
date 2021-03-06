<?php

namespace App\Http\Controllers\Web;

use App\Controlunit;
use App\Http\Controllers\Controller;
use App\Pump;
use App\Terrarium;
use Illuminate\Http\Request;

/**
 * Class PumpController
 * @package App\Http\Controllers
 */
class PumpController extends Controller
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
        return view('pumps.index', [
            'pumps' => Pump::get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        return view('pumps.create', [
            'preset' => $request->input('preset')
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
        $pump = Pump::find($id);
        if (is_null($pump)) {
            return response()->view('errors.404', [], 404);
        }

        return view('pumps.show', [
            'pump' => $pump
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
        $pump = Pump::find($id);

        if (is_null($pump)) {
            return response()->view('errors.404', [], 404);
        }

        $controlunits = Controlunit::all();
        $terraria = Terrarium::all();

        $models = array_column(
            Pump::select('model')->groupBy('model')->get()->toArray(),
            'model'
        );

        return view('pumps.edit', [
            'pump'          => $pump,
            'controlunits'  => $controlunits,
            'terraria'      => $terraria,
            'models'        => $models
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
     * @return mixed
     */
    public function delete($id)
    {
        $pump = Pump::find($id);

        if (is_null($pump)) {
            return response()->view('errors.404', [], 404);
        }

        return view('pumps.delete', [
            'pump'     => $pump
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
