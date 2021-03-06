<template>

    <div>

        <pagination ref="pagination"
                    v-show="animalId === null"
                    :source-filter="sourceFilter"
                    :show-filters="showFilters"
                    :filter-fields="[{name: 'display_name', path: 'display_name'},
                                     {name: 'common_name', path: 'common_name'},
                                     {name: 'latin_name', path: 'latin_name'}]">
        </pagination>

        <div :class="containerClasses" :id="containerId">
            <div :class="wrapperClasses" v-for="animal in animals">
                <template v-if="animal.data">
                    <!-- Modals -->
                    <animal-add-feeding-modal :animalId="animal.data.id" :feedingTypes="feeding_types"
                                              :selected-feeding-type="animal.data.last_feeding"
                                             :containerId="'modal_add_weight_' + animal.data.id"> </animal-add-feeding-modal>

                    <animal-add-weight-modal :animalId="animal.data.id"
                                             :containerId="'modal_add_weight_' + animal.data.id"> </animal-add-weight-modal>
                </template>

                <!-- Card -->
                <div class="card" v-if="animal.data">
                    <div class="card-image terrarium-card-image"
                         v-bind:style="animal.data.default_background_filepath ? 'background-image: url(\'' + animal.data.default_background_filepath + '\');' : 'background-image: url(\'/svg/Ciliatus_Logo.svg\'); background-position: top center;'">

                        <div class="card-title">
                            <span><a :href="'/animals/' + animal.data.id">{{ animal.data.display_name }}</a></span>
                            <loading-indicator :size="20" v-show="animal.data.loading_data"> </loading-indicator>
                            <a href="#!"><i class="mdi mdi-24px mdi-dots-vertical right activator white-text" v-if="!animal.data.death_date"></i></a>
                        </div>
                    </div>

                    <div class="card-content">
                        <div class="ellipsis card-content-row">
                            <span v-show="animal.data.latin_name">{{ animal.data.latin_name }}</span>
                            <span v-show="animal.data.common_name && !animal.data.latin_name">{{ animal.data.common_name }},</span>
                            <span v-show="animal.data.birth_date || animal.data.death_date"> - {{ animal.data.age_value }} {{ $tc("units." + animal.data.age_unit, animal.data.age_value) }}</span>
                            <i v-if="animal.data.gender === 'female'" class="mdi mdi-gender-female"></i>
                            <i v-if="animal.data.gender === 'male'" class="mdi mdi-gender-male"></i>
                        </div>

                        <div class="ellipsis card-content-row">
                            <i class="mdi mdi-silverware-variant"></i>
                            <span v-if="animal.data.last_feeding && !animal.data.death_date">
                                {{ $t(
                                    'units.' + $getMatchingTimeDiff(animal.data.last_feeding.timestamps.created_diff).unit,
                                    {val: $getMatchingTimeDiff(animal.data.last_feeding.timestamps.created_diff).val}
                                )}}
                                {{ animal.data.last_feeding.name }}
                            </span>
                            <span v-else>
                                <a href="#!"
                                   v-bind:href="'#modal_just_fed_' + animal.data.id"
                                   v-bind:onclick="'$(\'#modal_just_fed_' + animal.data.id + '\').modal(); $(\'#modal_just_fed_' + animal.data.id + ' select\').formSelect(); $(\'#modal_just_fed_' + animal.data.id + '\').modal(\'open\');'">
                                    {{ $t("messages.cards.no_feedings") }}
                                </a>
                            </span>
                        </div>

                        <div class="ellipsis card-content-row">
                            <i class="mdi mdi-download"></i>
                            <span v-if="animal.data.last_weighing && !animal.data.death_date">
                                {{ $t(
                                    'units.' + $getMatchingTimeDiff(animal.data.last_weighing.timestamps.created_diff).unit,
                                    {val: $getMatchingTimeDiff(animal.data.last_weighing.timestamps.created_diff).val}
                                )}}
                                {{ animal.data.last_weighing.value }}{{ animal.data.last_weighing.name }}
                                <span v-if="animal.data.last_weighing.trend && animal.data.last_weighing.trend > 0" class="green-text tooltipped"
                                      data-delay="50" data-html="true"
                                      :data-tooltip="'<div style=\'max-width: 300px\'>' + $t('tooltips.animal_weighing.trend') + '</div>'">
                                    (+ {{ animal.data.last_weighing.trend }}%)
                                </span>
                                <span v-if="animal.data.last_weighing.trend && animal.data.last_weighing.trend < 0" class="red-text tooltipped"
                                      data-delay="50" data-html="true"
                                      :data-tooltip="'<div style=\'max-width: 300px\'>' + $t('tooltips.animal_weighing.trend') + '</div>'">
                                    ({{ animal.data.last_weighing.trend }}%)
                                </span>
                                <span v-if="animal.data.last_weighing.trend && animal.data.last_weighing.trend == 0" class="tooltipped"
                                      data-delay="50" data-html="true"
                                      :data-tooltip="'<div style=\'max-width: 300px\'>' + $t('tooltips.animal_weighing.trend') + '</div>'">
                                    (+/- 0%)
                                </span>
                            </span>
                            <span v-else>
                                <a href="#!"
                                   v-bind:href="'#modal_add_weight_' + animal.data.id"
                                   v-bind:onclick="'$(\'#modal_add_weight_' + animal.data.id + '\').modal(); $(\'#modal_add_weight_' + animal.data.id + ' select\').formSelect(); $(\'#modal_add_weight_' + animal.data.id + '\').modal(\'open\');'">
                                    {{ $t("messages.cards.no_weight") }}
                                </a>
                            </span>
                        </div>
                    </div>

                    <div class="card-reveal" v-if="!animal.data.death_date">
                        <span class="card-title">
                            {{ animal.data.display_name }}
                            <i class="mdi mdi-24px mdi-close right card-title card-title-small"></i>
                        </span>

                        <p v-if="terrarium = terraria.filter(t => t.id === animal.data.terrarium_id)[0]">
                            <template v-if="terrarium.data">
                                <i class="mdi mdi-18px mdi-trackpad"></i>
                                <a :href="'/terraria/' + terrarium.data.id">{{ terrarium.data.display_name }}</a>
                            </template>
                        </p>

                        <p>
                            <i class="mdi mdi-18px mdi-silverware-variant"></i>
                            <a href="#!" v-bind:href="'#modal_just_fed_' + animal.data.id" v-bind:onclick="'$(\'#modal_just_fed_' + animal.data.id + '\').modal(); $(\'#modal_just_fed_' + animal.data.id + ' select\').formSelect(); $(\'#modal_just_fed_' + animal.data.id + '\').modal(\'open\');'">{{ $t("labels.just_fed") }}</a>
                        </p>

                        <p>
                            <i class="mdi mdi-18px mdi-weight-kilogram"></i>
                            <a href="#!" v-bind:href="'#modal_add_weight_' + animal.data.id" v-bind:onclick="'$(\'#modal_add_weight_' + animal.data.id + '\').modal(); $(\'#modal_add_weight_' + animal.data.id + ' select\').formSelect(); $(\'#modal_add_weight_' + animal.data.id + '\').modal(\'open\');'">{{ $t("labels.add_weight") }}</a>
                        </p>
                    </div>
                </div>
                <div v-else>
                    <loading-card-widget> </loading-card-widget>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoadingIndicator from './loading-indicator.vue';
import AnimalAddFeedingModal from './animal_add_feeding-modal.vue';
import AnimalAddWeightModal from './animal_add_weight-modal.vue';
import pagination from './mixins/pagination.vue';
import LoadingCardWidget from './loading-card-widget';

export default {
    data () {
        return {
            ids: [],
            terrarium_ids: [],
            initial: true,
            feeding_types: []
        }
    },

    props: {
        refreshTimeoutSeconds: {
            type: Number,
            default: null,
            required: false
        },
        animalId: {
            type: String,
            default: null,
            required: false
        },
        subscribeAdd: {
            type: Boolean,
            default: true,
            required: false
        },
        subscribeDelete: {
            type: Boolean,
            default: true,
            required: false
        },
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        containerClasses: {
            type: String,
            default: '',
            required: false
        },
        containerId: {
            type: String,
            default: 'animals-grid',
            required: false
        },
        itemsPerPage: {
            type: Number,
            default: 9,
            required: false
        },

        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        showFilters: {
            type: Boolean,
            default: false,
            required: false
        }
    },

    components: {
        pagination,
        'loading-indicator': LoadingIndicator,
        'animal-add-feeding-modal': AnimalAddFeedingModal,
        'animal-add-weight-modal': AnimalAddWeightModal,
        'loading-card-widget': LoadingCardWidget
    },

    computed: {
        animals () {
            let that = this;
            return this.$store.state.animals.filter(function(a) {
                return that.ids.includes(a.id) && a.data !== null
            });
        },

        terraria () {
            let that = this;
            return this.$store.state.terraria.filter(function(t) {
                return that.terrarium_ids.includes(t.id);
            })
        }
    },

    watch: {
        'animals': function() {
            this.rerender();
        }
    },

    methods: {

        submit: function(e) {
            window.submit_form(e);
        },

        load_data: function() {
            let that = this;
            if (this.animalId === null) {
                $.ajax({
                    url: '/api/v1/animals/?with[]=terrarium&pagination[per_page]=' + that.itemsPerPage + '&page=' +
                        that.$refs.pagination.page +
                        that.$refs.pagination.filter_string +
                        that.$refs.pagination.order_string,
                    method: 'GET',
                    success: function (data) {
                        that.ids = data.data.map(a => a.id);
                        that.$refs.pagination.meta = data.meta;
                        that.$parent.ensureObjects('animals', that.ids, data.data);
                        that.terrarium_ids = data.data.map(a => a.terrarium_id);
                        that.$parent.ensureObjects('terraria', null, data.data.map(a => a.terrarium));
                        that.rerender();
                    },
                    error: function (error) {
                        console.log(JSON.stringify(error));
                    }
                });
            }
            else {
                this.ids = [this.animalId];
                this.$parent.ensureObject('animals', this.animalId);
            }

            $.ajax({
                url: '/api/v1/animals/feedings/types',
                method: 'GET',
                success: function (data) {
                    that.feeding_types = data.data;
                },
                error: function (error) {
                    console.log(JSON.stringify(error));
                }
            });
        },

        rerender: function() {
            this.$nextTick(function() {
                $('.modal').modal();
                $('.tooltipped').tooltip({delay: 50});
            });
        },

        unsubscribe_all () {
            this.animals.forEach((a) => a.unsubscribe());
            this.terraria.forEach((t) => t.unsubscribe());
        }
    },

    created: function() {
        let that = this;
        setTimeout(function() {
            that.$refs.pagination.init();
        }, 100);
    }

}
</script>