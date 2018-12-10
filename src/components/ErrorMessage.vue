<template>
  <div class="alert alert-danger">{{ error }}</div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: ['error'],
};
</script>

<style scoped>

</style>
