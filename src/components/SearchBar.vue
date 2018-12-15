<template>
  <form @submit.prevent="search">
    <div class="form-group">
      <input id="search" class="form-control" type="text" v-model="q"
             placeholder="Search for a food" autofocus>
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
  }
};
</script>

<style scoped>
  .bmd-label-static {
    color: #555;
  }

  .form-control,
  ::placeholder {
    font-size: 3rem;
  }
</style>
