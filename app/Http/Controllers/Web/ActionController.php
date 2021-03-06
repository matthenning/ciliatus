<?php

namespace App\Http\Controllers\Web;

use App\Action;
use App\ActionSequence;
use App\CustomComponentType;
use App\Http\Controllers\Controller;
use App\Pump;
use App\Valve;
use Illuminate\Http\Request;

/**
 * Class ActionController
 * @package App\Http\Controllers\Web
 */
class ActionController extends Controller
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
     * @return void
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $components = [
            'Valves' => [
                'display_name' => trans_choice('components.valves', 2),
                'tech_name' => 'Valve',
                'objects' => []
            ],
            'Pumps' => [
                'display_name' => trans_choice('components.pumps', 2),
                'tech_name' => 'Pump',
                'objects' => []
            ]
        ];
        foreach (Valve::get() as $v) {
            $components['Valves']['objects'][] = [
                'id' => $v->id,
                'name' => $v->name,
                'states' => $v->states()
            ];
        }
        foreach (Pump::get() as $p) {
            $components['Pumps']['objects'][] = [
                'id' => $p->id,
                'name' => $p->name,
                'states' => $p->states()
            ];
        }
        foreach (CustomComponentType::get() as $gct) {
            $components['CustomComponent_' . $gct->id]['display_name'] = $gct->name_plural;
            $components['CustomComponent_' . $gct->id]['tech_name'] = 'CustomComponent';
            $components['CustomComponent_' . $gct->id]['objects'] = [];
            foreach ($gct->components as $gc) {
                $components['CustomComponent_' . $gct->id]['objects'][] = [
                    'id' => $gc->id,
                    'name' => $gc->name,
                    'states' => array_column($gc->states->toArray(), 'name')
                ];
            }
        }

        return view('actions.create', [
            'action_sequences' => ActionSequence::get(),
            'preset' => $request->input('preset'),
            'components' => $components
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
        return redirect(url('/actions/' . $id . '/edit'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param string $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $action = Action::find($id);

        if (is_null($action)) {
            return response()->view('errors.404', [], 404);
        }

        $components = [
            'Valves' => [
                'display_name' => trans_choice('components.valves', 2),
                'tech_name' => 'Valve',
                'objects' => []
            ],
            'Pumps' => [
                'display_name' => trans_choice('components.pumps', 2),
                'tech_name' => 'Pump',
                'objects' => []
            ]
        ];
        foreach (Valve::get() as $v) {
            $components['Valves']['objects'][] = [
                'id' => $v->id,
                'name' => $v->name,
                'states' => $v->states()
            ];
        }
        foreach (Pump::get() as $p) {
            $components['Pumps']['objects'][] = [
                'id' => $p->id,
                'name' => $p->name,
                'states' => $p->states()
            ];
        }
        foreach (CustomComponentType::get() as $gct) {
            $components['CustomComponent_' . $gct->id]['display_name'] = $gct->name_plural;
            $components['CustomComponent_' . $gct->id]['tech_name'] = 'CustomComponent';
            $components['CustomComponent_' . $gct->id]['objects'] = [];
            foreach ($gct->components as $gc) {
                $components['CustomComponent_' . $gct->id]['objects'][] = [
                    'id' => $gc->id,
                    'name' => $gc->name,
                    'states' => array_column($gc->states->toArray(), 'name')
                ];
            }
        }

        return view('actions.edit', [
            'action'        => $action,
            'action_sequences' => ActionSequence::get(),
            'components'    => $components
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
        $action = Action::find($id);

        if (is_null($action)) {
            return response()->view('errors.404', [], 404);
        }

        return view('actions.delete', [
            'action'     => $action
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
