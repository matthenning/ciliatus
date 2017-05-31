@extends('master')

@section('breadcrumbs')
    <a href="/logical_sensors" class="breadcrumb hide-on-small-and-down">@choice('components.logical_sensors', 2)</a>
@stop


@section('content')
    <div class="container">
        <logical_sensors-list-widget :refresh-timeout-seconds="60" container-classes="" wrapper-classes=""></logical_sensors-list-widget>
    </div>

    <div class="fixed-action-btn">
        <a class="btn-floating btn-large orange darken-4">
            <i class="large material-icons">mode_edit</i>
        </a>
        <ul>
            <li><a class="btn-floating green tooltipped" data-position="left" data-delay="50" data-tooltip="@lang('tooltips.floating.add')" href="/logical_sensors/create"><i class="material-icons">add</i></a></li>
        </ul>
    </div>
@stop