<template>
  <div class="container mt-md-4">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <SearchBar @search="search" />
        <ErrorMessage :error="error" v-if="error" />
        <ResultsListing :results="results" v-if="resultsReady" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
    SearchBar,
    ErrorMessage,
    ResultsListing,
  },
};
</script>

<style>

</style>
