<script setup>
import { useStore } from "../store.js";
import SearchBar from "../components/SearchBar.vue";
import FoodItem from "../components/FoodItem.vue";

const store = useStore();
</script>

<template>
  <div class="flex flex-col gap-5">
    <router-link to="/">
      <img
        class="px-28 max-w-md mx-auto mt-5"
        alt="Diabetes Food Database"
        src="../assets/diabetes-food-database-wordmark.svg"
      />
    </router-link>

    <SearchBar class="px-5" />

    <div
      class="bg-gray-50 md:bg-white p-5 flex flex-col gap-5"
      v-if="store.results.length > 0"
    >
      <FoodItem
        class="bg-white p-5 rounded-md shadow-sm md:shadow-none md:border-b md:border-gray-200"
        v-for="food in store.results"
        :key="food.name"
        :food="food"
      />
    </div>
  </div>
</template>
