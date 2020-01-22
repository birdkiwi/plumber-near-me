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
            </div>

            <div>
                <a href="#" @click.prevent="$parent.openCallback(person)" class="person-dialog-modal-callbackbtn">
                    <img src="../assets/images/icon-phone-rings.svg" class="person-dialog-modal-callbackbtn-icon" alt="" width="32" height="32">
                    <div class="person-dialog-modal-callbackbtn-content">
                        <div class="person-dialog-modal-callbackbtn-title">
                            Leave a number
                        </div>
                        and we will call you back in 30 seconds!
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import '../assets/css/components/dialog.css';
    import StarRating from 'vue-star-rating';

    export default {
        data() {
            return {
                isEvoked: false,
                typing: true,
                typingTimeout: 5000
            }
        },
        props: ['person'],
        components: {
            StarRating
        },
        methods: {
            closeDialog() {
                this.$parent.closeDialog();
            }
        },
        mounted() {
            const evokedPersons = this.$parent.$localStorage.get('evokedPersons', []);
            this.isEvoked = evokedPersons.indexOf(this.person.id) > -1;

            if (!this.isEvoked) {
                setTimeout(() => {
                    this.typing = false;
                    let evokedPersons = this.$parent.$localStorage.get('evokedPersons', []);
                    evokedPersons.push(this.person.id);
                    this.$parent.$localStorage.set('evokedPersons', evokedPersons);
                }, this.typingTimeout);
            }
        }
    }
</script>