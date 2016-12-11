@extends('master')

@section('breadcrumbs')
    <a href="/animals" class="breadcrumb">@choice('components.animals', 2)</a>
    <a href="/animals/{{ $animal->id }}" class="breadcrumb">{{ $animal->display_name }}</a>
    <a href="/animals/{{ $animal->id }}/edit" class="breadcrumb">@lang('buttons.edit')</a>
@stop

@section('content')
    <div class="container">
        <div class="row">
            <div class="col s12 m12 l6">
                <div class="card">
                    <form action="{{ url('api/v1/animals/' . $animal->id) }}" data-method="PUT"
                          data-redirect-success="{{ url('animals/' . $animal->id . '/edit') }}">
                        <div class="card-content">

                            <span class="card-title activator truncate">
                                <span>{{ $animal->display_name }}</span>
                            </span>

                            <p>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="text" readonly="readonly" placeholder="ID" name="id" value="{{ $animal->id }}">
                                    <label for="id">ID</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="text" placeholder="@lang('labels.display_name')" name="displayname" value="{{ $animal->display_name }}">
                                    <label for="display_name">@lang('labels.display_name')</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="text" placeholder="@lang('labels.common_name')" name="commonname" value="{{ $animal->common_name }}">
                                    <label for="name">@lang('labels.common_name')</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="text" placeholder="@lang('labels.latin_name')" name="latinname" value="{{ $animal->latin_name }}">
                                    <label for="name">@lang('labels.latin_name')</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="date" class="datepicker" placeholder="@lang('labels.date_birth')" name="birthdate" value="{{ $animal->birth_date }}">
                                    <label for="name">@lang('labels.date_birth')</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="date" class="datepicker" placeholder="@lang('labels.date_death')" name="deathdate" value="{{ $animal->death_date }}">
                                    <label for="name">@lang('labels.date_death')</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <select name="gender">
                                        <option></option>
                                        <option value="male" @if($animal->gender == 'male')selected="selected"@endif>@lang('labels.gender_male')</option>
                                        <option value="female" @if($animal->gender == 'female')selected="selected"@endif>@lang('labels.gender_female')</option>
                                    </select>
                                    <label for="name">@lang('labels.gender')</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <select name="terrarium">
                                        <option></option>
                                        @foreach ($terraria as $t)
                                            <option value="{{ $t->id }}" @if($animal->terrarium_id == $t->id)selected="selected"@endif>{{ $t->display_name }}</option>
                                        @endforeach
                                    </select>
                                    <label for="valves">@choice('components.terraria', 2)</label>
                                </div>
                            </div>
                            </p>

                        </div>

                        <div class="card-action">

                            <div class="row">
                                <div class="input-field col s12">
                                    <button class="btn waves-effect waves-light" type="submit">@lang('buttons.save')
                                        <i class="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

            <div class="col s12 m12 l6">
                <div class="card">

                    <div class="card-content teal lighten-1 white-text">
                        <span class="card-title activator truncate">
                            <span>@choice('components.animal_feeding_schedules', 2)</span>
                        </span>
                    </div>

                    <div class="card-content">

                        <div class="row">

                            @foreach ($animal->feeding_schedules as $afs)
                                <div class="col s12">

                                    {{ $afs->name }} - {{ $afs->value }} @choice('units.days', $afs->value) @lang('labels.interval')

                                    <a class="dropdown-button btn btn-small btn-icon-only" href="#" data-activates="dropdown-edit-animal_feeding_schedules_{{ $afs->id }}">
                                        <i class="material-icons">settings</i>
                                    </a>

                                    <ul id="dropdown-edit-animal_feeding_schedules_{{ $afs->id }}" class="dropdown-content">
                                        <li>
                                            <a href="{{ url('animals/' . $animal->id . '/feeding_schedules/' . $afs->id . '/edit') }}">
                                                @lang('buttons.edit')
                                            </a>
                                        </li>
                                        <li>
                                            <a href="{{ url('animals/' . $animal->id . '/feeding_schedules/' . $afs->id . '/delete') }}">
                                                @lang('buttons.delete')
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            @endforeach

                        </div>
                    </div>

                    <div class="card-action">
                        <a href="{{ url('/animals/' . $animal->id . '/feeding_schedules/create') }}">
                            @lang('buttons.add')
                        </a>
                    </div>

                </div>

            </div>
        </div>
    </div>



    <script>
        $(document).ready(function() {
            $('.datepicker').pickadate({
                format: 'yyyy-mm-dd',
                selectMonths: true, // Creates a dropdown to control month
                selectYears: true // Creates a dropdown of 15 years to control year
            });
        });
    </script>

    <div class="fixed-action-btn">
        <a class="btn-floating btn-large teal">
            <i class="large material-icons">mode_edit</i>
        </a>
        <ul>
            <li><a class="btn-floating teal" href="/animals/{{ $animal->id }}"><i class="material-icons">info</i></a></li>
            <li><a class="btn-floating red" href="/animals/{{ $animal->id }}/delete"><i class="material-icons">delete</i></a></li>
            <li><a class="btn-floating green" href="/animals/create"><i class="material-icons">add</i></a></li>
        </ul>
    </div>
@stop