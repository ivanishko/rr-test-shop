export default {
  namespaced: true,
  state: {
    products: []

  },
  mutations: {
    add(state, id_product) {
      if (state.products.indexOf(id_product) === -1) {
        state.products.push(id_product);
      }
    },
    delete(state, id_product) {
      let pos = state.products.indexOf(id_product);
      if (pos !== -1) {
        state.products.splice(pos, 1);

      }
    }
  },
  actions: {
    add(store, id_product) {
      store.commit('add', id_product);
    },
    delete(store, id_product) {
      store.commit('delete', id_product);
    }
  },
  getters: {
    items: state => state.products,
    cnt: state => state.products.length
  }
}

