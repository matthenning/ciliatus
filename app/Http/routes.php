<?php

Route::get('/', 'ViewController@index');

Route::get('/terraria', 'ViewController@terraria');
Route::get('/terraria/create', 'ViewController@terrariaCreate');
Route::get('/terraria/{id}/edit', 'ViewController@terrariaEdit');
Route::get('/terraria/{id}/delete', 'ViewController@terrariaDelete');
Route::get('/terraria/{id}', 'ViewController@terrariaShow');

Route::get('/animals', 'ViewController@animals');
Route::get('/animals/create', 'ViewController@animalsCreate');
Route::get('/animals/{id}/edit', 'ViewController@animalsEdit');
Route::get('/animals/{id}/delete', 'ViewController@animalsDelete');
Route::get('/animals/{id}', 'ViewController@animalsShow');

Route::get('/pumps', 'ViewController@pumps');
Route::get('/pumps/create', 'ViewController@pumpsCreate');
Route::get('/pumps/{id}/edit', 'ViewController@pumpsEdit');
Route::get('/pumps/{id}/delete', 'ViewController@pumpsDelete');
Route::get('/pumps/{id}', 'ViewController@pumpsShow');

Route::get('/valves', 'ViewController@valves');
Route::get('/valves/create', 'ViewController@valvesCreate');
Route::get('/valves/{id}/edit', 'ViewController@valvesEdit');
Route::get('/valves/{id}/delete', 'ViewController@valvesDelete');
Route::get('/valves/{id}', 'ViewController@valvesShow');

Route::get('/controlunits', 'ViewController@controlunits');
Route::get('/controlunits/create', 'ViewController@controlunitsCreate');
Route::get('/controlunits/{id}/edit', 'ViewController@controlunitsEdit');
Route::get('/controlunits/{id}/delete', 'ViewController@controlunitsDelete');
Route::get('/controlunits/{id}', 'ViewController@controlunitsShow');

Route::get('/logical_sensors', 'ViewController@logical_sensors');
Route::get('/logical_sensors/create', 'ViewController@logical_sensorsCreate');
Route::get('/logical_sensors/{id}/edit', 'ViewController@logical_sensorsEdit');
Route::get('/logical_sensors/{id}/delete', 'ViewController@logical_sensorsDelete');
Route::get('/logical_sensors/{id}', 'ViewController@logical_sensorsShow');

Route::get('/physical_sensors', 'ViewController@physical_sensors');
Route::get('/physical_sensors/create', 'ViewController@physical_sensorsCreate');
Route::get('/physical_sensors/{id}/edit', 'ViewController@physical_sensorsEdit');
Route::get('/physical_sensors/{id}/delete', 'ViewController@physical_sensorsDelete');
Route::get('/physical_sensors/{id}', 'ViewController@physical_sensorsShow');

Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');

Route::get('auth/register', 'Auth\AuthController@getRegister');
Route::post('auth/register', 'Auth\AuthController@postRegister');

Route::group(['prefix' => 'api/v1'], function() {
    Route::get('terraria/{id}/sensorreadings', 'TerrariumController@sensorreadings');
    Route::resource('animals', 'AnimalController');
    Route::resource('terraria', 'TerrariumController');
    Route::resource('controlunits', 'ControlunitController');
    Route::resource('pumps', 'PumpController');
    Route::resource('valves', 'ValveController');
    Route::resource('physical_sensors', 'PhysicalSensorController');
    Route::resource('logical_sensors', 'LogicalSensorController');
    Route::resource('sensorreadings', 'SensorreadingController');
});