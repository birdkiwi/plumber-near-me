<template>
    <div class="callback-modal-wrapper">
        <div class="callback-modal">
            <button @click.prevent="closeCallback" class="callback-modal-close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 14.40625 13 L 13 14.40625 L 23.625 25 L 13 35.59375 L 14.40625 37 L 25.0625 26.40625 L 35.6875 37 L 37.09375 35.59375 L 26.46875 25 L 37.09375 14.40625 L 35.6875 13 L 25.0625 23.59375 Z"></path></svg>
            </button>

            <div class="callback-modal-header">
                <div class="callback-modal-header-avatar">
                    <img :src="person.avatar" :alt="person.firstName + ' ' + person.lastName" class="callback-modal-header-avatar-img">
                </div>
                <div class="callback-modal-header-content">
                    <div class="callback-modal-header-name">
                        {{ person.firstName }} {{ person.lastName }}
                    </div>
                    <div class="callback-modal-header-rating">
                        <star-rating
                                :rating="person.rating"
                                :read-only="true"
                                :increment="0.01"
                                :active-color="'#e7711c'"
                                :text-class="'callback-modal-header-rating-stars'"
                        ></star-rating>
                    </div>
                </div>
            </div>

            <div class="callback-modal-body">
                <div class="callback-modal-desc">
                    <div class="callback-modal-desc-title">
                        Leave a number
                    </div>

                    and we will call you back in 30 seconds!
                </div>

                <form action="#" class="callback-modal-form" @submit.prevent="submit">
                    <input
                            type="tel"
                            name="phone"
                            placeholder="+1 (000) 000-0000"
                            class="callback-modal-form-input"
                            :class="phoneError ? 'callback-modal-form-input-error' : ''"
                            v-model="phone"
                            v-mask="'+1 (###) ###-####'"
                            @input="phoneError = false"
                            @blur="phoneError = false"
                            required
                    >
                    <p v-if="phoneError" style="text-align: center; color: red">
                        Please, fill correct phone number
                    </p>

                    <button type="submit" class="callback-modal-form-submit">
                        Send
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import '../assets/css/components/callback.css';
    import StarRating from "vue-star-rating";
    import { VueMaskDirective } from 'v-mask';

    export default {
        data() {
            return {
                phone: '',
                phoneError: false
            }
        },
        props: ['person'],
        components: {
            StarRating
        },
        directives: {
            mask: VueMaskDirective
        },
        methods: {
            closeCallback() {
                this.$parent.closeCallback();
            },
            validate() {
                if (this.phone.length < 17) {
                    this.phoneError = true;
                    return false;
                } else {
                    this.phoneError = false;
                    return true
                }
            },
            submit() {
                if (this.validate()) {
                    alert('submit event here!');
                }
            },
        }
    }
</script>