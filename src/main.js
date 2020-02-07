import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import {router} from './assets/router.js'
import {store} from './store/';

Vue.use(VueAxios)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
