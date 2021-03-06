@extends('master')

@section('breadcrumbs')
    <a href="/controlunits" class="breadcrumb hide-on-small-and-down">@choice('labels.controlunits', 2)</a>
    <a href="/controlunits/{{ $controlunit->id }}" class="breadcrumb hide-on-small-and-down">{{ $controlunit->name }}</a>
@stop

@section('content')
    <div class="col s12">
        <ul class="tabs z-depth-1">
            <li class="tab col s3"><a class="active" href="#tab_overview">@lang('labels.overview')</a></li>
            <li class="tab col s3"><a class="active" href="#tab_configuration">@lang('labels.configuration')</a></li>
        </ul>
    </div>

    <div id="tab_overview" class="col s12">
        <div class="container">
            <div class="row">
                <controlunit-widget controlunit-id="{{ $controlunit->id }}"
                                    wrapper-classes="col s12 m5 l4"></controlunit-widget>

                <div class="col s12 m7 l8">
                    <div class="card">
                        <div class="card-header">
                            <i class="mdi mdi-18px mdi-switch"></i>
                            @choice('labels.physical_sensors', 2)
                        </div>
                        <div class="card-content">
                            <physical_sensors-list-widget :refresh-timeout-seconds="60"
                                                          :subscribe-add="false"
                                                          :hide-cols="['controlunit']"
                                                          source-filter="filter[controlunit_id]={{ $controlunit->id }}"></physical_sensors-list-widget>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <i class="mdi mdi-18px mdi-water-pump"></i>
                            @choice('labels.pumps', 2)
                        </div>
                        <div class="card-content">
                            <pumps-list-widget :refresh-timeout-seconds="60"
                                               :subscribe-add="false"
                                               :hide-cols="['controlunit']"
                                               source-filter="filter[controlunit_id]={{ $controlunit->id }}"></pumps-list-widget>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <i class="mdi mdi-18px mdi-pipe-disconnected"></i>
                            @choice('labels.valves', 2)
                        </div>
                        <div class="card-content">
                            <valves-list-widget :refresh-timeout-seconds="60"
                                                :subscribe-add="false"
                                                :hide-cols="['controlunit']"
                                                source-filter="filter[controlunit_id]={{ $controlunit->id }}"></valves-list-widget>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fixed-action-btn">
            <a class="btn-floating btn-large orange darken-4">
                <i class="mdi mdi-18px mdi-pencil"></i>
            </a>
            <ul>
                <li><a class="btn-floating orange tooltipped" data-position="left" data-delay="50" data-tooltip="@lang('tooltips.floating.edit')"href="/controlunits/{{ $controlunit->id }}/edit"><i class="mdi mdi-24px mdi-pencil"></i></a></li>
                <li><a class="btn-floating red tooltipped" data-position="left" data-delay="50" data-tooltip="@lang('tooltips.floating.delete')" href="/controlunits/{{ $controlunit->id }}/delete"><i class="mdi mdi-24px mdi-delete"></i></a></li>
                <li><a class="btn-floating green tooltipped" data-position="left" data-delay="50" data-tooltip="@lang('tooltips.floating.add')" href="/controlunits/create"><i class="mdi mdi-24px mdi-plus"></i></a></li>
            </ul>
        </div>
    </div>

    <div id="tab_configuration" class="col s12">
        <div class="container">
            <div class="card">
                <div class="card-content">
                    <pre>{{ $controlunit->generateConfig() }} </pre>
                </div>
            </div>
        </div>

        <div class="fixed-action-btn">
            <a class="btn-floating btn-large orange darken-4">
                <i class="mdi mdi-18px mdi-pencil"></i>
            </a>
            <ul>
                <li><a class="btn-floating green tooltipped" data-position="left" data-delay="50" data-tooltip="@lang('tooltips.floating.add')" href="/configuration/create"><i class="mdi mdi-24px mdi-plus"></i></a></li>
            </ul>
        </div>
    </div>
@stop