<template>
  <div class="container">
    <SiteHeader />
    <SearchBar @search="search" />
    <ErrorMessage :error="error" v-if="error" />
    <ResultsListing :results="results" v-if="resultsReady" />
  </div>
</template>

<script>
import axios from 'axios';
import SiteHeader from './components/SiteHeader.vue';
import SearchBar from './components/SearchBar.vue';
import ErrorMessage from './components/ErrorMessage.vue';
import ResultsListing from './components/ResultsListing.vue';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://dfdb.netlify.com/.netlify/functions' : 'http://localhost:9000';

export default {
  name: 'app',
  data() {
    return {
      error: null,
      resultsReady: false,
      results: [],
    };
  },
  methods: {
    search(q) {
      this.resultsReady = false;
      this.error = null;

      axios.get(`${baseUrl}/search?q=${q}`)
        .then((response) => {
          this.results = response.data.results;
          this.resultsReady = true;
        })
        .catch(() => {
          this.error = 'Something went wrong. Please try again later.';
        });
    },
  },
  components: {
    SiteHeader,
    SearchBar,
    ErrorMessage,
    ResultsListing,
  },
}
</script>

<style>
  .container {
    max-width: 600px;
    margin: 0 auto;
  }
</style>
