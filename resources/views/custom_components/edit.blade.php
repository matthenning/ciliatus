@extends('master')

@section('breadcrumbs')
    <a href="/custom_components" class="breadcrumb hide-on-small-and-down">@choice('labels.custom_components', 2)</a>
    <a href="/custom_component_types/{{ $custom_component->type->id }}" class="breadcrumb hide-on-small-and-down">{{ $custom_component->type->name_plural }}</a>
    <a href="/custom_components/{{ $custom_component->id }}" class="breadcrumb hide-on-small-and-down">{{ $custom_component->name }}</a>
    <a href="/custom_components/{{ $custom_component->id }}/edit" class="breadcrumb hide-on-small-and-down">@lang('labels.edit')</a>
@stop

@section('content')
    <div class="container">
        <div class="row">
            <div class="col s12 m12 l6">
                <div class="card">
                    <form action="{{ url('api/v1/custom_components/' . $custom_component->id) }}" data-method="PUT" >

                        <div class="card-content">

                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="text" name="type_id" value="{{ $custom_component->type->id }}" readonly hidden>
                                    <i class="mdi mdi-18px mdi-{{ $custom_component->type->icon }} prefix"></i>
                                    <input type="text" name="type_name" value="{{ $custom_component->type->name_singular }}" readonly>
                                    <label for="type_name">@choice('labels.custom_components', 1)</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <select name="belongsTo">
                                        <option></option>
                                        @foreach ($belongTo_Options as $t=>$objects)
                                            <optgroup label="@choice('labels.' . strtolower($t), 2)">
                                                @foreach ($objects as $o)
                                                    <option value="{{ $t }}|{{ $o->id }}"
                                                            @if($custom_component->belongsTo_type == $t && $custom_component->belongsTo_id == $o->id)
                                                            selected
                                                            @endif>@if(is_null($o->display_name)) {{ $o->name }} @else {{ $o->display_name }} @endif</option>
                                                @endforeach
                                            </optgroup>
                                        @endforeach
                                    </select>
                                    <label for="valves">@lang('labels.belongsTo')</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <select name="controlunit">
                                        <option></option>
                                        @foreach ($controlunits as $cu)
                                            <option value="{{ $cu->id }}" @if(!is_null($custom_component->controlunit) && $cu->id == $custom_component->controlunit->id) selected @endif>{{ $cu->name }}</option>
                                        @endforeach
                                    </select>
                                    <label for="controlunit">@choice('labels.controlunit', 1)</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="text" placeholder="@lang('labels.name')" name="name" value="{{ $custom_component->name }}">
                                    <label for="name">@lang('labels.name')</label>
                                </div>
                            </div>

                            @foreach($custom_component->properties as $prop)
                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="text" placeholder="{{ $prop->name }}" name="properties[{{ $prop->id }}]" value="{{ $prop->value }}">
                                    <label for="properties[{{ $prop->id }}]">{{ $prop->name }}</label>
                                </div>
                            </div>
                            @endforeach

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

            <div class="col s12 m6 l6">
                <bus-type-edit-form form-uri="{{ url('api/v1/custom_components/' . $custom_component->id) }}"
                                    physical-sensor-id="{{ $custom_component->id }}"
                                    bus-type="{{ $custom_component->property('ControlunitConnectivity', 'bus_type', true) }}"
                                    gpio-pin="{{ $custom_component->property('ControlunitConnectivity', 'gpio_pin', true) }}"
                                    :gpio-default-high="{{ ($custom_component->property('ControlunitConnectivity', 'gpio_default_high', true) ? 'true' : 'false') }}"
                                    i2c-address="{{ $custom_component->property('ControlunitConnectivity', 'i2c_address', true) }}"
                                    i2c-multiplexer-address="{{ $custom_component->property('ControlunitConnectivity', 'i2c_multiplexer_address', true) }}"
                                    i2c-multiplexer-port="{{ $custom_component->property('ControlunitConnectivity', 'i2c_multiplexer_port', true) }}">
                </bus-type-edit-form>
            </div>
        </div>
    </div>
@stop