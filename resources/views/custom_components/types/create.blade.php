@extends('master')

@section('breadcrumbs')
    <a href="/custom_components" class="breadcrumb hide-on-small-and-down">@choice('labels.custom_components', 2)</a>
    <a href="/custom_components/types" class="breadcrumb hide-on-small-and-down">@choice('labels.custom_component_types', 2)</a>
    <a href="#!" class="breadcrumb hide-on-small-and-down">@lang('buttons.add')</a>
@stop

@section('content')
    <div class="container">
        <custom_component_type_create-form container-classes="row" wrapper-classes="col s12 m12 l10"
                                            :sensorreading-types="{{ $sensorreading_types }}"></custom_component_type_create-form>
    </div>
@stop