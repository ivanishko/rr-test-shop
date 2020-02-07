import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cart: [],
    products: {},
    cnt: 0
  },

   mutations: {
    'SET_STORE' (state, products) {
      state.products = products;
    },
     addToCart(state){
        state.cnt++;
     }
  },
  actions: {
    initStore: ({commit}) => {
      axios.get('items.json')
        .then(response => {
          console.log(response.data.items);
          commit('SET_STORE', response.data.items)
    });
    }
  },

  getters: {
    products: state => state.products,
    cart: state => state.cart
  },

});
