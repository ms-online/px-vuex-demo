<template>
  <div id="app">{{ count }}</div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style></style>
