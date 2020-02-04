<template>
    <form action="#" @submit.prevent="submit" class="contact-form" :class="className">
        <div class="contact-form-group">
            <input
                    type="text"
                    name="first-name"
                    v-model="firstName.value"
                    placeholder="First name"
                    class="contact-form-input"
                    @input="inputChange(firstName)"
                    :class="firstName.error ? 'contact-form-input-error' : ''"
                    required
            >
        </div>
        <div class="contact-form-group">
            <input
                    type="text"
                    name="last-name"
                    v-model="lastName.value"
                    placeholder="Last name"
                    class="contact-form-input"
                    @input="inputChange(lastName)"
                    :class="lastName.error ? 'contact-form-input-error' : ''"
                    required
            >
        </div>
        <div class="contact-form-group">
            <input
                    type="text"
                    name="address"
                    v-model="address.value"
                    placeholder="Your address"
                    class="contact-form-input"
            >
        </div>
        <div class="contact-form-group">
            <input
                    type="phone"
                    name="phone"
                    v-model="phone.value"
                    placeholder="Your phone"
                    v-mask="'+1 (###) ###-####'"
                    class="contact-form-input"
                    @input="inputChange(phone)"
                    :class="phone.error ? 'contact-form-input-error' : ''"
                    required
            >
        </div>
        <button type="submit" @click.prevent="btnSubmit" class="contact-form-submit" :disabled="isSubmiting">Submit</button>
    </form>
</template>

<script>
    import { VueMaskDirective } from 'v-mask';
    import '../assets/css/blocks/contact-form.css';

    export default {
        data() {
            return {
                firstName: {
                    value: '',
                    error: false,
                },
                lastName: {
                    value: '',
                    error: false,
                },
                address: {
                    value: ''
                },
                phone: {
                    value: '',
                    error: false,
                },
                isSubmiting: false
            }
        },
        props: ['className'],
        directives: {
            mask: VueMaskDirective
        },
        methods: {
            btnSubmit() {
                if (this.validate()) {
                    this.isSubmiting = true;

                    setTimeout(() => {
                        this.isSubmiting = false;
                        alert('submit event here!');
                    }, 2000);
                }
            },
            trackSubmit() {
                this.$gtm.trackEvent({
                    event: 'ContactFormSubmit',
                    category: 'Form',
                    action: 'click'
                });
            },
            submit() {
                if (this.validate()) {
                    this.isSubmiting = true;
                    this.trackSubmit();

                    setTimeout(() => {
                        this.isSubmiting = false;
                        alert('submit event here!');
                    }, 2000);
                }
            },
            validate() {
                let valid = true;

                [this.firstName, this.lastName].forEach((input) => {
                    if (!input.value) {
                        input.error = true;
                        valid = false;
                    }
                });

                if (this.phone.value.length < 17) {
                    this.phone.error = true;
                    valid = false;
                } else {
                    this.phone.error = false;
                }

                return valid;
            },
            inputChange(input) {
                if (input.error) {
                    input.error = false;
                }
            }
        }
    }
</script>