<template>
  <form @submit.prevent="search">
    <div class="form-group">
      <label for="search" class="bmd-label-floating">Search for a food or ingredient</label>
      <input id="search" class="form-control" type="text" v-model="q">
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
  mounted() {
    /*
     * The search input should automatically be focused when loading the app. However, the floating
     * labels on Bootstrap Material Design don't work with autofocus. We must wait a short timeout
     * before focusing on the input
     */
    setTimeout(() => {
      document.getElementById('search').focus();
    }, 100);
  }
};
</script>

<style scoped>

</style>
