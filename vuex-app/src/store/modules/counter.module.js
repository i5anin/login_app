export default {
  namespaced: true,
  state() {
    return {
      counter: 1,
    };
  },
  mutations: {
    plus(state) {
      state.counter++;
    },
    minus(state) {
      state.counter--;
    },
  },
};