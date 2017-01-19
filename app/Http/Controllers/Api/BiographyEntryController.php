<?php

namespace App\Http\Controllers\Api;

use App\Animal;
use App\Event;
use App\Events\BiographyEntryDeleted;
use App\Events\BiographyEntryUpdated;
use App\Http\Transformers\BiographyEntryTransformer;
use App\Property;
use App\Repositories\BiographyEntryRepository;
use Illuminate\Http\Request;
use Gate;
use App\Http\Requests;
use Illuminate\Support\Facades\DB;

/**
 * Class BiographyEntryController
 * @package App\Http\Controllers\Api
 */
class BiographyEntryController extends ApiController
{

    /**
     * @var BiographyEntryTransformer
     */
    protected $biographyEntryTransformer;


    /**
     * BiographyEntryController constructor.
     * @param BiographyEntryTransformer $_biographyEntryTransformer
     */
    public function __construct(BiographyEntryTransformer $_biographyEntryTransformer)
    {
        parent::__construct();
        $this->biographyEntryTransformer = $_biographyEntryTransformer;
    }


    /**
     * @param Request $request
     * @param $belongsTo_type
     * @param $belongsTo_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request, $belongsTo_type = null, $belongsTo_id = null)
    {
        if (Gate::denies('api-list')) {
            return $this->respondUnauthorized();
        }


        if (!is_null($belongsTo_type) && !is_null($belongsTo_id)) {
            $belongsTo = ('App\\' . $belongsTo_type)::find($belongsTo_id);

            if (is_null($belongsTo)) {
                return $this->respondNotFound("$belongsTo_type not found");
            }

            $entries = $belongsTo->entries();
        }
        else {
            $entries = Event::where('type', 'BiographyEntry');
        }

        $entries = $this->filter($request, $entries);

        /*
         * If raw is passed, pagination will be ignored
         * Permission api-list:raw is required
         */
        if ($request->has('raw') && Gate::allows('api-list:raw')) {
            $entries = $entries->get();
            foreach ($entries as &$f) {
                $f = (new BiographyEntryRepository($f))->show()->toArray();
            }

            return $this->setStatusCode(200)->respondWithData(
                $this->biographyEntryTransformer->transformCollection(
                    $entries->toArray()
                )
            );

        }

        $entries = $entries->paginate(env('PAGINATION_PER_PAGE', 20));

        foreach ($entries->items() as &$f) {
            $f = (new BiographyEntryRepository($f))->show()->toArray();
        }

        return $this->setStatusCode(200)->respondWithPagination(
            $this->biographyEntryTransformer->transformCollection(
                $entries->toArray()['data']
            ),
            $entries
        );

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        if (Gate::denies('api-write:property')) {
            return $this->respondUnauthorized();
        }


        $belongsTo = $this->getBelongsTo($request);

        $e = Event::create([
            'belongsTo_type' => $belongsTo['belongsTo_type'],
            'belongsTo_id' => $belongsTo['belongsTo_id'],
            'type' => 'BiographyEntry',
            'name' => $request->input('title'),
            'value' => nl2br($request->input('text'))
        ]);

        Property::create([
            'belongsTo_type' => 'Event',
            'belongsTo_id' => $e->id,
            'type' => 'BiographyEntryCategory',
            'name' => $request->input('category')
        ]);

        broadcast(new BiographyEntryUpdated($e));

        return $this->respondWithData([], [
            'redirect' => [
                'uri' => $e->belongsTo_object->url() . '#tab_biography'
            ]
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        if (Gate::denies('api-write:property')) {
            return $this->respondUnauthorized();
        }

        $e = Event::find($id);
        if (is_null($e)) {
            return $this->respondNotFound();
        }

        $cat = Property::where('belongsTo_type', 'Event')->where('belongsTo_id', $e->id)
                        ->where('type', 'BiographyEntryCategory')->get()->first();
        if (is_null($cat)) {
            return $this->setStatusCode(422)->respondWithError('Category not found');
        }

        $e->name = $request->input('title');
        $e->value = nl2br($request->input('text'));
        $e->save();

        $cat->name = $request->input('category');
        $cat->save();

        broadcast(new BiographyEntryUpdated($e));

        return $this->respondWithData([], [
            'redirect' => [
                'uri' => $e->belongsTo_object->url() . '#tab_biography'
            ]
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        if (Gate::denies('api-write:property')) {
            return $this->respondUnauthorized();
        }

        $e = Event::find($id);
        if (is_null($e)) {
            return $this->respondNotFound();
        }
        $cat = Property::where('belongsTo_type', 'Event')->where('belongsTo_id', $e->id)
            ->where('type', 'BiographyEntryCategory')->get()->first();
        if (!is_null($cat)) {
            $cat->delete();
        }

        $url = $e->belongsTo_object->url() . '#tab_biography';

        broadcast(new BiographyEntryDeleted($e));

        $e->delete();

        return $this->respondWithData([], [
            'redirect' => [
                'uri' => $url
            ]
        ]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function types(Request $request)
    {
        if (Gate::denies('api-list')) {
            return $this->respondUnauthorized();
        }

        $ft = Property::where('type', 'BiographyEntryCategoryType');

        $ft = $this->filter($request, $ft);

        $return = [];
        foreach ($ft->get() as $t) {
            $return[] = $t->name;
        }

        return $this->respondWithData($return);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store_type(Request $request)
    {
        if (Gate::denies('admin')) {
            return $this->respondUnauthorized();
        }

        if (!$this->checkInput(['name'], $request)) {
            return $this->setErrorCode(422)->respondWithError('Missing fields');
        }

        Property::create([
            'belongsTo_type' => 'System',
            'belongsTo_id' => '00000000-0000-0000-0000-000000000000',
            'type' => 'BiographyEntryCategoryType',
            'name' => $request->input('name'),
            'value' => $request->input('icon')
        ]);

        return $this->respondWithData([],
            [
                'redirect' => [
                    'uri' => url('categories#tab_bio_categories')
                ]
            ]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete_type(Request $request, $id)
    {
        if (Gate::denies('admin')) {
            return $this->respondUnauthorized();
        }

        $type = Property::find($id);
        $type->delete();

        return $this->respondWithData([],
            [
                'redirect' => [
                    'uri' => url('categories#tab_bio_categories')
                ]
            ]);
    }

}