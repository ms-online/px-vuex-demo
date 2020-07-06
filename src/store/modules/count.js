const state = {
  count: 5,
};

const getters = {
  count: (state) => {
    return state.count;
  },
};

const mutations = {
  incrementCount(state) {
    state.count++;
  },
  decrementCount(state, payload) {
    state.count -= payload.count;
  },
};

const actions = {
  incrementCountAsync(context) {
    setTimeout(() => {
      context.commit('incrementCount');
    }, 2000);
  },
  decrementCountAsync({ commit }, payload) {
    setTimeout(() => {
      commit('decrementCount', payload);
    }, 3000);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
