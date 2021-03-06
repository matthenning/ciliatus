@extends('master')

@section('breadcrumbs')
    <a href="/action_sequences" class="breadcrumb hide-on-small-and-down">@choice('labels.action_sequences', 2)</a>
    <a href="{{ url('action_sequences/' . $action_sequence->id) }}" class="breadcrumb hide-on-small-and-down">{{ $action_sequence->name }}</a>
    <a href="{{ url('action_sequences/' . $action_sequence->id . '/edit') }}" class="breadcrumb hide-on-small-and-down">@lang('buttons.edit')</a>
@stop

@section('content')
    <div class="container">
        <div class="row">
            <div class="col s12 m12 l6">
                <div class="card">
                    <form action="{{ url('api/v1/action_sequences/' . $action_sequence->id) }}" data-method="PUT">
                        <div class="card-content">

                            <span class="card-title activator truncate">
                                <span>{{ $action_sequence->name }}</span>
                            </span>

                            <input type="text" name="id" value="{{ $action_sequence->id }}" hidden>

                            <div class="row">
                                <div class="input-field col s12">
                                    <select name="terrarium">
                                        <optgroup label="@choice('labels.terraria', 1)">
                                            @foreach ($terraria as $t)
                                                <option value="{{ $t->id }}"
                                                        @if($action_sequence->terrarium_id == $t->id) selected @endif >@if(is_null($t->display_name)){{ $t->name }}@else{{ $t->display_name }}@endif
                                                </option>
                                            @endforeach
                                        </optgroup>
                                    </select>
                                    <label for="valves">@choice('labels.terraria', 1)</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="text" placeholder="@lang('labels.name')" name="name" value="{{ $action_sequence->name }}">
                                    <label for="display_name">@lang('labels.name')</label>
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

                <div class="card">
                    <div class="card-header">
                        <span class="activator truncate">
                            <span><i class="mdi mdi-mdi-18px mdi-clipboard-text"></i> @choice('labels.actions', 2)</span>
                        </span>
                    </div>

                    <div class="card-content">

                        <div class="row">
                            @foreach($action_sequence->actions as $a)
                                <div class="input-field col s12" style="width: 100%; margin-top: 0">
                                    [{{ $a->sequence_sort_id }}]

                                    @if(is_null($a->target_object()))
                                        @lang('errors.frontend.no_target_object'): {{ $a->id }}
                                    @else
                                        <i class="mdi mdi-18px mdi-{{ $a->target_object()->icon() }}"></i>
                                        <a href="{{ $a->target_object()->url() }}">{{ $a->target_object()->name }}</a>
                                    @endif

                                    <i class="mdi mdi-18px mdi-mdi-chevron-right"></i>
                                    {{ $a->desired_state }} <i>{{ $a->duration_minutes }} @choice('units.minutes', $a->duration_minutes)</i>
                                    @if (!is_null($a->wait_for_started_action_object()))
                                        @lang('labels.starts_after') [{{ $a->wait_for_started_action_object()->sequence_sort_id }}]
                                    @endif

                                    <a href="{{ url('actions/' . $a->id . '/delete') }}" class="right red-text text-lighten-1">
                                        <i class="mdi mdi-18px mdi-delete"></i>
                                    </a>

                                    <a href="{{ url('actions/' . $a->id . '/edit') }}" class="right">
                                        <i class="mdi mdi-18px mdi-pencil"></i>
                                    </a>
                                </div>
                            @endforeach

                        </div>

                    </div>

                    <div class="card-action">
                        <a href="/actions/create?preset[action_sequence_id]={{ $action_sequence->id }}">
                            @lang('buttons.add')
                        </a>
                    </div>
                </div>
            </div>

            <div class="col s12 m12 l6">
                <div class="card">
                    <div class="card-header">
                        <span class="activator truncate">
                            <span>
                                <i class="mdi mdi-18px mdi-clock"></i>
                                @choice('labels.action_sequence_schedules', 2)
                            </span>
                        </span>
                    </div>

                    <div class="card-content">
                        @foreach($action_sequence->schedules as $ass)
                            <div class="row row-no-margin">
                                <i class="mdi mdi-18px mdi-clock"></i>
                                {{ $ass->starts_at }}
                                @if ($ass->runonce)
                                    <i>@lang('labels.runoncen')</i>
                                @else
                                    @for ($i = 0; $i < 7; $i++)
                                        @if ($ass->runsOnWeekday($i))
                                            <span class="green-text">
                                                {{ str_limit(trans('weekdays.' . $i), 1, '') }}
                                            </span>
                                        @else
                                            <span class="deep-orange-text">
                                                {{ str_limit(trans('weekdays.' . $i), 1, '') }}
                                            </span>
                                        @endif
                                    @endfor
                                @endif

                                <a href="{{ url('action_sequence_schedules/' . $ass->id . '/delete') }}" class="right red-text text-lighten-1">
                                    <i class="mdi mdi-18px mdi-delete"></i>
                                </a>

                                <a href="{{ url('action_sequence_schedules/' . $ass->id . '/edit') }}" class="right">
                                    <i class="mdi mdi-18px mdi-pencil"></i>
                                </a>
                            </div>
                        @endforeach
                    </div>

                    <div class="card-action">
                        <a href="/action_sequence_schedules/create?preset[action_sequence]={{ $action_sequence->id }}">
                            @lang('buttons.add')
                        </a>
                    </div>

                </div>

                <div class="card">
                    <div class="card-header">
                        <span class="activator truncate">
                            <span>
                                <i class="mdi mdi-18px mdi-vanish"></i>
                                @choice('labels.action_sequence_triggers', 2)
                            </span>
                        </span>
                    </div>

                    <div class="card-content">
                        @foreach($action_sequence->triggers as $trigger)
                            <div class="row row-no-margin">
                                <i class="mdi mdi-18px mdi-vanish"></i>
                                <a href="/logical_sensors/{{ $trigger->logical_sensor->id }}">{{ $trigger->logical_sensor->name }}</a>
                                @lang('units.' . $trigger->reference_value_comparison_type) {{ $trigger->reference_value }}

                                @lang('labels.for') {{ $trigger->reference_value_duration_threshold_minutes }} @choice('units.minutes', $trigger->reference_value_duration_threshold_minutes)
                                <i>{{ $trigger->timeframe_start }} - {{ $trigger->timeframe_end }}</i>


                                <a href="{{ url('action_sequence_triggers/' . $trigger->id . '/delete') }}" class="right red-text text-lighten-1">
                                    <i class="mdi mdi-18px mdi-delete"></i>
                                </a>

                                <a href="{{ url('action_sequence_triggers/' . $trigger->id . '/edit') }}" class="right">
                                    <i class="mdi mdi-18px mdi-pencil"></i>
                                </a>
                            </div>
                        @endforeach
                    </div>

                    <div class="card-action">
                        <a href="/action_sequence_triggers/create?preset[action_sequence]={{ $action_sequence->id }}">
                            @lang('buttons.add')
                        </a>
                    </div>

                </div>

                <div class="card">
                    <div class="card-header">
                        <span class="activator truncate">
                            <span>
                                <i class="mdi mdi-18px mdi-compass"></i>
                                @choice('labels.action_sequence_intentions', 2)
                            </span>
                        </span>
                    </div>

                    <div class="card-content">
                        @foreach($action_sequence->intentions as $intention)
                            <div class="row row-no-margin">
                                <i class="mdi mdi-18px mdi-compass"></i>
                                @if($intention->intention == 'increase')<span>@lang('labels.increases')</span>@endif
                                @if($intention->intention == 'decrease')<span>@lang('labels.decreases')</span>@endif
                                @lang('labels.' . $intention->type)
                                <i>{{ $intention->timeframe_start }} - {{ $intention->timeframe_end }}</i>

                                <a href="{{ url('action_sequence_intentions/' . $intention->id . '/delete') }}" class="right red-text text-lighten-1">
                                    <i class="mdi mdi-18px mdi-delete"></i>
                                </a>

                                <a href="{{ url('action_sequence_intentions/' . $intention->id . '/edit') }}" class="right">
                                    <i class="mdi mdi-18px mdi-pencil"></i>
                                </a>
                            </div>
                        @endforeach
                    </div>

                    <div class="card-action">
                        <a href="/action_sequence_intentions/create?preset[action_sequence]={{ $action_sequence->id }}">
                            @lang('buttons.add')
                        </a>
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
            <li><a class="btn-floating teal" href="/action_sequences/{{ $action_sequence->id }}"><i class="mdi mdi-18px mdi-information-outline"></i></a></li>
            <li><a class="btn-floating red tooltipped" data-position="left" data-delay="50" data-tooltip="@lang('tooltips.floating.delete')" href="/action_sequences/{{ $action_sequence->id }}/delete"><i class="mdi mdi-24px mdi-delete"></i></a></li>
            <li><a class="btn-floating green tooltipped" data-position="left" data-delay="50" data-tooltip="@lang('tooltips.floating.add')" href="/action_sequences/create"><i class="mdi mdi-24px mdi-plus"></i></a></li>
        </ul>
    </div>
@stop
