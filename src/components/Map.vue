<template>
    <div id="map" class="main-map">
        <spinner class="main-map-spinner" v-if="mapSpinner" size="medium" />
        <map-info-area :type="infoAreaType">{{ infoAreaMessage }}</map-info-area>
        <l-map
            class="main-map-leaflet"
            :zoom="zoom"
            :center="center"
            :options="mapOptions"
            @update:zoom="zoomUpdated"
            @update:center="centerUpdated"
            @update:bounds="boundsUpdated"
            ref="mainMap"
        >
            <div v-if="markers && markers.plumbers">
                <l-marker
                        class="main-map-marker"
                        v-for="plumber in markers.plumbers"
                        :key="plumber.id"
                        :lat-lng="[plumber.position[1], plumber.position[0]]"
                        ref="marker"
                        @click="iconClick(plumber, $event)"
                >
                    <l-icon class-name="main-map-marker-plumber">
                        <div class="main-map-marker-plumber-avatar">
                            <img class="main-map-marker-plumber-avatar-img" :src="plumber.avatar" :alt="plumber.firstName + ' ' + plumber.lastName">
                        </div>
                        <div class="main-map-marker-plumber-buttons">
                            <button
                                    type="button"
                                    data-button-dialog
                                    class="main-map-marker-plumber-button-available"
                                    :class="personAvailableCheck(plumber.id) ? 'main-map-marker-plumber-button-available-active' : ''">
                                <template v-if="personAvailableCheck(plumber.id)">
                                    Yes, I'm available
                                </template>
                                <template v-else>
                                    Is this still available?
                                </template>
                            </button>
                            <button data-button-callback class="main-map-marker-plumber-button-callback">Callback</button>
                        </div>
                    </l-icon>
                </l-marker>
            </div>
            <l-marker
                    class="main-map-marker"
                    v-if="userGeo"
                    :lat-lng="[userGeo.lat, userGeo.lng]"
                    ref="userMarker"
            >
                <l-icon class-name="main-map-marker-user">
                    <img src="../assets/images/icon-user-location.svg" alt="">
                    <div class="main-map-marker-user-title">This is your location</div>
                </l-icon>
            </l-marker>
            <l-tile-layer :url="url" />
        </l-map>
        <transition name="fade">
            <Dialog v-if="dialogPerson" :person="dialogPerson" />
        </transition>
        <transition name="fade">
            <Callback v-if="callbackPerson" :person="callbackPerson" />
        </transition>
    </div>
</template>

<script>
    import config from "../config";
    import { LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet';
    import L from 'leaflet';
    import 'leaflet/dist/leaflet.css';
    import Spinner from 'vue-simple-spinner'
    import Dialog from './Dialog.vue';
    import Callback from './Callback.vue';
    import MapInfoArea from "./MapInfoArea.vue";

    export default {
        data () {
            return {
                infoAreaMessage: 'Getting your location...',
                infoAreaType: 'default',
                mapSpinner: true,
                url: config.mapTilesUrl,
                zoom: config.mapZoom,
                center: config.mapCenter,
                bounds: null,
                mapOptions: {
                    dragging: !L.Browser.mobile,
                    touchZoom: true,
                    scrollWheelZoom: false
                },
                markers: [],
                dialogPerson: false,
                callbackPerson: false,
                userGeo: {
                    lat: 0,
                    lng: 0
                }
            };
        },
        localStorage: {
            evokedPersons: {
                type: Array,
                default: []
            }
        },
        components: {
            LMap,
            LMarker,
            LTileLayer,
            LIcon,
            Spinner,
            Dialog,
            Callback,
            MapInfoArea
        },
        methods: {
            zoomUpdated (zoom) {
                this.zoom = zoom;
            },
            centerUpdated (center) {
                this.center = center;
            },
            boundsUpdated (bounds) {
                this.bounds = bounds;
            },
            getMarkers() {
                return fetch(config.dataUrl, {
                    method: 'GET',
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(response => response.json());
            },
            geoFindMe() {
                if (!navigator.geolocation) {
                    alert('Geolocation is not supported by your browser');
                } else {
                    // status.textContent = 'Locating…';
                    navigator.geolocation.getCurrentPosition(position => {
                        this.userGeo.lat = position.coords.latitude;
                        this.userGeo.lng = position.coords.longitude;
                        this.$nextTick(() => {
                            this.$refs.mainMap.mapObject.panTo([this.userGeo.lat, this.userGeo.lng]);
                        });
                    }, error => {
                        alert('Unable to retrieve your location');
                        this.infoAreaMessage = 'Unable to retrieve your location';
                        this.infoAreaType = 'error';
                        console.log(error);
                    });
                }
            },
            openDialog(person) {
                this.dialogPerson = person;
            },
            closeDialog() {
                this.dialogPerson = false;
            },
            openCallback(person) {
                this.callbackPerson = person;
            },
            closeCallback() {
                this.callbackPerson = false;
            },
            iconClick(person, e) {
                if (e.originalEvent.target.hasAttribute('data-button-dialog')) {
                    this.openDialog(person);
                }
                if (e.originalEvent.target.hasAttribute('data-button-callback')) {
                    this.openCallback(person);
                }
            },
            personAvailableCheck(personId) {
                return this.$localStorage.get('evokedPersons', []).indexOf(personId) > -1;
            }
        },
        mounted() {
            this.getMarkers().then(markers => {
                this.$set(this, 'markers', markers);
                this.mapSpinner = false;

                if (markers.plumbers.length > 1) {
                    this.infoAreaMessage = `We found ${markers.plumbers.length} plumbers nearby! Click to chat with a plumber or order a callback.`;
                }
            });

            this.geoFindMe();
        }
    }
</script>
