<?php

namespace App\Http\Controllers\Web;

use App\Animal;
use App\Property;
use Illuminate\Http\Request;

/**
 * Class AnimalFeedingSchedulePropertyController
 * @package App\Http\Controllers
 */
class AnimalFeedingSchedulePropertyController extends \App\Http\Controllers\Controller
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
     * @param null $animal_id
     * @return \Illuminate\Http\Response
     */
    public function index($animal_id = null)
    {
        return view('animals.feeding_schedules.index', [
            'animal_id' => $animal_id
        ]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @param $animal_id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create($animal_id)
    {
        $animal = Animal::find($animal_id);
        if (is_null($animal)) {
            return view('error.404');
        }

        return view('animals.feeding_schedules.create', [
            'animal' => $animal,
            'feeding_types' => Property::where('type', 'AnimalFeedingType')->orderBy('name')->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $animal_id)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param string $id
     * @return \Illuminate\Http\Response
     */
    public function show($animal_id, $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param string $id
     * @return \Illuminate\Http\Response
     */
    public function edit($animal_id, $id)
    {
        $animal = Animal::find($animal_id);
        if (is_null($animal)) {
            return view('error.404');
        }

        $afs = $animal->feeding_schedules()->where('id', $id)->get()->first();
        if (is_null($afs)) {
            return view('error.404');
        }

        return view('animals.feeding_schedules.edit', [
            'animal' => $animal,
            'afs' => $afs,
            'feeding_types' => Property::where('type', 'AnimalFeedingType')->orderBy('name')->get()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param string $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $animal_id, $id)
    {
        //
    }

    public function delete($animal_id, $id)
    {
        $animal = Animal::find($animal_id);
        if (is_null($animal)) {
            return view('error.404');
        }

        $afs = $animal->feeding_schedules()->where('id', $id)->get()->first();
        if (is_null($afs)) {
            return view('error.404');
        }

        return view('animals.feeding_schedules.delete', [
            'animal' => $animal,
            'afs' => $afs,
            'feeding_types' => Property::where('type', 'AnimalFeedingType')->orderBy('name')->get()
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param string $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($animal_id, $id)
    {
        //
    }
}
