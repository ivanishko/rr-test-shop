import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default {
  namespaced: true,

  state: {
    items: []
  },

  mutations: {
    loadItems(state, data){
      state.items = data.items;
    }
  },
  actions: {
    loadItems(store){
      Vue.http.get('items.json')
        .then(response => response.json())
        .then(data => {
          store.commit('loadItems', data);
        });
    }
  },

  getters: {
    items: state => state.items

  }
}
