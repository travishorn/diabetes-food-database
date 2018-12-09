<template>
  <div class="container">
    <SiteHeader />
    <SearchBar />
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';
import SearchBar from './components/SearchBar.vue';

export default {
  name: 'app',
  components: {
    SiteHeader,
    SearchBar,
  },
}
</script>

<style>
  .container {
    max-width: 600px;
    margin: 0 auto;
  }
</style>
