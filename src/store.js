import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    query: "",
    results: [],
    error: null,
  }),
  actions: {
    search(q) {
      this.results = [];
      this.error = null;

      return fetch(`/.netlify/functions/search?q=${q}`)
        .then((response) => response.json())
        .then((response) => {
          this.results = response.results;
        })
        .catch(() => {
          this.error = "Something went wrong. Please try again later.";
        });
    },
    clearQuery() {
      this.query = "";
      this.results = [];
    },
  },
});
