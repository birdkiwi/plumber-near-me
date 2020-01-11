<template>
    <div class="app-route">
        <Header />
        <main class="main-main">
            Who we are!
        </main>
        <Footer />
    </div>
</template>
<script>
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';

    export default {
        components: {
            Header,
            Footer,
        }
    }
</script>