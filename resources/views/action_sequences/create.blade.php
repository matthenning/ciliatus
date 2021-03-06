@extends('master')

@section('breadcrumbs')
    <a href="/action_sequences" class="breadcrumb hide-on-small-and-down">@choice('labels.action_sequences', 2)</a>
    <a href="/action_sequences/create" class="breadcrumb hide-on-small-and-down">@lang('buttons.create')</a>
@stop

@section('content')
    <div class="container">
        <div class="row">
            <div class="col s12 m12 l6">
                <div class="card">
                    <form action="{{ url('api/v1/action_sequences') }}" data-method="POST"
                          data-redirect-success="auto">
                        <div class="card-content">

                            <div class="row">
                                <div class="input-field col s12">
                                    <select name="terrarium">
                                        <optgroup label="@choice('labels.terraria', 1)">
                                        @foreach ($terraria as $t)
                                            <option value="{{ $t->id }}"
                                                @if(isset($preset['terrarium']) && $preset['terrarium'] == $t->id) selected @endif >@if(is_null($t->display_name)){{ $t->name }}@else{{ $t->display_name }}@endif
                                            </option>
                                        @endforeach
                                        </optgroup>
                                    </select>
                                    <label for="valves">@choice('labels.terraria', 1)</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="text" placeholder="@lang('labels.name') - @lang('tooltips.leave_empty_for_auto')" name="name" value="">
                                    <label for="name">@lang('labels.name')</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <select name="template">
                                        <option></option>
                                        <option value="irrigate">@lang('labels.irrigate')</option>
                                        <option value="ventilate">@lang('labels.ventilate')</option>
                                        <option value="heat_up">@lang('labels.heat_up')</option>
                                        <option value="cool_down">@lang('labels.cool_down')</option>
                                    </select>
                                    <label for="template">@lang('labels.template')</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="text" placeholder="@choice('units.minutes', 2)" name="duration_minutes" value="10">
                                    <label for="duration_minutes">@lang('labels.duration') (@choice('units.minutes', 2))</label>
                                </div>
                            </div>

                        </div>

                        <div class="card-action">

                            <div class="row">
                                <div class="input-field col s12">
                                    <button class="btn waves-effect waves-light" type="submit">@lang('buttons.save')
                                        <i class="mdi mdi-18px mdi-floppy left"></i>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@stop
