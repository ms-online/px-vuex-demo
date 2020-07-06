<template>
  <div id="app">
    <p>{{ count }}</p>
    <p>{{ todos }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  computed: {
    count() {
      return this.$store.state.count;
    },
    todos() {
      return this.$store.state.todos;
    },
  },
};
</script>

<style></style>
