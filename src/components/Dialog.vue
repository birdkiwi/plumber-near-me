<template>
    <div class="person-dialog-modal">
        <button @click.prevent="closeDialog" class="person-dialog-modal-close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 14.40625 13 L 13 14.40625 L 23.625 25 L 13 35.59375 L 14.40625 37 L 25.0625 26.40625 L 35.6875 37 L 37.09375 35.59375 L 26.46875 25 L 37.09375 14.40625 L 35.6875 13 L 25.0625 23.59375 Z"></path></svg>
        </button>
        <div class="person-dialog-modal-header">
            <div class="person-dialog-modal-header-avatar">
                <img :src="person.avatar" :alt="person.firstName + ' ' + person.lastName" class="person-dialog-modal-header-avatar-img">
            </div>
            <div class="person-dialog-modal-header-content">
                <div class="person-dialog-modal-header-name">
                    {{ person.firstName }} {{ person.lastName }}
                </div>
                <div class="person-dialog-modal-header-rating">
                    <star-rating
                            :rating="person.rating"
                            :read-only="true"
                            :increment="0.01"
                            :active-color="'#e7711c'"
                            :text-class="'person-dialog-modal-header-rating-stars'"
                    ></star-rating>
                </div>
            </div>
        </div>
        <div class="person-dialog-modal-body">
            <div class="person-dialog-modal-chat">
                <div class="person-dialog-modal-chat-message">
                    <div class="person-dialog-modal-chat-person">
                        <div class="person-dialog-modal-chat-person-avatar">
                            <img src="../assets/images/icon-user.svg" alt="You" class="person-dialog-modal-chat-person-avatar-img" width="32" height="32">
                        </div>
                        <div class="person-dialog-modal-chat-person-message">
                            <div class="person-dialog-modal-chat-person-message-bubble">
                                Could you help me, please?
                            </div>
                        </div>
                    </div>
                </div>

                <div class="person-dialog-modal-chat-message">
                    <div class="person-dialog-modal-chat-person person-dialog-modal-chat-person-right">
                        <div class="person-dialog-modal-chat-person-avatar">
                            <img :src="person.avatar" alt="" class="person-dialog-modal-chat-person-avatar-img" width="32" height="32">
                        </div>
                        <div class="person-dialog-modal-chat-person-message">
                            <transition name="fade">
                                <div v-if="!isEvoked && typing" class="person-dialog-modal-chat-person-message-typing animated infinite flash slow">
                                    {{ person.firstName }} is typing message...
                                </div>
                                <div v-else class="person-dialog-modal-chat-person-message-bubble">
                                    Yes, would you like to send me your address and phone number? I will be at your home within 25 min.
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>

                <transition name="fade">
                    <form action="#" method="POST" @submit.prevent="submitForm" v-if="isEvoked" class="person-dialog-modal-chat-form">
                        <input
                                type="text"
                                class="person-dialog-modal-chat-form-input"
                                v-model="firstName.value"
                                name="firstName"
                                placeholder="First name"
                                required
                                @input="inputChange(firstName)"
                                :class="firstName.error ? 'person-dialog-modal-chat-form-input-error' : ''"
                        >
                        <input
                                type="text"
                                class="person-dialog-modal-chat-form-input"
                                v-model="lastName.value"
                                name="lastName"
                                placeholder="Last name"
                                required
                                @input="inputChange(lastName)"
                                :class="lastName.error ? 'person-dialog-modal-chat-form-input-error' : ''"
                        >
                        <input
                                type="text"
                                class="person-dialog-modal-chat-form-input"
                                v-model="address.value"
                                name="address"
                                placeholder="Address"
                                required
                                @input="inputChange(address)"
                                :class="address.error ? 'person-dialog-modal-chat-form-input-error' : ''"
                        >
                        <input
                                type="phone"
                                class="person-dialog-modal-chat-form-input"
                                name="phone"
                                v-model="phone.value"
                                placeholder="Your phone"
                                v-mask="'+1 (###) ###-####'"
                                @input="inputChange(phone)"
                                :class="phone.error ? 'person-dialog-modal-chat-form-input-error' : ''"
                                required
                        >
                        <button
                                type="submit"
                                @click.prevent="btnSubmit"
                                class="person-dialog-modal-chat-form-submit"
                                :disabled="isSubmiting"
                        >
                            Submit
                        </button>
                    </form>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import '../assets/css/components/dialog.css';
    import StarRating from 'vue-star-rating';
    import {VueMaskDirective} from "v-mask";

    export default {
        data() {
            return {
                isEvoked: false,
                typing: true,
                typingTimeout: 5000,
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
        directives: {
            mask: VueMaskDirective
        },
        props: ['person'],
        components: {
            StarRating
        },
        methods: {
            closeDialog() {
                this.$parent.closeDialog();
            },
            btnSubmit() {
                if (this.validate()) {
                    this.isSubmiting = true;

                    setTimeout(() => {
                        this.isSubmiting = false;
                        alert('submit event here!');
                    }, 2000);
                }
            },
            submit() {
                if (this.validate()) {
                    this.isSubmiting = true;

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
        },
        mounted() {
            const evokedPersons = this.$parent.$localStorage.get('evokedPersons', []);
            this.isEvoked = evokedPersons.indexOf(this.person.id) > -1;

            if (!this.isEvoked) {
                setTimeout(() => {
                    let evokedPersons = this.$parent.$localStorage.get('evokedPersons', []);
                    evokedPersons.push(this.person.id);
                    this.$parent.$localStorage.set('evokedPersons', evokedPersons);
                    this.isEvoked = true;
                }, this.typingTimeout);
            }
        }
    }
</script>