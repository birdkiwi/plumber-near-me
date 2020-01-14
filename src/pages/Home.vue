<template>
    <div class="app-route">
        <Header />
        <main class="main-main">
            <Map />
            <div class="main-wrapper">
                <Contact-form class-name="pt-l pb-l" />
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