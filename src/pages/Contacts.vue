<template>
    <div class="app-route">
        <Header />
        <main class="main-main">
            <div class="main-wrapper">
                <div class="contacts-page">
                    <h1 class="contacts-page-title">
                        Contacts
                    </h1>

                    <div class="contacts-page-grid mb-l">
                        <div class="contacts-page-content">
                            <div class="contacts-page-subtitle mb-xxs">
                                Address
                            </div>
                            <div class="contacts-page-desc mb-m">
                                4773 Yonge St, North York, <br>
                                ON M2N 0G2
                            </div>

                            <div class="contacts-page-subtitle mb-xxs">
                                Phone
                            </div>
                            <div class="contacts-page-desc mb-m">
                                <a :href="'tel:' + phoneRaw">{{ phone }}</a>
                            </div>

                            <div class="contacts-page-subtitle mb-xxs">
                                E-mail
                            </div>
                            <div class="contacts-page-desc mb-m">
                                <a :href="'mailto:' + email">{{ email }}</a>
                            </div>

                            <div class="contacts-page-subtitle mb-xxs">
                                Website
                            </div>
                            <div class="contacts-page-desc mb-m">
                                <a href="https://fixonair.com">fixonair.com</a>
                            </div>
                        </div>

                        <div class="contacts-page-map">
                            <img src="../assets/images/contacts-map.svg" alt="Map" class="contacts-page-map-img">
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>
<script>
    import config from '../config';
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';
    import '../assets/css/pages/contacts.css';

    export default {
        data() {
            return {
                phone: config.contactPhone,
                phoneRaw: config.contactPhoneRaw,
                email: config.contactEmail
            }
        },
        components: {
            Header,
            Footer,
        }
    }
</script>