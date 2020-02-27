<template>
    <div>
        <Offcanvas :active="offcanvasActive" v-click-outside="outsideClick">
            <router-link to="/" class="main-offcanvas-logo">
                <img src="../assets/images/logo.svg" alt="" class="main-offcanvas-logo-img">
            </router-link>
            <Offcanvas-menu />
        </Offcanvas>

        <header class="main-header">
            <div class="main-header-wrapper">
                <a
                        href="#"
                        @click.prevent="toggleOffcanvas"
                        class="main-header-toggler"
                        :class="offcanvasActive ? 'main-header-toggler-active': ''"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="main-header-toggler-svg"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path></svg>
                </a>

                <router-link to="/" class="main-header-logo">
                    <img src="../assets/images/logo.svg" alt="Fixonair.ca" width="200" class="main-header-logo-img">
                </router-link>

                <Header-menu />

                <div class="main-header-contacts">
                    <a :href="'tel:' + phoneRaw" class="main-header-contacts-link">
                        <span class="main-header-contacts-icon">
                            <img src="../assets/images/icon-phone-green.svg" class="main-header-contacts-icon-img" alt="📱">
                        </span>
                        <span class="main-header-contacts-phone">
                            {{ phone }}
                        </span>
                    </a>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    import config from "../config";
    import HeaderMenu from './HeaderMenu.vue';
    import OffcanvasMenu from './OffcanvasMenu.vue';
    import Offcanvas from './Offcanvas';

    export default {
        data() {
            return {
                offcanvasActive: false,
                phone: config.contactPhone,
                phoneRaw: config.contactPhoneRaw
            }
        },
        components: {
            HeaderMenu,
            OffcanvasMenu,
            Offcanvas
        },
        methods: {
            toggleOffcanvas() {
                this.offcanvasActive = !this.offcanvasActive;
            },
            closeOffcanvas() {
                this.offcanvasActive = false;
            },
            outsideClick(e) {
                if (this.offcanvasActive && !e.originalTarget.closest('.main-header-toggler')) {
                    this.offcanvasActive = false;
                }
            }
        }
    }
</script>
