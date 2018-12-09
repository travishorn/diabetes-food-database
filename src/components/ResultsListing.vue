<template>
  <div>
    <div v-if="results.length > 0">
      <FoodItem v-for="food in results" :key="food.name" :food="food" />
    </div>
    <p v-else>No results found.</p>
  </div>
</template>

<script>
import FoodItem from './FoodItem.vue';

export default {
  name: 'ResultsListing',
  props: ['results'],
  components: {
    FoodItem,
  },
};
</script>

<style scoped>

</style>
