<template>
    <div class="callback-modal-wrapper">
        <div class="callback-modal">
            <button @click.prevent="closeCallback" class="callback-modal-close">
                Close
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
    import { VueMaskDirective } from 'v-mask'

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