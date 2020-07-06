const state = {
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
};

const getters = {
  completedTodos: (state) => {
    return state.todos.filter((todo) => todo.completed);
  },
  completedTodosCount: (state, getters) => {
    return getters.completedTodos.length;
  },
  getTodoById: (state) => (id) => {
    return state.todos.find((todo) => todo.id === id);
  },
};

const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
  },
};

const actions = {
  // 数据请求
  async fetchTodos({ commit }) {
    const response = await axios.get(
      'http://jsonplaceholder.typicode.com/todos'
    );
    console.log(response);
    commit('setTodos', response.data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
