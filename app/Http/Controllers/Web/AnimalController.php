<?php

namespace App\Http\Controllers\Web;

use App\Animal;
use App\Event;
use App\Http\Controllers\Controller;
use App\Terrarium;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

/**
 * Class AnimalController
 * @package App\Http\Controllers
 */
class AnimalController extends Controller
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
        return view('animals.index', [
            'animals' => Animal::orderBy('death_date')
                               ->orderBy('display_name')
                               ->get()
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
        return view('animals.create', [
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
        $animal = Animal::find($id);
        if (is_null($animal)) {
            return response()->view('errors.404', [], 404);
        }

        return view('animals.show', [
            'animal' => $animal
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
        $animal = Animal::find($id);

        if (is_null($animal)) {
            return response()->view('errors.404', [], 404);
        }

        $terraria = Terrarium::all();

        $common_names = array_column(
            Animal::select('common_name')->groupBy('common_name')->get()->toArray(),
            'common_name'
        );

        $latin_names = array_column(
            Animal::select('lat_name')->groupBy('lat_name')->get()->toArray(),
            'lat_name'
        );

        return view('animals.edit', [
            'animal'        => $animal,
            'terraria'      => $terraria,
            'common_names'  => $common_names,
            'latin_names'   => $latin_names
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
        $animal = Animal::find($id);

        if (is_null($animal)) {
            return response()->view('errors.404', [], 404);
        }

        return view('animals.delete', [
            'animal'     => $animal
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

   /**
     * @param $animal_id
     * @param $id
     * @return \Illuminate\View\View
     */
    public function show_caresheet($animal_id, $id)
    {
        $animal = Animal::find($animal_id);
        if (is_null($animal)) {
            return response()->view('errors.404', [], 404);
        }

        $caresheet = $animal->caresheets()->find($id);
        if (is_null($caresheet)) {
            return response()->view('errors.404', [], 404);
        }

        if (!is_null($caresheet->property('AnimalCaresheetProperty', 'terrarium_id'))) {

        }


        /*
         * Retrieve animal feedings
         */
        $feedings = new Collection();
        $i = 0;
        $max_entries = 20;
        $ids = explode(',', $caresheet->property('AnimalCaresheetProperty', 'feedings')->value);
        foreach ($ids as $f_id) {
            if ($i >= $max_entries) {
                break;
            }
            $feeding = $animal->feedings()->find($f_id);
            if (!is_null($feeding)) {
                $feedings->push($feeding);
                $i++;
            }
        }
        $feedings = $feedings->sortByDesc('created_at');

        /*
         * Retrieve animal weighings
         */
        $weighings = new Collection();
        $i = 0;
        $max_entries = 8;
        $ids = explode(',', $caresheet->property('AnimalCaresheetProperty', 'weighings')->value);
        foreach ($ids as $w_id) {
            if ($i >= $max_entries) {
                break;
            }
            $weighing = $animal->weighings()->find($w_id);
            if (!is_null($weighing)) {
                $weighings->push($weighing);
            }
        }
        $weighings = $weighings->sortByDesc('created_at');

        /*
         * Retrieve biography entries
         */
        $biography_entries = new Collection();
        $ids = explode(',', $caresheet->property('AnimalCaresheetProperty', 'biography_entries')->value);
        foreach ($ids as $e_id) {
            $weighing = $animal->biography_entries()->find($e_id);
            if (!is_null($weighing)) {
                $biography_entries->push($weighing);
            }
        }
        $biography_entries = $biography_entries->sortByDesc('created_at');

        return view('animals.caresheets.show', [
            'caresheet' => $caresheet,
            'feedings' => $feedings,
            'weighings' => $weighings,
            'biography_entries' => $biography_entries
        ]);

    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create_caresheet(Request $request)
    {
        $belongTo_Options = [];
        foreach (Event::belongTo_Types() as $t) {
            $belongTo_Options[$t] = ('App\\' . $t)::get();
        }

        return view('animals.caresheets.create', [
            'belongTo_Options' => $belongTo_Options,
            'preset' => $request->input('preset')
        ]);
    }

    /**
     * @param Request $request
     * @param null $animal_id
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Http\Response|\Illuminate\View\View
     */
    public function delete_caresheet(Request $request, $animal_id = null, $id)
    {
        $caresheet = Event::where('type', 'AnimalCaresheet')->find($id);
        if (is_null($caresheet)) {
            return response()->view('errors.404', [], 404);
        }

        return view('animals.caresheets.delete', [
            'caresheet' => $caresheet
        ]);
    }
}
