@extends('master')

@section('breadcrumbs')
    <a href="/generic_components" class="breadcrumb hide-on-small-and-down">@choice('labels.generic_components', 2)</a>
    <a href="/generic_components/{{ $generic_component_type->id }}" class="breadcrumb hide-on-small-and-down">{{ $generic_component_type->name_plural }}</a>
@stop


@section('content')
    <div class="container">
        <generic_components-list-widget default-type-filter="{{ $generic_component_type->name_singular }}"
                                        wrapper-classes=""></generic_components-list-widget>
    </div>

    <div class="fixed-action-btn">
        <a class="btn-floating btn-large orange darken-4">
            <i class="large material-icons">mode_edit</i>
        </a>
        <ul>
            <li><a class="btn-floating green tooltipped" data-position="left" data-delay="50" data-tooltip="@lang('tooltips.floating.add')" href="/generic_components/create?preset[generic_component_type_id]={{ $generic_component_type->id }}"><i class="material-icons">add</i></a></li>
        </ul>
    </div>
@stop