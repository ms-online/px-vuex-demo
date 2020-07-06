<template>
  <div id="app">
    <p>{{ count }}</p>
    <p>{{ todos }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'App',
  components: {},
  computed: mapState(['count', 'todos']),
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
};
</script>

<style></style>
