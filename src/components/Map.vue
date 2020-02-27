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
                        :lat-lng="plumber.newposition"
                        ref="marker"
                        @click="iconClick(plumber, $event)"
                >
                    <l-icon :icon-anchor="[0, 0]" :icon-size="[260, 64]" class-name="main-map-marker-plumber">
                        <div class="main-map-marker-plumber-name-wrap">
                            <div class="main-map-marker-plumber-name">
                                {{ plumber.firstName + ' ' + plumber.lastName}}
                            </div>
                        </div>
                        <div class="main-map-marker-plumber-grid">
                            <div class="main-map-marker-plumber-avatar">
                                <img class="main-map-marker-plumber-avatar-img" :src="plumber.avatar" :alt="plumber.firstName[0] + plumber.lastName[0]">
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
                                        Contact with me
                                    </template>
                                </button>
                                <button data-button-callback class="main-map-marker-plumber-button-callback">Callback</button>
                            </div>
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
                    <img src="../assets/images/icon-user-location.svg" alt="" class="main-map-marker-user-img">
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
    import MapInfoArea from './MapInfoArea.vue';
    import * as turf from '@turf/turf';
    import randomPointsOnPolygon from 'random-points-on-polygon';

    const limitPolygon = turf.polygon(config.limitPolygon.coordinates);
    const bboxLimitPolygon = turf.bbox(config.limitPolygon);
    let bounds;

    export default {
        data () {
            return {
                infoAreaMessage: 'Getting your location...',
                infoAreaType: 'default',
                mapSpinner: true,
                url: config.mapTilesUrl,
                zoom: L.Browser.mobile ? config.mapZoom - 1 : config.mapZoom,
                center: config.mapCenter,
                bounds: null,
                mapOptions: {
                    touchZoom: false,
                    scrollWheelZoom: false,
                    zoomControl: false,
                    boxZoom: false,
                    doubleClickZoom: false,
                    tap: false,
                    dragging: L.Browser.mobile
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
            },
            personsLocation: {
                type: Array,
                default: []
            },
            personsLocationTime: {
                type: Number,
                default: Date.now()
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
            generateMarkersPositions(markers) {
                bounds = this.$refs.mainMap.mapObject.getBounds();
                if (L.Browser.mobile) {
                    this.zoom = config.mapZoom;
                }
                const southWest = bounds.getSouthWest();
                const northEast = bounds.getNorthEast();
                const lsTimeout = (Date.now() - this.$localStorage.get('personsLocationTime', 0)) > config.personUpdateInterval;
                const screenPolygon = turf.polygon([[
                    [northEast.lng, northEast.lat],
                    [southWest.lng, northEast.lat],
                    [southWest.lng, southWest.lat],
                    [northEast.lng, southWest.lat],
                    [northEast.lng, northEast.lat]
                ]]);
                const intersection = turf.intersect(screenPolygon, limitPolygon);

                markers.forEach(marker => {
                    const ls = this.$localStorage.get('personsLocation', []);
                    const lsPerson = ls.find(person => person.id === marker.id);
                    const lsPersonIndex = ls.findIndex(person => person.id === marker.id);

                    function generetePos() {
                        const points = randomPointsOnPolygon(1, intersection);
                        return [points[0].geometry.coordinates[1], points[0].geometry.coordinates[0]];
                    }

                    if (lsPerson && !lsTimeout) {
                        marker.newposition = lsPerson.position;
                    } else {
                        marker.newposition = generetePos();
                    }

                    if (lsPerson) {
                        ls[lsPersonIndex].position = marker.newposition;
                    } else {
                        ls.push({id: marker.id, position: marker.newposition});
                    }

                    this.$localStorage.set('personsLocation', ls);
                });

                if (lsTimeout) {
                    this.$localStorage.set('personsLocationTime', Date.now());
                }
            },
            geoFindMe() {
                return new Promise((resolve, reject) => {
                    if (!navigator.geolocation) {
                        reject();
                        alert('Geolocation is not supported by your browser');
                    } else {
                        navigator.geolocation.getCurrentPosition(position => {
                            this.userGeo.lat = position.coords.latitude;
                            this.userGeo.lng = position.coords.longitude;
                            this.$nextTick(() => {
                                this.$refs.mainMap.mapObject.panTo([this.userGeo.lat, this.userGeo.lng]);
                            });
                            resolve([position.coords.latitude, position.coords.longitude]);
                        }, error => {
                            reject('Unable to retrieve your location');
                            alert('Unable to retrieve your location');
                            this.infoAreaMessage = 'Unable to retrieve your location';
                            this.infoAreaType = 'error';
                            console.log(error);
                        });
                    }
                });
            },
            geoCheckLocationLimit(lngLat) {
                const pt = turf.point(lngLat);
                const poly = turf.polygon(config.limitPolygon.coordinates);
                return turf.booleanPointInPolygon(pt, poly);
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
        async mounted() {
            await this.geoFindMe();
            if (this.geoCheckLocationLimit([this.userGeo.lng, this.userGeo.lat])) {
                const markers = await this.getMarkers();

                this.generateMarkersPositions(markers.plumbers);

                this.$set(this, 'markers', markers);

                if (markers.plumbers.length > 1) {
                    this.infoAreaMessage = `We found ${markers.plumbers.length} available plumbers nearby!`;
                }

                // Limit pan to city bounds
                this.$refs.mainMap.mapObject.setMaxBounds(L.latLngBounds(
                    L.latLng(bboxLimitPolygon[1], bboxLimitPolygon[0]),
                    L.latLng(bboxLimitPolygon[3], bboxLimitPolygon[2]),
                ));

                // Limit pan to zoom-1 on mobiles
                // this.$refs.mainMap.mapObject.setMaxBounds(bounds);
            } else {
                this.infoAreaMessage = 'Unfortunately you are too far, no plumbers found nearby';
                this.infoAreaType = 'warning';

                // Disable map drag, cause nothing to show here
                this.$refs.mainMap.mapObject.dragging.disable();
            }

            this.mapSpinner = false;
        }
    }
</script>
