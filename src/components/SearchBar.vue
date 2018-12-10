<template>
  <form @submit.prevent="search">
    <label for="search" aria-hidden="false">Search for a food or ingredient</label>
    <input id="search" type="text" v-model="q" placeholder="Search for a food or ingredient" autofocus>
  </form>
</template>

<script>
export default {
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
};
</script>

<style scoped>
  label {
    display: none;
  }

  input[type=text] {
    width: 100%;
    padding: 0.25rem 0.5rem;
  }
</style>
