<?php

namespace App\Http\Controllers\Api;

use App\Animal;
use App\Http\Transformers\AnimalCaresheetTransformer;
use App\Terrarium;
use Carbon\Carbon;
use Gate;
use Illuminate\Http\Request;


/**
 * Class AnimalController
 * @package App\Http\Controllers
 */
class AnimalController extends ApiController
{

    /**
     * AnimalController constructor.
     */
    public function __construct(Request $request)
    {
        parent::__construct($request);

        $this->errorCodeNamespace = '16';
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

        if (Gate::denies('api-write:animal')) {
            return $this->respondUnauthorized();
        }

        /**
         * @var Animal $animal
         */
        $animal = Animal::find($id);
        if (is_null($animal)) {
            return $this->respondNotFound();
        }

        $animal->delete();

        return $this->setStatusCode(200)->respondWithData([], [
            'redirect' => [
                'uri'   => url('animals')
            ]
        ]);

    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {

        if (Gate::denies('api-write:animal')) {
            return $this->respondUnauthorized();
        }

        /**
         * @var Animal $animal
         */
        $animal = Animal::create([
            'display_name' => $request->input('display_name')
        ]);

        $this->update($request, $animal->id);

        return $this->setStatusCode(200)->respondWithData(
            [
                'id'    =>  $animal->id
            ],
            [
                'redirect' => [
                    'uri'   => url('animals/' . $animal->id . '/edit')
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

        if (Gate::denies('api-write:animal')) {
            return $this->respondUnauthorized();
        }

        /**
         * @var Animal $animal
         */
        $animal = Animal::find($id);
        if (is_null($animal)) {
            return $this->respondNotFound();
        }

        /**
         * @var Terrarium $terrarium
         */
        $terrarium = null;
        if ($request->filled('terrarium')) {
            $terrarium = Terrarium::find($request->input('terrarium'));
            if (is_null($terrarium)) {
                return $this->respondRelatedModelNotFound(Terrarium::class);
            }
        }

        if ($request->filled('birthdate')) {
            try {
                Carbon::parse($request->input('birthdate'));
            }
            catch (\Exception $ex) {
                return $this->setStatusCode(422)
                            ->setErrorCode('103')
                            ->respondWithErrorDefaultMessage(['timestamp' => 'birth date']);
            }
        }

        if ($request->filled('deathdate')) {
            try {
                Carbon::parse($request->input('deathdate'));
            }
            catch (\Exception $ex) {
                return $this->setStatusCode(422)
                            ->setErrorCode('103')
                            ->respondWithErrorDefaultMessage(['timestamp' => 'death date']);
            }
        }

        if ($request->filled('active')) {
            if ($request->input('active') == 'on' && !$animal->active()) {
                $animal->enable();
            }
            else if ($request->input('active') == 'off' && $animal->active()) {
                $animal->disable();
            }
        }

        $this->updateModelProperties($animal, $request, [
            'display_name', 'common_name', 'lat_name' => 'latin_name',
            'gender', 'terrarium_id' => 'terrarium', 'birth_date', 'death_date'
        ]);

        $animal->save();

        if (!is_null($terrarium)) {
            $terrarium->save();
        }

        return $this->setStatusCode(200)->respondWithData([], [
            'redirect' => [
                'uri'   => url('animals')
            ]
        ]);

    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store_caresheet(Request $request)
    {
        if (Gate::denies('api-write:caresheet')) {
            return $this->respondUnauthorized();
        }

        /**
         * @var Animal $animal
         */
        $animal = Animal::find($this->getBelongsTo($request)['belongsTo_id']);
        if (is_null($animal)) {
            return $this->respondNotFound();
        }

        $caresheet = $animal->generate_caresheet();

        return $this->respondWithData([], [
            'redirect' => [
                'uri' => url('animals/' . $animal->id . '/caresheets/' . $caresheet->id)
            ]
        ]);

    }

    /**
     * @param $animal_id
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete_caresheet($animal_id, $id)
    {
        if (Gate::denies('api-write:caresheet')) {
            return $this->respondUnauthorized();
        }

        /**
         * @var Animal $animal
         */
        $animal = Animal::find($animal_id);
        if (is_null($animal)) {
            return $this->respondNotFound();
        }

        $animal->delete_caresheet($id);

        return $this->respondWithData([], [
            'redirect' => [
                'uri' => url('animals/' . $animal->id . '/#tab_caresheets')
            ]
        ]);

    }

    /**
     * @param Request $request
     * @param $animal_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function caresheets(Request $request, $animal_id)
    {
        /**
         * @var Animal $animal
         */
        $animal = Animal::find($animal_id);
        if (is_null($animal)) {
            return $this->respondNotFound();
        }

        $query = $animal->caresheets()->getQuery();
        $caresheets = $this->filter($request, $query);

        return $this->respondTransformedAndPaginated(
            $request,
            $caresheets,
            [],
            'show',
            'AnimalCaresheetRepository',
            'AnimalCaresheetTransformer');
    }

}
