import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 5,
    todos: [
      {
        id: 1,
        title: 'todo item 1',
        completed: false,
      },
      {
        id: 2,
        title: 'todo item 2',
        completed: true,
      },
      {
        id: 3,
        title: 'todo item 3',
        completed: true,
      },
    ],
  },
  getters: {
    count: (state) => {
      return state.count;
    },
    completedTodos: (state) => {
      return state.todos.filter((todo) => todo.completed);
    },
    completedTodosCount: (state, getters) => {
      return getters.completedTodos.length;
    },
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id);
    },
  },
  mutations: {
    incrementCount(state) {
      state.count++;
    },
    decrementCount(state, payload) {
      state.count -= payload.count;
    },
    setTodos: (state, todos) => {
      state.todos = todos;
    },
  },
  actions: {
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

    // 数据请求
    async fetchTodos({ commit }) {
      const response = await axios.get(
        'http://jsonplaceholder.typicode.com/todos'
      );
      console.log(response);
      commit('setTodos', response.data);
    },
  },
  modules: {},
});
