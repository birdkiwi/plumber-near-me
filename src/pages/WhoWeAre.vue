<template>
    <div class="app-route">
        <Header />
        <main class="main-main main-main-who-we-are">
            <div class="main-wrapper">
                <div class="hero-block">
                    <div class="hero-block-intro">
                        <div class="hero-block-intro-bg"></div>
                    </div>
                    <div class="hero-block-content">
                        <div class="hero-block-subtitle who-we-are-subtitle mb-xxs">
                            Our mission
                        </div>
                        <div class="hero-block-title who-we-are-title">
                            Create the most convenient way of finding handymans near you
                        </div>

                        <div class="hero-block-subtitle mt-l mb-xxs">
                            Who we are
                        </div>
                        <div class="hero-block-desc">
                            We are an online service dedicated to providing the most fastest and convenient way of searching for information
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
    import '../assets/css/pages/who-we-are.css';

    export default {
        components: {
            Header,
            Footer,
        }
    }
</script>