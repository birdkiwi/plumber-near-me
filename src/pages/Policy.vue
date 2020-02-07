<template>
    <div class="app-route">
        <Header/>
        <main class="main-main main-main-policy">
            <div class="main-wrapper">
                <div class="static-page">
                    <h1 class="static-page-title">
                        Privacy policy
                    </h1>
                    <h2>About Us</h2>
                    <p>Fixonair (LAI, we, us) is committed to protecting your privacy. This Privacy Policy tells you how
                        we collect, use, store, transfer and disclose your personal information. By using this site (the
                        Site) you agree to your personal information being processed in accordance with this Privacy
                        Policy, as amended from time to time. You should read this Privacy Policy in conjunction with
                        our <router-link to="/terms">Terms of Use</router-link>.</p>
                    <h2>What personal information do we collect?</h2>
                    <p>We may collect the following personal information about you when you access our Site, including
                        during your application for credit with LAI:</p>
                    <ul>
                        <li>name and contact information</li>
                        <li>financial information</li>
                        <li>Personal information</li>
                    </ul>
                    <p>We may also obtain personal information (including credit information) from credit bureaus or
                        other lenders, or from pre-authorized debit forms, loan agreements or credit life and disability
                        insurance applications or policies issued for you, whether at the time of your initial
                        application or from time to time on an ongoing basis.</p>
                    <h2>Non-personal identification information we collect</h2>
                    <p>We may collect non-personal information about you when you interact with our Site, including
                        computer and technical information about your means of connection to our Site. Non-personal
                        identification information may include the browser name, operating system, Internet service
                        provider and other similar information. We may use this information to improve our Site and
                        provide services such as technical support. We may also provide aggregate statistics about our
                        customers, sales, traffic patterns, and related Site information to reputable third parties, but
                        this data will not include personally identifiable information related to specific
                        individuals.</p>
                    <p>How we may use your personal information</p>
                    <p>We may collect and use your personal information either internally in connection with our
                        business or to provide services to you, or through carefully vetted third party service
                        providers, for the following purposes:</p>
                    <ol>
                        <li>confirmation of your identity;</li>
                        <li>the initial and ongoing credit assessment of your credit worthiness, employment, and
                            application information;</li>
                        <li>to meet the legal and regulatory requirements applicable to us, our service providers and in
                            connection with any loans provided to you;</li>
                        <li>creation of a loan, credit life and disability insurance coverage, or electronic
                            pre-authorized debits of your bank account for loan payments;</li>
                        <li>administration of your loan(s) and collection of payments from you before or after a
                            default;</li>
                        <li>marketing of our services to you, as well as those of our affiliates and third parties;
                            and</li>
                        <li>statistical analysis for our business plans and to raise capital or loans for our business,
                            including sales of portfolios of loans to third parties.</li>
                    </ol>
                    <h2>Anti-spam</h2>
                    <p>Where applicable, we will seek your express consent to send you information, including by way of
                        commercial electronic messages. This consent is sought by Fixonair at 4773 Yonge St, North
                        York, ON M2N 5M5 You can unsubscribe at any time by following the instructions in the commercial
                        electronic message, or by contacting us at {{ phone }}.</p>
                    <p>Please be aware that, even if you have opted out of receiving marketing communications from us,
                        we may still contact you for other purposes. For example, we may contact you to provide other
                        newsletters or other communications you have consented to receive, regarding your loan, or if
                        you contact us with an inquiry.</p>
                    <h2>Transfers and disclosures of personal information</h2>
                    <p>We will transfer or disclose your personal information in limited circumstances, including the
                        financial institution processing your pre-authorized debt payments, the insurance company
                        providing your credit life and accidental disability policy to us, credit reporting agencies,
                        third parties to whom you direct any loan to be paid, our lenders and other service providers
                        that assist us to provide and administer loans, our affiliated companies and its lenders, and to
                        any third parties that may purchase your loan from us. We may also disclose your personal
                        information with your consent, when required or permitted to by law, or in the event of a
                        corporate amalgamation, reorganization, change of control or sale.</p>
                    <h2>Security and retention</h2>
                    <p>We protect the personal information within our control with appropriate organizational,
                        technological and physical safeguards. We understand that some of the personal information we
                        hold may be sensitive information, including financial and credit information, and employ
                        appropriately robust safeguards. We store personal information in electronic and physical files
                        that are secure, and our security measures include secure on- and off-site storage, restricted
                        access to records and data processing equipment, password protocols, and encryption and security
                        software.</p>
                    <p>The personal information that we hold is only retained for as long as is necessary for the
                        purpose for which it was collected. When we no longer are required to retain the information, we
                        will destroy, erase, or de-personalize the information. Legal requirements, however, may require
                        us to retain some or all of the personal information we hold for a period of time that is longer
                        than that for which we might otherwise hold.</p>
                    <p>Your personal information may be stored, processed or otherwise used by us, our affiliates or our
                        service providers, both inside and outside of Canada. As a result, that country's courts,
                        governments or law enforcement agencies could obtain disclosure of your information in
                        accordance with that country's laws.</p>
                    <h2>Cookies</h2>
                    <p>We use cookies and pixel tags to track users of our Site. Cookies are pieces of information
                        stored on a user's computer by a website so preferences are remembered on future requests. Pixel
                        tags (also known as Web Bugs, Web Beacons, Clear Gifts, Invisible Gifts, and Tracker Gifts) are
                        signals sent from certain websites or e-mail used to pass certain information to our servers to
                        personalize our web sites and to track your usage. We do not save password or credit card number
                        information on cookies or through the use of pixel tags without your permission. Rather, cookies
                        and pixel tags are used to optimize the performance and functionality of the Site, and to
                        personalize the Site for you and present you with content and offers specific to your
                        interests.</p>
                    <p>If you are uncomfortable with the idea of your information being stored in cookies, we recommend
                        disabling cookie support in your browser. However, please note that this may limit the Site’s
                        performance functionality.</p>
                    <h2>Your rights</h2>
                    <p>If you wish to see your file or make corrections to it, write to the Privacy Officer at our
                        offices at Fixonair, 4773 Yonge St, North York, ON M2N 5M5</p>
                </div>
            </div>
        </main>
        <Footer/>
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