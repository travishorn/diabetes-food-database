<template>
  <form @submit.prevent="search">
    <div class="form-group">
      <label for="search" class="bmd-label-floating">Search for a food or ingredient</label>
      <input id="search" class="form-control" type="text" v-model="q" autofocus>
    </div>
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

</style>
