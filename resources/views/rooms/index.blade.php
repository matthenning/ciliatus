@extends('master')

@section('breadcrumbs')
    <a href="/rooms" class="breadcrumb hide-on-small-and-down">@choice('labels.rooms', 2)</a>
@stop

@section('content')
    <div class="col s12">
        <ul class="tabs z-depth-1">
            <li class="tab col s3"><a class="active" href="#tab_dashboard">@lang('labels.overview')</a></li>
        </ul>
    </div>

    <div id="tab_dashboard" class="col s12">
        <div class="container">
            <room-widget :refresh-timeout-seconds="60" source-filter="default_history_minutes=true"
                             container-classes="row" wrapper-classes="col s12 m6 l4"></room-widget>
        </div>
    </div>

    <div class="fixed-action-btn">
        <a id="rooms-floating-button"
           class="btn-floating btn-large orange darken-4 @if(App\Terrarium::count() < 1) pulse @endif">
            <i class="mdi mdi-18px mdi-pencil"></i>
        </a>

        @if(!Auth::user()->hasSeenFeatureDiscovery('floating_button'))
        <div class="tap-target" data-target="rooms-floating-button">
            <div class="tap-target-content">
                <h5>@lang('tooltips.feature_discovery.floating_button.title')</h5>
                <p>@lang('tooltips.feature_discovery.floating_button.text')</p>
            </div>
        </div>
        @endif

        <ul>
            <li><a class="btn-floating green tooltipped" data-position="left" data-delay="50" data-tooltip="@lang('tooltips.floating.add')" href="/rooms/create"><i class="mdi mdi-24px mdi-plus"></i></a></li>
        </ul>
    </div>
@stop