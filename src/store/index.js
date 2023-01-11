import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    clean(state) {
      state.cart = [];
    },
    removeProduct(state, id) {
      const Id = state.cart.findIndex((e) => e.id === id);
      state.cart.splice(Id, 1);
    },
  },
  getters: {
    total(state) {
      return state.cart.reduce((total, item) => (total += item.price), 0);
    },
  },
});
