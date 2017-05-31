<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('setup/' . env('APP_KEY'), 'SetupController@start');
Route::get('setup/' . env('APP_KEY') . '/step/{id}', 'SetupController@step');

Route::get('/', 'DashboardController@index');
Route::resource('dashboard', 'DashboardController');
Route::get('categories', 'AdminController@categories');

/*
 * Animals
 */
Route::resource('animals', 'AnimalController');
Route::get('animals/{id}/delete', 'AnimalController@delete');

// Caresheets
Route::get('animals/{animal_id}/caresheets/{id}', 'AnimalController@show_caresheet');
Route::get('animals/{animal_id}/caresheets/{id}/delete', 'AnimalController@delete_caresheet');
Route::get('animals/caresheets/create', 'AnimalController@create_caresheet');
Route::get('animals/{animal_id}/caresheets/create', 'AnimalController@create_caresheet');

// Feedingtypes
Route::get('animals/feedings/types', 'AnimalFeedingController@edit_types');
Route::get('animals/feedings/types/create', 'AnimalFeedingController@create_type');

// Feedings
Route::get('animals/{animal_id}/feedings/{id}/delete', 'AnimalFeedingController@delete');
Route::resource('animals/{animal_id}/feedings', 'AnimalFeedingController');
Route::resource('animals/{animal_id}/feeding_schedules', 'AnimalFeedingScheduleController');

// Feeding schedules
Route::get('animals/{animal_id}/feeding_schedules/{id}/delete', 'AnimalFeedingScheduleController@delete');
Route::get('animal_feeding_schedules', 'AnimalFeedingScheduleController@index');

// Weighings
Route::get('animals/weighings', 'AnimalWeighingController@index');
Route::get('animals/{animal_id}/weighings/{id}/delete', 'AnimalWeighingController@delete');
Route::resource('animals/{animal_id}/weighings', 'AnimalWeighingController');
Route::resource('animals/{animal_id}/weighing_schedules', 'AnimalWeighingScheduleController');

// Weighing schedules
Route::get('animal_weighing_schedules', 'AnimalWeighingScheduleController@index');
Route::get('animals/{animal_id}/weighing_schedules/{id}/delete', 'AnimalWeighingScheduleController@delete');

/*
 * Terraria
 */
Route::resource('terraria', 'TerrariumController');
Route::get('terraria/{id}/delete', 'TerrariumController@delete');

/*
 * Controlunits
 */
Route::resource('controlunits', 'ControlunitController');
Route::get('controlunits/{id}/delete', 'ControlunitController@delete');

/*
 * Pumps
 */
Route::resource('pumps', 'PumpController');
Route::get('pumps/{id}/delete', 'PumpController@delete');

/*
 * Valves
 */
Route::resource('valves', 'ValveController');
Route::get('valves/{id}/delete', 'ValveController@delete');

/*
 * Physical sensors
 */
Route::resource('physical_sensors', 'PhysicalSensorController');
Route::get('physical_sensors/{id}/delete', 'PhysicalSensorController@delete');

/*
 * Logical sensors
 */
Route::resource('logical_sensors', 'LogicalSensorController');
Route::get('logical_sensors/{id}/delete', 'LogicalSensorController@delete');

// Logical sensor thresholds
Route::resource('logical_sensor_thresholds', 'LogicalSensorThresholdController');
Route::get('logical_sensor_thresholds/{id}/delete', 'LogicalSensorThresholdController@delete');

/*
 * Generic components
 */
Route::resource('generic_components', 'GenericComponentController');
Route::get('generic_components/{id}/delete', 'GenericComponentController@delete');
Route::resource('generic_component_types', 'GenericComponentTypeController');
Route::get('generic_component_types/{id}/delete', 'GenericComponentTypeController@delete');

/*
 * Sensorreadings
 */
Route::resource('sensorreadings', 'SensorreadingController');
Route::get('sensorreadings/{id}/delete', 'SensorreadingController@delete');

/*
 * Files
 */
Route::resource('files', 'FileController');
Route::get('files/{id}/delete', 'FileController@delete');
Route::get('files/associate/{type}/{id}', 'FileController@associate');
Route::get('files/{id}/download/{display_name?}{ext?}', 'FileController@download');

// file properties
Route::resource('file_properties', 'PropertyController');
Route::get('file_properties/{id}/delete', 'PropertyController@delete');

/*
 * Critical States
 */
Route::resource('critical_states', 'CriticalStateController');
Route::get('critical_states/{id}/delete', 'CriticalStateController@delete');

/*
 * Users
 */
Route::resource('users', 'UserController');
Route::get('users/{id}/delete', 'UserController@delete');
Route::get('users/{id}/personal_access_tokens/create', 'UserController@create_personal_accesss_token');
Route::get('users/setup/telegram', 'UserController@setup_Telegram');

// User settings
Route::resource('user_settings', 'UserSettingController');
Route::get('user_settings/{id}/delete', 'UserSettingController@delete');

/*
 * Actions
 */
Route::resource('actions', 'ActionController');
Route::get('actions/{id}/delete', 'ActionController@delete');

// Action sequences
Route::get('action_sequences/{id}/delete', 'ActionSequenceController@delete');
Route::get('action_sequences/stop_all', 'ActionSequenceController@stop_all');
Route::get('action_sequences/resume_all', 'ActionSequenceController@resume_all');
Route::resource('action_sequences', 'ActionSequenceController');

// Action sequence schedules
Route::resource('action_sequence_schedules', 'ActionSequenceScheduleController');
Route::get('action_sequence_schedules/{id}/delete', 'ActionSequenceScheduleController@delete');

// Action sequence triggers
Route::resource('action_sequence_triggers', 'ActionSequenceTriggerController');
Route::get('action_sequence_triggers/{id}/delete', 'ActionSequenceTriggerController@delete');

// Action sequence intentions
Route::resource('action_sequence_intentions', 'ActionSequenceIntentionController');
Route::get('action_sequence_intentions/{id}/delete', 'ActionSequenceIntentionController@delete');

/*
 * Biography entries
 */
Route::resource('biography_entries', 'BiographyEntryController');
Route::get('biography_entries/{id}/delete', 'BiographyEntryController@delete');

/*
 * Biography entry categories
 */
Route::get('biography_entries/categories/create', 'BiographyEntryController@create_type');
Route::get('biography_entries/categories/{id}/delete', 'BiographyEntryController@delete_type');

/*
 * Logs
 */
Route::resource('logs', 'LogController');
Route::resource('system_logs', 'SystemLogController');
Route::get('system/status', 'SystemController@index');


Route::get('map', 'DashboardController@map');
