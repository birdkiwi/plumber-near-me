<template>
    <div class="app-route">
        <Header />
        <main class="main-main">
            <Map />
            <div class="main-wrapper">
                <div class="contact-form-title pt-l">
                    We will find a best plumber near you within 5 minutes
                </div>

                <div class="contact-form-subtitle">
                    Please provide your contact details below
                </div>
                <Contact-form class-name="pb-l" />
            </div>
        </main>
        <Footer />
    </div>
</template>
<script>
    import Header from '../components/Header.vue';
    import Map from '../components/Map.vue';
    import ContactForm from '../components/ContactForm.vue';
    import Footer from '../components/Footer.vue';

    export default {
        components: {
            Header,
            Map,
            Footer,
            ContactForm
        }
    }
</script>