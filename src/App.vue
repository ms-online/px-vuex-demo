<template>
  <div id="app">
    <!-- <p>{{ count }}</p>
    <p>{{ completedTodos }}</p>
    <p>{{ completedTodosCount }}</p>
    <p>{{ getTodoById(3) }}</p> -->
    <!-- <button @click="decrementCount({ count: 3 })">-</button> -->
    <button @click="decrementCountAsync({ count: 3 })">-</button>
    <span> {{ count }} </span>
    <!-- <button @click="incrementCount">+</button> -->
    <button @click="incrementCountAsync">+</button>
    <br />
    <br />
    <p>{{ completedTodos }}</p>
    <!-- fetchTodos -->
    <button @click="fetchTodos">拉取数据</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  name: 'App',
  components: {},
  // Getter & mapGetters
  computed: mapGetters([
    'count',
    'completedTodos',
    'completedTodosCount',
    'getTodoById',
  ]),
  // computed: {
  //   count() {
  //     return this.$store.getters.count;
  //   },
  //   completedTodos() {
  //     return this.$store.getters.completedTodos;
  //   },
  //   completedTodosCount() {
  //     return this.$store.getters.completedTodosCount;
  //   },
  //   getTodoById() {
  //     return this.$store.getters.getTodoById;
  //   },
  // },
  // state & mapState方法
  // computed: mapState(['count', 'todos']),
  // computed: mapState({
  //   count: (state) => state.count,
  //   todos: (state) => state.todos,
  // }),
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  //   todos() {
  //     return this.$store.state.todos;
  //   },
  // },

  // mutaion&mapMutations
  // methods: mapMutations(['incrementCount', 'decrementCount']),
  // methods: {
  //   decrementCount(payload) {
  //     // console.log(1);
  //     this.$store.commit('decrementCount', payload);
  //   },
  //   incrementCount() {
  //     // console.log(0);
  //     this.$store.commit('incrementCount');
  //   },
  // },

  // action & mapActions
  methods: mapActions([
    'incrementCountAsync',
    'decrementCountAsync',
    'fetchTodos',
  ]),
  // methods: {
  //   increment() {
  //     this.$store.dispatch('incrementCountAsync');
  //   },
  //   decrement(n) {
  //     this.$store.dispatch('decrementCountAsync', n);
  //   },

  //   fetchTodos() {
  //     this.$store.dispatch('fetchTodos');
  //   },
  // },
};
</script>

<style></style>
