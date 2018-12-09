<template>
  <div>
    <p v-if="results.length > 0">{{ results }}</p>
    <p v-else>No results found.</p>
  </div>
</template>

<script>
module.exports = {
  name: 'ResultsListing',
  props: ['results'],
}
</script>

<style scoped>

</style>
