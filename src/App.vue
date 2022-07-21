<script setup>
import SiteFooter from "./components/SiteFooter.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <router-view />
    <SiteFooter class="mt-auto mb-5" />
  </div>
</template>
