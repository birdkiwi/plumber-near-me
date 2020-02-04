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
import VueGtm from 'vue-gtm';
import router from './router';
import vClickOutside from 'v-click-outside'

Vue.use(VueRouter);
Vue.use(VueLocalStorage);
Vue.use(vClickOutside);

import './assets/css/style.css';
import 'normalize.css';

Vue.use(VueGtm, {
  id: config.gtagID,
  vueRouter: router,
  debug: process.env.NODE_ENV !== 'production'
});

export default {
  name: 'app',
  router
}
</script>
