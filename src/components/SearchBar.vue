<template>
  <form @submit.prevent="search">
    <input type="text" v-model="q">
  </form>
</template>

<script>
module.exports = {
  name: 'SearchBar',
  data() {
    return {
      q: '',
    };
  },
  methods: {
    search() {
      console.log(`Search for ${this.q}`);
    },
  },
}
</script>

<style scoped>
  input[type=text] {
    width: 100%;
  }
</style>
