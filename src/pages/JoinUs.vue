<template>
    <div class="app-route">
        <Header />
        <main class="main-main">
            <div class="main-wrapper">
                <h1 class="join-us-page-title">
                    Are you looking for new clients?
                </h1>

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
    import Footer from '../components/Footer.vue';
    import ContactForm from '../components/ContactForm.vue';
    import '../assets/css/pages/join-us.css';

    export default {
        components: {
            Header,
            Footer,
            ContactForm
        }
    }
</script>