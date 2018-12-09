<template>
  <p>{{ error }}</p>
</template>

<script>
module.exports = {
  name: 'ErrorMessage',
  props: ['error'],
}
</script>

<style scoped>
  p {
    color: red;
  }
</style>
