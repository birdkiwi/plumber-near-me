<template>
    <div class="app-route">
        <Header/>
        <main class="main-main main-main-terms">
            <div class="main-wrapper">
                <div class="static-page">
                    <h1 class="static-page-title">
                        Terms and conditions
                    </h1>
                    <p>The Fixonair (we, us) website (Site) is offered to you conditioned on your acceptance without
                        modification of the terms, conditions, and notices contained herein, as amended from time to
                        time. Your use of the Site constitutes your agreement to all such terms, conditions, and
                        notices. Site may only be accessed by those who are 13 years of age or older.</p>
                    <h2>No unlawful or prohibited use</h2>
                    <p>As a condition of your use of the Site, you warrant to us that you will not use the Site for
                        any purpose that is unlawful or prohibited by these Terms of Use. You may not use the Site
                        in any manner which could damage, disable, overburden, or impair the Site or interfere with
                        any other party's use and enjoyment of the Site. You may not obtain or attempt to obtain any
                        materials or information through any means not intentionally made available or provided for
                        through the Site.</p>
                    <p>Subject to your compliance with these Terms of Use, we and our content providers grant you a
                        limited, non-exclusive, non-transferable, non-assignable license to access and make personal
                        and non-commercial use of the website. This license does not include any resale or
                        commercial use of the Site, or its contents; any downloading or copying of account
                        information for the benefit of another party; or any use of data mining, robots, or similar
                        data gathering and extraction tools. All rights not expressly granted to you in these Terms
                        of Use are reserved and retained by us and our licensors, affiliates, suppliers, publishers,
                        rights holders, or other content providers. No portion of the Site may be reproduced,
                        duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose
                        without our express written consent. You may not frame or utilize framing techniques to
                        enclose any of our trademarks, logos, or other proprietary information (including images,
                        text, page layout, or form) without express written consent. You may not use any meta tags
                        or any other "hidden text" utilizing our name or trademarks without our express written
                        consent. You may not misuse the Site. You may use the Site only as permitted by law. The
                        licenses we grant herein will terminate if you do not comply with these Terms of Use.</p>
                    <h2>Termination/access restrictions</h2>
                    <p>We reserve the right, in our sole discretion, to terminate your access to the Site or any
                        portion thereof, and any related services available on the Site at any time, without
                        notice.</p>
                    <h2>Privacy</h2>
                    <p>Any personal information that we collect on the Site will be handled in accordance with our
                        <router-link to="/policy">Privacy Policy</router-link>.</p>
                    <h2>Copyright and trademark notices</h2>
                    <p>All contents of the Site are: Copyright 2020 by Fixonair and/or our affiliates. The names of
                        actual companies and products mentioned herein may be the trademarks of their respective
                        owners. Any rights not expressly granted herein are reserved.</p>
                    <h2>Liability disclaimer</h2>
                    <p>THE INFORMATION, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE
                        INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION
                        HEREIN. WE AND/OR OUR AFFILIATES MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY
                        TIME.</p>
                    <p>WE AND/OR OUR AFFILIATES MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY,
                        AVAILABILITY, TIMELINESS, CURRENCY AND ACCURACY OF THE INFORMATION CONTAINED ON THE SITE FOR
                        ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION AND THE
                        PRODUCTS AND SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. WE AND
                        OUR AFFILIATES HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS
                        INFORMATION, PRODUCTS, SERVICES, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF TITLE,
                        NON-INFRINGEMENT, AND OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE. WE RESERVE THE
                        RIGHT TO MODIFY AND/OR REMOVE SUCH INFORMATION AT OUR SOLE DISCRETION WITH NO FURTHER
                        NOTICE.</p>
                    <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE OR OUR AFFILIATES BE
                        LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY
                        DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS,
                        ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE
                        DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO
                        PROVIDE SERVICES, OR OTHERWISE ARISING OUT OF THE USE OF THE SITE, WHETHER BASED ON
                        CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF WE OR ANY OF OUR
                        AFFILIATES HAVE BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME JURISDICTIONS DO
                        NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES,
                        THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE
                        SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE
                        USING THE SITE.</p>
                    <h2>Links to third party sites</h2>
                    <p>The Site may contain links to other websites ("Linked Sites"). The Linked Sites are not under
                        the control of the Site and we are not responsible for the contents of any Linked Site,
                        including without limitation any link contained in a Linked Site, or any changes or updates
                        to a Linked Site. We are not responsible for webcasting or any other form of transmission
                        received from any Linked Site. We are providing these links to you only as a convenience,
                        and the inclusion of any link does not imply our endorsement or any association with its
                        operators.</p>
                    <h2>Idea submission statement</h2>
                    <p>Any ideas, proposals, and/or other information submitted or collected on the Site (excluding
                        information provided pursuant to an application for credit) shall be considered
                        non-confidential. By submitting information to the Site, or directly to us, you agree that
                        we shall not be under any obligation of confidentiality or non-use, express or implied, with
                        respect to any submissions, and we may disclose or use any submission for any purpose
                        whatsoever, at our sole discretion, with no obligation, express or implied, to compensate or
                        work with the person or entity that supplied the information, ideas and/or proposal in any
                        manner.</p>
                    <h2>Service contact</h2>
                    <p><a :href="'mailto:' + email">{{ email }}</a></p>
                </div>
            </div>
        </main>
        <Footer/>
    </div>
</template>
<script>
    import config from '../config';
    import '../assets/css/pages/static.css';
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';

    export default {
        components: {
            Header,
            Footer,
        },
        data() {
            return {
                email: config.contactEmail
            }
        }
    }
</script>