// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueLazyload from 'vue-lazyload';
import App from './App';
import router from './router';
import { store } from './store/index';

import InputBase from './components/InputBase.vue';
import ModalInfo from './components/ui/ModalInfo.vue';
import CustomSelector from './components/ui/CustomSelector.vue';

import UTIL from './util/index';
import VAPI from './http_common';

Vue.use(Vuex);
Vue.use(VueLazyload);

Vue.component('input-base', InputBase);
Vue.component('modal-info', ModalInfo);
Vue.component('custom-selector', CustomSelector);

Vue.extend();

// Filters
Vue.filter('money', UTIL.toMoney);
Vue.prototype.$http = VAPI;

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
