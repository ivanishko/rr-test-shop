import Vue from 'vue'
import App from './App.vue'
import {router} from './assets/router.js'
import {store} from './store/';
import VueResource from 'vue-resource'

Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
