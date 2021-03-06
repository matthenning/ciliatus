<?php

namespace App\Http\Controllers\Api;

use App\CiliatusModel;
use App\Factories\RepositoryFactory;
use App\Factories\TransformerFactory;
use App\Http\Controllers\Controller;
use App\Property;
use Gate;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Matthenning\EloquentApiFilter\Traits\FiltersEloquentApi;

/**
 * Class ApiController
 * @package App\Http\Controllers\Api
 */
class ApiController extends Controller
{

    use FiltersEloquentApi;

    /**
     * Error code namespace defines the part before the x in an error code
     *
     * @var string $errorCodeNamespace
     */
    protected $errorCodeNamespace = '00';

    /**
     * @var Request $request
     */
    protected $request = null;

    /**
     * @var $statusCode
     */
    protected $statusCode = 200;

    /**
     * Error code identifier
     * 101 - Model not found
     * 102 - Related model not found
     * 103 - Could not parse timestamp
     * 104 - Missing fields
     * 105 - Class not found
     * 106 - Unauthorized
     *
     * @var string $errorCode
     */
    protected $errorCode;

    /**
     * @var array $debug_info
     */
    protected $debug_info = [];

    /**
     * ApiController constructor.
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * @return string
     */
    protected function getModelNameFromController()
    {
        $model_class_name_arr = explode('\\', get_class($this));
        preg_match_all('/((?:^|[A-Z])[a-z]+)/',end($model_class_name_arr),$matches, PREG_PATTERN_ORDER);
        return 'App\\' . implode(
                '',
                array_slice(
                    $matches[0],
                    0,
                    count($matches[0]) - 1
                )
            );
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function default_index(Request $request)
    {
        if (Gate::denies('api-list')) {
            return $this->respondUnauthorized();
        }

        $model_class_name = $this->getModelNameFromController();

        $objects = $model_class_name::query();
        $objects = $this->filter($request, $objects);

        if ($request->has('select_ids')) {
            $objects = $objects->select('id');
        }

        return $this->respondTransformedAndPaginated(
            $request,
            $objects
        );
    }

    /**
     * @param Request $request
     * @param string $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function default_show(Request $request, $id)
    {
        if (Gate::denies('api-read')) {
            return $this->respondUnauthorized();
        }

        $model_class_name = $this->getModelNameFromController();

        $object = $this->filter(
            $request,
            $model_class_name::query()
        )->find($id);

        if (is_null($object)) {
            return $this->setStatusCode(404)
                        ->setErrorCode('101')
                        ->respondWithErrorDefaultMessage();
        }

        $this->applyRepository($object);

        return $this->setStatusCode(200)->respondWithData(
            TransformerFactory::get($object)->transform(
                $object->toArray()
            )
        );
    }


    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function files(Request $request, $id) {
        $model_class_name = $this->getModelNameFromController();
        $model = $model_class_name::find($id);
        if (is_null($model)) {
            return $this->setStatusCode(404)->respondWithError($model_class_name . ' not found');
        }

        $query = $model->files()->getQuery();
        $files = $this->filter($request, $query);

        return $this->respondTransformedAndPaginated(
            $request,
            $files
        );
    }

    /**
     * @return mixed
     */
    public function getStatusCode()
    {
        return $this->statusCode;
    }

    /**
     * @param $statusCode
     * @return $this
     */
    public function setStatusCode($statusCode)
    {
        $this->statusCode = $statusCode;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getErrorCode()
    {
        return $this->errorCode;
    }

    /**
     * @param mixed $errorCode
     * @return ApiController
     */
    public function setErrorCode($errorCode)
    {
        $this->errorCode = $errorCode;

        return $this;
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondNotFound()
    {
        return $this->setStatusCode(404)
                    ->setErrorCode('101')
                    ->respondWithErrorDefaultMessage();
    }

    /**
     * @param $model
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondRelatedModelNotFound($model)
    {
        return $this->setStatusCode(422)
                    ->setErrorCode('102')
                    ->respondWithErrorDefaultMessage(['related_object' => $model]);
    }

    /**
     * @param string $message
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondUnauthorized($message = 'Unauthorized')
    {
        return $this->setStatusCode(401)->setErrorCode(106)->respondWithError($message);
    }

    /**
     * @param $message
     * @param null $entityId
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondWithError($message, $entityId = null)
    {
        \Log::warning(
            'Request terminated in error ' . $this->getStatusCode() .
            ' (' . $this->getFullyQualifiedErrorCode() . '): ' . $message
        );

        return $this->respond([
            'http_code' => $this->getStatusCode(),
            'error'     => [
                'error_code'    => $this->getFullyQualifiedErrorCode(),
                'message'       => $message
            ]
        ]);
    }

    /**
     * @param array $arguments
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondWithErrorDefaultMessage($arguments = [])
    {
        if (!is_array($arguments)) {
            $arguments = [$arguments];
        }

        if ($this->errorCodeIsCommon()) {
            $trans_key = 'errors.codes.common.' . $this->errorCode;
        }
        else {
            $trans_key = 'errors.codes.custom.' . $this->errorCodeNamespace . '.' . $this->errorCode;
        }

        return $this->respondWithError(trans($trans_key, $arguments));
    }

    /**
     * @param $data
     * @param LengthAwarePaginator $paginator
     * @param array $meta
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondWithPagination($data, LengthAwarePaginator $paginator, $meta = [])
    {
        $meta['pagination'] = [
            'total_items'   => $paginator->total(),
            'total_pages'   => $paginator->lastPage(),
            'current_page'  => $paginator->currentPage(),
            'per_page'         => $paginator->perPage()
        ];

        if ($this->request->has('select_ids')) {
            return $this->respondWithData(
                array_column($data, 'id'),
                $meta
            );
        }

        return $this->respondWithData($data, $meta);
    }


    /**
     * @param $data
     * @param array $meta
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondWithData($data = [], $meta = [])
    {
        return $this->respond([
            'http_code' => $this->getStatusCode(),
            'data'  =>  $data,
            'meta'  =>  $meta
        ]);
    }

    /**
     * @param $data
     * @param array $headers
     * @return \Illuminate\Http\JsonResponse
     */
    public function respond($data, $headers = [])
    {
        if (count($this->debug_info) > 0) {
            $data['debug'] = $this->debug_info;
        }

        return response()->json($data)->setStatusCode($this->getStatusCode());
    }

    /**
     * Append debug info to the response
     *
     * @param $data
     */
    public function appendDebugInfo($data)
    {
        $this->debug_info[] = $data;
    }

    /**
     * @param Request $request
     * @param Builder $query
     * @param array   $repository_parameters
     * @param string  $repository_method
     * @param null    $override_repository_name
     * @param null    $override_transformer_name
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondTransformedAndPaginated(Request $request,
                                                   Builder $query,
                                                   array $repository_parameters = [],
                                                   $repository_method = 'show',
                                                   $override_repository_name = null,
                                                   $override_transformer_name = null)
    {

        if ($request->filled('all')) {
            if (Gate::denies('api-list:all')) {
                return $this->respondUnauthorized('Not permitted to index object without pagination');
            }
            /*
             * If raw is passed, pagination will be ignored
             * Permission api-list:raw is required
             */
            $objects = $query->get();

            $this->applyRepository(
                $objects,
                $repository_parameters,
                $repository_method,
                $override_repository_name
            );

            if ($this->request->has('select_ids')) {
                return $this->respondWithData(
                    array_column($objects->toArray(), 'id')
                );
            }

            return $this->setStatusCode(200)
                        ->respondWithData($this->applyTransformer($objects, $override_transformer_name));

        }
        else {
            /*
             * If pagination is requested, apply paginator
             */
            $objects = $this->paginate($request, $query);

            if (count($objects->items()) < 1) {
                return $this->setStatusCode(200)
                            ->respondWithPagination([], $objects);
            }


            $fq_override_transformer_name = 'App\Http\Transformers\\' . $override_transformer_name;
            $transformer = is_null($override_transformer_name) ?
                TransformerFactory::get($objects->items()[0]) : new $fq_override_transformer_name();

            $this->applyRepository(
                $objects->items(),
                $repository_parameters,
                $repository_method,
                $override_repository_name
            );


            return $this->setStatusCode(200)->respondWithPagination(
                $transformer->transformCollection(
                    $objects->toArray()['data']
                ),
                $objects
            );

        }
    }

    /**
     * Retrieves additional data for each object from a repository
     *
     * @param array|Collection|CiliatusModel $objects
     * @param array                          $repository_parameters
     * @param string                         $repository_method
     * @param null                           $override_repository_name
     */
    protected function applyRepository($objects,
                                       array $repository_parameters = [],
                                       $repository_method = 'show',
                                       $override_repository_name = null)
    {
        if (is_a($objects, 'Illuminate\Support\Collection') || is_array($objects)) {
            foreach ($objects as &$o) {
                $this->applyRepository(
                    $o,
                    $repository_parameters,
                    $repository_method,
                    $override_repository_name
                );
            }
        }
        else {
            $fq_override_repository_name = 'App\Repositories\\' . $override_repository_name;
            $repository = is_null($override_repository_name) ?
                RepositoryFactory::get($objects) : new $fq_override_repository_name($objects);
            foreach ($repository_parameters as $n=>$v) {
                $repository->addShowParameter($n, $v);
            }
            $repository->$repository_method();
        }

    }


    /**
     * Transforms a single object or an array/Collection of objects
     *
     * @param array|Collection|CiliatusModel $objects
     * @param null                           $override_transformer_name
     * @return array
     */
    protected function applyTransformer($objects, $override_transformer_name = null)
    {

        if (is_a($objects, 'Illuminate\Support\Collection')) {
            $transformer = TransformerFactory::get($objects->first());
            return $transformer->transformCollection($objects->toArray());
        }

        if (is_array($objects)) {
            $fq_override_transformer_name = 'App\Http\Transformers\\' . $override_transformer_name;
            $transformer = is_null($override_transformer_name) ?
                TransformerFactory::get($objects[0]) : $fq_override_transformer_name();
            return $transformer->transformCollection($objects->toArray());
        }
        else {
            $fq_override_transformer_name = 'App\Http\Transformers\\' . $override_transformer_name;
            $transformer = is_null($override_transformer_name) ?
                TransformerFactory::get($objects) : $fq_override_transformer_name();
            return $transformer->transform($objects->toArray());
        }

    }

    /**
     * Paginates a Builder using the default pagination value
     * or the value from request field "pagination_perpage"
     *
     * @param Request $request
     * @param Builder $query
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function paginate(Request $request, Builder $query)
    {
        $per_page = env('PAGINATION_PER_PAGE', 20);
        if ($request->filled('pagination') && isset($request->input('pagination')['per_page'])) {
            $per_page = $request->input('pagination')['per_page'];
        }

        return $query->paginate($per_page);
    }

    /**
     * @param $required_fields
     * @param Request $request
     * @return bool
     */
    public function checkInput($required_fields, Request $request)
    {
        foreach ($required_fields as $f) {
            if (!$request->filled($f) && !$request->hasFile($f)) {
                return false;
            }
        }

        return true;
    }

    /**
     * Retrieve belonging object from belongsTo request field
     * and set properties on $object
     *
     * @param $request
     * @param $object
     * @param bool $dynamic
     * @return \Illuminate\Http\JsonResponse
     */
    protected function addBelongsTo($request, $object, $dynamic = true)
    {
        if ($request->filled('belongsTo') && $request->input('belongsTo') != '') {
            $belongsTo_type = explode("|", $request->input('belongsTo'))[0];
            $belongsTo_id = explode("|", $request->input('belongsTo'))[1];
            $class_name = 'App\\' . $belongsTo_type;
            if (class_exists($class_name)) {
                $belongs = $class_name::find($belongsTo_id);
                if (is_null($belongs)) {
                    return $this->setStatusCode(422)
                        ->respondWithError('Model not found');
                }

                if ($dynamic) {
                    $object->belongsTo_type = ucfirst($belongsTo_type);
                    $object->belongsTo_id = $belongs->id;
                }
                else {
                    $field_name = $this->fromCamelCase($belongsTo_type) . '_id';
                    $object->$field_name = $belongs->id;
                }
            }
            else {
                return $this->setStatusCode(422)
                    ->respondWithError('Class not found');
            }
        }

        return $object;
    }

    /**
     * Return belonging object name and id from belongsTo request field
     *
     * @param $request
     * @return array|\Illuminate\Http\JsonResponse
     */
    protected function getBelongsTo($request)
    {
        if ($request->filled('belongsTo') && $request->input('belongsTo') != '') {
            $belongsTo_type = explode("|", $request->input('belongsTo'))[0];
            $belongsTo_id = explode("|", $request->input('belongsTo'))[1];
            $class_name = 'App\\' . $belongsTo_type;
        }
        elseif ($request->filled('belongsTo_type') && $request->filled('belongsTo_id')) {
            $belongsTo_type = $request->input('belongsTo_type');
            $belongsTo_id = $request->input('belongsTo_id');
            $class_name = 'App\\' . $belongsTo_type;
        }
        else {
            return null;
        }

        if (class_exists($class_name)) {
            $belongs = $class_name::find($belongsTo_id);
            if (is_null($belongs)) {
                return $this->setStatusCode(422)
                    ->respondWithError('Model not found');
            }
        }
        else {
            return $this->setStatusCode(422)
                ->respondWithError('Class not found');
        }

        return [
            'belongsTo_type' => $belongsTo_type,
            'belongsTo_id' => $belongsTo_id
        ];
    }

    /**
     * @param Request $request
     * @param $query
     * @return Builder
     */
    protected function filter(Request $request, Builder $query)
    {
        return $this->filterApiRequest($request, $query);
    }

    /**
     * Converts selected fields from data array
     * to the desired format (e.g. csv)
     *
     * @param $type
     * @param $fields
     * @param $data
     * @return null|string
     */
    public function convert($type, $fields, $data)
    {
        switch ($type) {

            case 'csv':
                $fields_final = [];
                foreach ($fields as $f=>$display_name) {
                    if (is_null($display_name)) {
                        $fields_final[] = $f;
                    }
                    else {
                        $fields_final[] = $display_name;
                    }
                }

                $csv = implode(',', $fields_final);

                foreach ($data as $row) {
                    $row_arr = [];
                    foreach ($fields as $f=>$display_name) {
                        if (isset($row[$f])) {
                            $row_arr[] = $row[$f];
                        }
                        else {
                            $row_arr[] = '';
                        }
                    }
                    $csv .= PHP_EOL . implode(',', $row_arr);
                }

                return $csv;
        }

        return null;
    }

    /**
     * Updates properties of an object.
     *
     * $fields has to contain an array of fields to update.
     * You can use an associative array to pull data from
     * request inputs with different names than the model
     * property.
     *
     * Example array structure for $fields:
     *
     *  [
     *      'name',
     *      'value' => 'form_input_value'
     *  ]
     *
     * @param CiliatusModel $model
     * @param Request $request
     * @param array $fields
     * @return CiliatusModel
     */
    public function updateModelProperties(CiliatusModel $model, Request $request, array $fields)
    {
        foreach ($fields as $model_field=>$request_field)
        {
            if (is_int($model_field)) { // if true, this is no associative array -> model field equals request field
                $model_field = $request_field;
            }
            if ($request->exists($request_field)) {
                if ($request->filled($request_field)) {
                    $model->$model_field = $request->get($request_field);
                }
                else {
                    $model->$model_field = null;
                }
            }
        }

        return $model;
    }

    /**
     * Updates external Properties of a model.
     * If a Property object doesn't exist it will be created.
     * Existing properties not contained in $fields will NOT
     * be removed by default. Use $remove_not_existing
     *
     * Example array structure for $fields:
     *  [
     *      'SomePropertyType' => [
     *          'some_property' // value will be retrieved from $request->input('SomePropertyType::some_property')
     *          'another_property'  =>  'more stuff'
     *      ]
     *  ];
     *
     * @param CiliatusModel $model
     * @param Request $request
     * @param array $fields
     * @param boolean $remove_not_existing If true: Existing properties not contained in the request will be removed
     * @return CiliatusModel
     */
    public function updateExternalProperties(CiliatusModel $model, Request $request, array $fields, $remove_not_existing = false)
    {
        foreach ($fields as $property_type=>$properties) {
            foreach ($properties as $name=>$value) {
                if (is_int($name)) { // if true, this is no associative array -> auto detect value from request
                    $name = $value;
                    $value = $request->exists($property_type . '::' . $name) ? $request->get($property_type . '::' . $name) : null;
                }

                $property = $model->properties()->where('type', $property_type)->where('name', $name)->get()->first();

                if (!is_null($property) && is_null($value) && $remove_not_existing) {
                    $property->delete();
                }
                elseif (!is_null($value)) {
                    $this->updateExternalProperty($model, $property_type, $name, $value, $property);
                }
            }
        }

        return $model;
    }

    /**
     * @param CiliatusModel $model
     * @param Property|null $property
     * @param $type
     * @param $name
     * @param $value
     * @return mixed
     */
    protected function updateExternalProperty(CiliatusModel $model, $type, $name, $value, $property = null)
    {
        if (is_null($property)) {
            $class_name = explode('\\', get_class($model));
            $class_name = end($class_name);
            Property::create([
                'belongsTo_type'    => $class_name,
                'belongsTo_id'      => $model->id,
                'type'              => $type,
                'name'              => $name,
                'value'             => $value
            ]);
        }
        else {
            $property->value = $value;
            $property->save();
        }

        return $property;
    }

    /**
     * @return string
     */
    protected function getFullyQualifiedErrorCode()
    {
        return $this->errorCodeNamespace . 'x' . $this->errorCode;
    }

    /**
     * @return bool
     */
    protected function errorCodeIsCommon()
    {
        return hexdec($this->errorCode) < hexdec('1FF');
    }

    /**
     * @TODO: move to helper class
     *
     * @param $uuid
     * @return int
     */
    public function checkUuid($uuid)
    {
        return preg_match('/^\{?[A-Za-z0-9]{8}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{12}\}?$/', $uuid);
    }

    /**
     * @param $string
     * @return string
     */
    public function fromCamelCase($string)
    {
        return strtolower(preg_replace('/(?<!^)[A-Z]/', '_$0', $string));
    }

}
