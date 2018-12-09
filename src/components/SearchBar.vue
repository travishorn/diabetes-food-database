<template>
  <form @submit.prevent="search">
    <input type="text" v-model="q" autofocus>
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
      this.$emit('search', this.q);
    },
  },
}
</script>

<style scoped>
  input[type=text] {
    width: 100%;
  }
</style>
