<template>
  <div>
    <div v-if="results.length > 0">
      <FoodItem class="my-3" v-for="food in results" :key="food.name" :food="food" />
    </div>
    <div class="alert alert-light" v-else>No results found.</div>
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
