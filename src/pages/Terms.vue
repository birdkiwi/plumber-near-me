<template>
    <div class="app-route">
        <Header />
        <main class="main-main main-main-terms">
            <div class="main-wrapper">
                Terms
            </div>
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