import Vue from "vue";
import Vuex from 'vuex';
import products from './modules/products';
import cart from './modules/cart';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    products,
    cart
  }

});
