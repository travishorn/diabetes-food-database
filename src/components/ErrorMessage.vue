<template>
  <p>{{ error }}</p>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: ['error'],
};
</script>

<style scoped>
  p {
    color: red;
  }
</style>
