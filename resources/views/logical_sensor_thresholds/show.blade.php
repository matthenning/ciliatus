@extends('master')

@section('breadcrumbs')
    <a href="/logical_sensor_thresholds" class="breadcrumb hide-on-small-and-down">@choice('labels.logical_sensor_thresholds', 2)</a>
    <a href="/logical_sensor_thresholds/{{ $logical_sensor_threshold->id }}" class="breadcrumb hide-on-small-and-down">{{ $logical_sensor_threshold->name }}</a>
@stop

@section('content')
    <div class="container">
        <div class="row">
            <logical_sensor_thresholds-widget :refresh-timeout-seconds="60" logical_sensor_threshold-id="{{ $logical_sensor_threshold->id }}"
                                              :subscribe-add="false" :subscribe-delete="false"></logical_sensor_thresholds-widget>
        </div>
    </div>

    <div class="fixed-action-btn">
        <a class="btn-floating btn-large orange darken-4">
            <i class="mdi mdi-18px mdi-pencil"></i>
        </a>
        <ul>
            <li><a class="btn-floating orange tooltipped" data-position="left" data-delay="50" data-tooltip="@lang('tooltips.floating.edit')"href="/logical_sensor_thresholds/{{ $logical_sensor_threshold->id }}/edit"><i class="mdi mdi-24px mdi-pencil"></i></a></li>
            <li><a class="btn-floating red tooltipped" data-position="left" data-delay="50" data-tooltip="@lang('tooltips.floating.delete')" href="/logical_sensor_thresholds/{{ $logical_sensor_threshold->id }}/delete"><i class="mdi mdi-24px mdi-delete"></i></a></li>
            <li><a class="btn-floating green tooltipped" data-position="left" data-delay="50" data-tooltip="@lang('tooltips.floating.add')" href="/logical_sensor_thresholds/create"><i class="mdi mdi-24px mdi-plus"></i></a></li>
        </ul>
    </div>
@stop