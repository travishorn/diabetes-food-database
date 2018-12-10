<template>
  <form @submit.prevent="search">
    <input type="text" v-model="q" placeholder="Search for a food or ingredient" autofocus>
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
  input[type=text] {
    width: 100%;
    padding: 0.25rem 0.5rem;
  }
</style>
