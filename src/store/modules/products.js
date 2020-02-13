import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import {error} from "vue-resource/src/util";

Vue.use(Vuex);


export default {
  namespaced: true,

  state: {
    items: {}
  },

  mutations: {
    'SET_STORE'(state, products) {
      state.items = products;
    },

    },
  actions: {
    INIT_STORE: ({commit}) => {
      axios.get('items.json')
        .then(response => {
          commit('SET_STORE', response.data.items)
        })
        .catch(error => console.log(error));
    },


  },

  getters: {
    items: state => state.items

  }
}
