import Peity from 'vue-peity';

import SystemIndicator from './vue/system-indicator.vue';
import LoadingIndicator from './vue/loading-indicator.vue';

import DashboardWidget from './vue/dashboard-widget.vue';
import GoogleGraph from './vue/google-graph.vue';
import DygraphGraph from './vue/dygraph-graph.vue';
import ChartjsGraph from './vue/chartjs-graph.vue';
import InlineGraph from './vue/inline-graph.vue';
import AnimalsWidget from './vue/animals-widget.vue';
import AnimalFeedingsWidget from './vue/animal_feedings-widget.vue';
import AnimalFeedingSchedulesWidget from './vue/animal_feeding_schedules-widget.vue';
import AnimalFeedingSchedulesMatrixWidget from './vue/animal_feeding_schedules-matrix-widget.vue';
import AnimalWeighingSchedulesMatrixWidget from './vue/animal_weighing_schedules-matrix-widget.vue';
import AnimalWeighingsWidget from './vue/animal_weighings-widget.vue';
import AnimalWeighingSchedulesWidget from './vue/animal_weighing_schedules-widget.vue';
import TerrariaWidget from './vue/terraria-widget.vue';
import ControlunitsWidget from './vue/controlunit-widget.vue';
import ControlunitsListWidget from './vue/controlunits-list-widget.vue';
import FilesWidget from './vue/files-widget.vue';
import FilesListWidget from './vue/files-list-widget.vue';
import FilesShowWidget from './vue/files-show-widget.vue';
import ActionSequencesListWidget from './vue/action_sequences-list-widget.vue';
import ActionSequencesWidget from './vue/action_sequences-widget.vue';
import ActionSequenceScheduleWidget from './vue/action_sequence_schedule-widget.vue';
import PumpsWidget from './vue/pumps-widget.vue';
import PumpsListWidget from './vue/pumps-list-widget.vue';
import ValvesWidget from './vue/valves-widget.vue';
import ValvesListWidget from './vue/valves-list-widget.vue';
import PhysicalSensorsWidget from './vue/physical_sensors-widget.vue';
import PhysicalSensorsListWidget from './vue/physical_sensors-list-widget.vue';
import LogicalSensorsWidget from './vue/logical_sensors-widget.vue';
import LogicalSensorsListWidget from './vue/logical_sensors-list-widget.vue';
import LogicalSensorThresholdsWidget from './vue/logical_sensor_thresholds-widget.vue';
import GenericComponentsWidget from './vue/generic_components-widget.vue';
import GenericComponentsListWidget from './vue/generic_components-list-widget.vue';
import UsersWidget from './vue/users-widget.vue';
import BiographyEntriesWidget from './vue/biography_entries-widget.vue'
import CaresheetsWidget from './vue/caresheets-widget.vue'
import LogsWidget from './vue/logs-widget.vue';
import ComponentsListWidget from './vue/components-list-widget.vue';

import ApiIoWidget from './vue/api-io-widget.vue';

import BusTypeEditForm from './vue/bus_type_edit-form.vue';
import GenericComponentTypeCreateForm from './vue/generic_component_type_create-form.vue';

import CiliatusObject from './ciliatus_object.js';
import Vuex from "vuex";

global.Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        terraria: [],
        animals: [],
        valves: [],
        pumps: [],
        generic_components: [],

        max_object_age_seconds: 60
    }
});

global.ciliatusVue = new global.Vue({

    el: '#body',

    i18n: global.i18n,
    store,

    data: {
        terraria: [],
        files: [],
        animals: []
    },

    props: {
        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        belongsTo_type: {
            type: String,
            default: '',
            required: false
        },
        belongsTo_id: {
            type: String,
            default: '',
            required: false
        }
    },

    methods: {
        ensureObject (type, id, data) {
            if (this.$store.state[type] === undefined) {
                this.$store.state[type] = [];
            }

            if (this.$store.state[type].filter(t => t.id === id).length < 1) {
                this.$store.state[type].push(new CiliatusObject(type, id, data));
            }
        },

        ensureObjects (type, ids, data) {
            ids.forEach(id => this.ensureObject(type, id, data.filter(o => o.id === id)[0]));
        }
    },

    components: {
        'system-indicator': SystemIndicator,
        'loading-indicator': LoadingIndicator,

        'dashboard-widget': DashboardWidget,
        'peity': Peity,
        'google-graph': GoogleGraph,
        'dygraph-graph': DygraphGraph,
        'chartjs-graph': ChartjsGraph,
        'inline-graph': InlineGraph,
        'animals-widget': AnimalsWidget,
        'animal_feedings-widget': AnimalFeedingsWidget,
        'animal_feeding_schedules-widget': AnimalFeedingSchedulesWidget,
        'animal_feeding_schedules-matrix-widget': AnimalFeedingSchedulesMatrixWidget,
        'animal_weighing_schedules-matrix-widget': AnimalWeighingSchedulesMatrixWidget,
        'animal_weighings-widget': AnimalWeighingsWidget,
        'animal_weighing_schedules-widget': AnimalWeighingSchedulesWidget,
        'terraria-widget': TerrariaWidget,
        'controlunits-widget': ControlunitsWidget,
        'controlunits-list-widget': ControlunitsListWidget,
        'files-widget': FilesWidget,
        'files-list-widget': FilesListWidget,
        'files-show-widget': FilesShowWidget,
        'action_sequences-list-widget': ActionSequencesListWidget,
        'action_sequences-widget': ActionSequencesWidget,
        'action_sequence_schedule-widget': ActionSequenceScheduleWidget,
        'pumps-widget': PumpsWidget,
        'pumps-list-widget': PumpsListWidget,
        'valves-widget': ValvesWidget,
        'valves-list-widget': ValvesListWidget,
        'physical_sensors-widget': PhysicalSensorsWidget,
        'physical_sensors-list-widget': PhysicalSensorsListWidget,
        'logical_sensors-widget': LogicalSensorsWidget,
        'logical_sensors-list-widget': LogicalSensorsListWidget,
        'logical_sensor_thresholds-widget': LogicalSensorThresholdsWidget,
        'generic_components-widget': GenericComponentsWidget,
        'generic_components-list-widget': GenericComponentsListWidget,
        'users-widget': UsersWidget,
        'biography_entries-widget': BiographyEntriesWidget,
        'caresheets-widget': CaresheetsWidget,
        'logs-widget': LogsWidget,
        'components-list-widget': ComponentsListWidget,

        'api-io-widget': ApiIoWidget,

        'bus-type-edit-form': BusTypeEditForm,
        'generic_component_type_create-form': GenericComponentTypeCreateForm
    }
});