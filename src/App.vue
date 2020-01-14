<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import config from './config';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueLocalStorage from 'vue-localstorage';
import VueAnalytics from 'vue-analytics';
import router from './router';
import vClickOutside from 'v-click-outside'

Vue.use(VueRouter);
Vue.use(VueLocalStorage);
Vue.use(vClickOutside);

import './assets/css/style.css';
import 'normalize.css';

Vue.use(VueAnalytics, {
  id: config.googleAnalyticsId,
  router,
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  }
});

/*
this.$ga.event({
  eventCategory: 'category',
  eventAction: 'action',
  eventLabel: 'label',
  eventValue: 123
})

this.$ga.page('/')
*/

export default {
  name: 'app',
  router
}
</script>
