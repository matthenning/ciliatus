@extends('master')

@section('breadcrumbs')
    <a href="/pumps" class="breadcrumb">@choice('components.pumps', 2)</a>
    <a href="/pumps/create" class="breadcrumb">@lang('buttons.create')</a>
@stop

@section('content')
    <div class="col s12 m12 l6">
        <div class="card">
            <form name="f_edit_terra" action="{{ url('api/v1/pumps') }}" data-method="POST" data-redirect-success="auto">
                <div class="card-content">

                    <div class="row">
                        <div class="input-field col s12">
                            <input type="text" placeholder="@lang('labels.name')" name="name" value="">
                            <label for="name">@lang('labels.name')</label>
                        </div>
                    </div>

                </div>

                <div class="card-action">

                    <div class="row">
                        <div class="input-field col s12">
                            <button class="btn waves-effect waves-light" type="submit">@lang('buttons.next')
                                <i class="material-icons right">send</i>
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    </div>
@stop