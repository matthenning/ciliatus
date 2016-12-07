<?php

namespace App\Http\Controllers\Api;

use App\Log;
use App\Property;
use App\Http\Transformers\LogTransformer;
use Auth;
use Carbon\Carbon;
use ErrorException;
use Gate;
use \Illuminate\Http\Request;


/**
 * Class LogController
 * @package App\Http\Controllers
 */
class LogController extends ApiController
{
    /**
     * @var LogTransformer
     */
    protected $logTransformer;

    /**
     * LogController constructor.
     * @param LogTransformer $_logTransformer
     */
    public function __construct(LogTransformer $_logTransformer)
    {
        parent::__construct();
        $this->logTransformer = $_logTransformer;
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        if (Gate::denies('api-list')) {
            return $this->respondUnauthorized();
        }

        $logs = Log::query();

        $logs = $this->filter($request, $logs);

        /*
         * If raw is passed, pagination will be ignored
         * Permission api-list:raw is required
         */
        if ($request->has('raw') && Gate::allows('api-list:raw')) {
            $logs = $logs->get();

            foreach ($logs as &$l) {
                $l->source = $l->source()->get()->first();
                $l->target = $l->target()->get()->first();
                $l->associated = $l->associated()->get()->first();
            }

            return $this->setStatusCode(200)->respondWithData(
                $this->logTransformer->transformCollection(
                    $logs->toArray()
                )
            );

        }

        $logs = $logs->paginate(env('PAGINATION_PER_PAGE', 20));

        foreach ($logs->items() as &$l) {
            $l->source = $l->source()->get()->first();
            $l->target = $l->target()->get()->first();
            $l->associated = $l->associated()->get()->first();
        }

        return $this->setStatusCode(200)->respondWithPagination(
            $this->logTransformer->transformCollection(
                $logs->toArray()['data']
            ),
            $logs
        );

    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {

        if (Gate::denies('api-read')) {
            return $this->respondUnauthorized();
        }

        $log = Log::with('source_object')
                    ->with('target_object')
                    ->with('associated')
                    ->find($id);

        if (!$log) {
            return $this->respondNotFound('Log not found');
        }

        return $this->setStatusCode(200)->respondWithData(
            $this->logTransformer->transform(
                $log->toArray()
            )
        );
    }


    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Request $request, $id)
    {

    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {

        if (Gate::denies('api-write:log')) {
            return $this->respondUnauthorized();
        }

    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {

    }

}