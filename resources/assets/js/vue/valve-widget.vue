<template>
    <div :class="wrapperClasses">
        <div class="card" v-if="valve.data">
            <div class="card-header">
                <i class="mdi mdi-18px mdi-pipe-disconnected"></i>
                {{ $tc("labels.valves", 1) }}
            </div>

            <div class="card-content">
                <span class="card-title activator">
                    {{ valve.data.name }}
                </span>

                <div>
                    {{ $t('labels.model') }}: {{ valve.data.model }}
                </div>
            </div>

            <div class="card-action">
                <a v-bind:href="'/valves/' + valve.data.id">{{ $t("buttons.details") }}</a>
                <a v-bind:href="'/valves/' + valve.data.id + '/edit'">{{ $t("buttons.edit") }}</a>
            </div>
        </div>
        <div v-else>
            <loading-card-widget> </loading-card-widget>
        </div>
    </div>
</template>

<script>
    import LoadingCardWidget from './loading-card-widget';

    export default {
        props: {
            valveId: {
                type: String,
                default: '',
                required: false
            },
            wrapperClasses: {
                type: String,
                default: '',
                required: false
            }
        },

        components: {
            'loading-card-widget': LoadingCardWidget
        },

        computed: {
            valve () {
                return this.$store.state.valves.filter(v => v.id = this.valveId)[0];
            }
        },

        methods: {
            load_data: function() {
                this.$parent.ensureObject('valves', this.valveId);
            }
        },

        created: function() {
            this.load_data();
        }
    }
</script>
