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
                                4773 Yonge St Unit 3B, North York, <br>
                                ON M2N 0G2
                            </div>

                            <div class="contacts-page-subtitle mb-xxs">
                                Phone
                            </div>
                            <div class="contacts-page-desc mb-m">
                                <a href="tel:+18006819891">1-800-681-98-91</a>
                            </div>

                            <div class="contacts-page-subtitle mb-xxs">
                                E-mail
                            </div>
                            <div class="contacts-page-desc mb-m">
                                <a href="mailto:info@canaho.ca">info@canaho.ca</a>
                            </div>

                            <div class="contacts-page-subtitle mb-xxs">
                                Website
                            </div>
                            <div class="contacts-page-desc mb-m">
                                <a href="https://canaho.ca">canaho.ca</a>
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
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';
    import '../assets/css/pages/contacts.css';

    export default {
        components: {
            Header,
            Footer,
        }
    }
</script>