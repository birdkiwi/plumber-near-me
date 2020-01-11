<template>
    <div class="app-route">
        <Header />
        <main class="main-main">
            <Map />
        </main>
        <Footer />
    </div>
</template>
<script>
    import Header from '../components/Header.vue';
    import Map from '../components/Map.vue';
    import Footer from '../components/Footer.vue';

    export default {
        components: {
            Header,
            Map,
            Footer,
        }
    }
</script>