import axios from 'axios';

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
    initStore: ({commit}) => {
      axios.get('items.json')
        .then(response => {
          console.log(response.data.items);
          commit('SET_STORE', response.data.items)
        });
    },

  },

  getters: {
    items: state => state.items

  }
}
