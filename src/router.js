import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import SearchResults from "./pages/SearchResults.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/search", component: SearchResults },
  ],
});
