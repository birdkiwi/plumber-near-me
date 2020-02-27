<template>
    <footer class="main-footer">
        <div class="main-footer-wrapper">
            <div class="main-footer-disclaimer">
                <div class="main-footer-disclaimer-logo">
                    <img src="../assets/images/logo.svg" alt="" class="main-footer-disclaimer-logo-img">

                    <div class="main-footer-disclaimer-address">
                        4773 Yonge St. <br>
                        North York <br>
                        ON M2N 0G2
                    </div>
                </div>
                <div class="main-footer-disclaimer-text">
                    *Disclaimer: Fixonair (We). If you are searching for a plumber, your individual searching results may vary. Results will vary based on individual position on the map. We do not guarantee availability of a plumber and the quality of their services. Fixonair is a content distributor and Fixonair is not responsible for lost profits, revenues or data, financial losses or indirect, special, consequential, exemplary or punitive damages.
                </div>
            </div>

            <div class="main-footer-copyright">
                © Fixonair.ca, 2020

                <div class="main-footer-copyright-contacts">
                    <p>
                        <a :href="'mailto:' + email">{{ email }}</a>
                    </p>
                    <p>
                        <router-link to="/terms">Terms and Conditions</router-link> | <router-link to="/policy">Privacy Policy</router-link>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import config from '../config';

    export default {
        data() {
            return {
                email: config.contactEmail
            }
        }
    }
</script>