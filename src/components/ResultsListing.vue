<template>
  <div>
    <div v-if="results.length > 0">
      <FoodItem 
        v-for="food in results" 
        :food="food" 
        :key="food.name" 
        class="my-3" 
      />
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
