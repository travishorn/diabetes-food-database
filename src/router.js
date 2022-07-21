import { createRouter, createWebHistory } from "vue-router";
import { useStore } from "./store.js";
import Home from "./pages/Home.vue";
import SearchResults from "./pages/SearchResults.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      beforeEnter: () => {
        const store = useStore();
        store.clearQuery();
      },
    },
    { path: "/search", component: SearchResults },
  ],
});
