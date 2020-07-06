import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 2,
    todos: [
      {
        id: 1,
        title: 'todo item 1',
        complated: false,
      },
      {
        id: 2,
        title: 'todo item 2',
        complated: false,
      },
      {
        id: 3,
        title: 'todo item 3',
        complated: false,
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
