export default {
  namespaced: true,
  state: {
    productsInCart: []

  },
  mutations: {
    add(state, product) {
      if (state.productsInCart.indexOf(product) === -1) {
        state.productsInCart.push(
          product
        );
      }
    },
    delete(state, id_product) {
      let pos = state.productsInCart.indexOf(id_product);
      if (pos !== -1) {
        state.productsInCart.splice(pos, 1);

      }
    },
    clear(state){
      state.productsInCart = [];
    }
  },
  actions: {
    add(store, product) {
      store.commit('add', product);
    },
    delete(store, id_product) {
      store.commit('delete', id_product);
    },
    clear(store){
      store.commit('clear');
    }

  },
  getters: {
    items: state => state.productsInCart,
    cnt: state => state.productsInCart.length,
    total: state => state.productsInCart.reduce((sum, current) => {return sum + parseInt(current.cost)}, 0)

      }
  }


