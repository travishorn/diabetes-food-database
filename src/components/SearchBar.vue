<template>
  <form @submit.prevent="search">
    <div class="form-group">
      <input 
        v-model="foodName"
        id="search" 
        class="form-control" 
        placeholder="Search for a food" autofocus
        type="text" 
      >
    </div>
  </form>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      foodName: '',
    };
  },
  methods: {
    search() {
      this.$emit('search', this.foodName);
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
    font-size: 1.3rem;
    padding: 1em 5px;
  }
</style>
