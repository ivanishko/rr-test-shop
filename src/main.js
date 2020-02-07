import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'

import {router} from './assets/router.js'

Vue.use(VueAxios)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
