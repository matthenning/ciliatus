@extends('master')

@section('breadcrumbs')
    <a href="/controlunits" class="breadcrumb hide-on-small-and-down">@choice('labels.controlunits', 2)</a>
@stop


@section('content')
    <div class="container">
        <controlunits-list-widget :refresh-timeout-seconds="60" :container-classes="['masonry-grid']" wrapper-classes=""></controlunits-list-widget>
    </div>

    <div class="fixed-action-btn">
        <a class="btn-floating btn-large orange darken-4 @if(App\Controlunit::count() < 1) pulse @endif">
            <i class="large material-icons">mode_edit</i>
        </a>
        <ul>
            <li><a class="btn-floating green tooltipped" data-position="left" data-delay="50" data-tooltip="@lang('tooltips.floating.add')" href="/controlunits/create"><i class="material-icons">add</i></a></li>
        </ul>
    </div>
@stop