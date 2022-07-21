<script setup>
import SearchBar from "../components/SearchBar.vue";
</script>

<template>
  <div
    class="flex flex-col grow justify-center gap-3 max-w-xl mx-auto w-full -mt-20"
  >
    <img
      class="px-20"
      alt="Diabetes Food Database"
      src="../assets/Diabetes Food Database Wordmark.svg"
    />
    <div class="mx-5">
      <SearchBar />
    </div>
  </div>
</template>
