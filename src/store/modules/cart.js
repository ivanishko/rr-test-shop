export default {
  namespaced: true,
  state: {
    products: []

  },
  mutations: {
    add(state, product) {
      if (state.products.indexOf(product) === -1) {
        state.products.push(
          product
        );
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
    add(store, product) {
      store.commit('add', product);
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

