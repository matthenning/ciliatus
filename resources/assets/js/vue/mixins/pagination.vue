<template>
    <div>

        <div class="row">
            <div class="col s10">
                <ul class="pagination" v-if="meta.hasOwnProperty('pagination')">
                    <li v-bind:class="['hide-on-small-only', { 'disabled': meta.pagination.current_page == 1, 'waves-effect': meta.pagination.current_page != 1 }]">
                        <a v-if="meta.pagination.current_page > 1" href="#!" v-on:click="set_page(1)">
                            <i class="mdi mdi-page-first"></i>
                        </a>
                        <a v-else>
                            <i class="mdi mdi-page-first disabled"></i>
                        </a>
                    </li>
                    <li v-if="!mini" v-bind:class="{ 'disabled': meta.pagination.current_page == 1, 'waves-effect': meta.pagination.current_page != 1 }">
                        <a v-if="meta.pagination.current_page > 1" href="#!" v-on:click="set_page(meta.pagination.current_page-1)">
                            <i class="mdi mdi-chevron-left"></i>
                        </a>
                        <a v-else>
                            <i class="mdi mdi-chevron-left disabled"></i>
                        </a>
                    </li>

                    <li v-if="!mini && meta.pagination.current_page-3 > 0" class="waves-effect"><a href="#!" v-on:click="set_page(meta.pagination.current_page-3)">{{ meta.pagination.current_page-3 }}</a></li>
                    <li v-if="!mini && meta.pagination.current_page-2 > 0" class="waves-effect"><a href="#!" v-on:click="set_page(meta.pagination.current_page-2)">{{ meta.pagination.current_page-2 }}</a></li>
                    <li v-if="meta.pagination.current_page-1 > 0" class="waves-effect"><a href="#!" v-on:click="set_page(meta.pagination.current_page-1)">{{ meta.pagination.current_page-1 }}</a></li>

                    <li class="active"><a href="#!">{{ meta.pagination.current_page }}</a></li>

                    <li v-if="meta.pagination.current_page+1 <= meta.pagination.total_pages" class="waves-effect"><a href="#!" v-on:click="set_page(meta.pagination.current_page+1)">{{ meta.pagination.current_page+1 }}</a></li>
                    <li v-if="!mini && meta.pagination.current_page+2 <= meta.pagination.total_pages" class="waves-effect"><a href="#!" v-on:click="set_page(meta.pagination.current_page+2)">{{ meta.pagination.current_page+2 }}</a></li>
                    <li v-if="!mini && meta.pagination.current_page+3 <= meta.pagination.total_pages" class="waves-effect"><a href="#!" v-on:click="set_page(meta.pagination.current_page+3)">{{ meta.pagination.current_page+3 }}</a></li>

                    <li v-if="!mini" v-bind:class="{ 'disabled': meta.pagination.current_page == meta.pagination.total_pages, 'waves-effect': meta.pagination.current_page != meta.pagination.total_pages }">
                        <a v-if="meta.pagination.total_pages > meta.pagination.current_page" href="#!" v-on:click="set_page(meta.pagination.current_page+1)">
                            <i class="mdi mdi-chevron-right"></i>
                        </a>
                        <a v-else>
                            <i class="mdi mdi-chevron-right disabled"></i>
                        </a>
                    </li>
                    <li v-bind:class="['hide-on-small-only', { 'disabled': meta.pagination.current_page == meta.pagination.total_pages, 'waves-effect': meta.pagination.current_page != meta.pagination.total_pages }]">
                        <a v-if="meta.pagination.total_pages > meta.pagination.current_page" href="#!" v-on:click="set_page(meta.pagination.total_pages)">
                            <i class="mdi mdi-page-last"></i>
                        </a>
                        <a v-else>
                            <i class="mdi mdi-page-last disabled"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col s2 right-align" v-if="enableFilters">
                <ul class="pagination">
                    <li class="waves-effect">
                        <a href="#!"><i class="mdi mdi-filter-variant" v-on:click="toggle_filters"></i></a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="row" v-show="showFilters && enableFilters">
            <div class="col s12">
                <div class="input-field inline" v-for="field in filterFields">
                    <input :id="'filter_' + field.name" type="text" :placeholder="$t('labels.' + field.name)"
                           v-model="filter[field.path]" v-on:keyup.enter="set_filter">
                    <label :for="'filter_' + field.name">{{ $t('labels.'+ field.name) }}</label>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
export default {

    data () {
        return {
            meta: [],
            filter: {},
            filter_string: '',
            order: {
                field: 'display_name',
                direction: 'asc'
            },
            order_string: '',
            page: 1
        }
    },

    props: {
        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        enableFilters: {
            type: Boolean,
            default: false,
            required: false
        },
        showFilters: {
            type: Boolean,
            default: false,
            required: false
        },
        filterFields: {
            type: Array,
            default: function(){return [];},
            required: false
        },
        mini: {
            type: Boolean,
            default: false
        }
    },

    methods: {

        toggle_filters: function() {
            this.showFilters = !this.showFilters;
        },

        set_order: function(field) {
            if (this.order.field === field || field === null) {
                if (this.order.direction === 'asc') {
                    this.order.direction = 'desc';
                }
                else {
                    this.order.direction = 'asc';
                }
            }
            else {
                this.order.field = field;
            }

            this.render_order_string();
            this.$parent.load_data();
        },

        render_order_string: function () {
            if (!this.order.string || !this.order.direction) {
                this.order_string = '';
            }
            this.order_string = 'order[' + this.order.field + ']=' + this.order.direction;
        },

        set_filter: function() {
            this.render_filter_string();
            this.$parent.load_data();
        },

        render_filter_string: function() {
            this.filter_string = '&';
            if (this.sourceFilter !== '') {
                this.filter_string += this.sourceFilter + '&';
            }
            for (let prop in this.filter) {
                if (this.filter.hasOwnProperty(prop)) {
                    if (this.filter[prop] !== null
                        && this.filter[prop] !== '') {

                        this.filter_string += 'filter[' + prop + ']=like:*' + this.filter[prop] + '*&';
                    }
                }
            }
        },

        set_page: function(page) {
            this.page = page ? page : 1;
            this.$parent.unsubscribe_all();
            this.$parent.load_data();
        },

        init: function(order_field, order_direction) {
            if (order_field) {
                this.order.field = order_field;
            }

            if (order_direction) {
                this.order.direction = order_direction;
            }

            this.render_filter_string();
            this.render_order_string();
            this.set_page();
        }

    }

};
</script>