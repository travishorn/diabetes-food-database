<script setup>
import { useRouter } from "vue-router";
import { SearchIcon } from "@heroicons/vue/solid";
import { useStore } from "../store.js";
import { onMounted, ref } from "vue";

const router = useRouter();
const store = useStore();

// Necessary so that the DOM element below can be referenced later, enabling us
// to focus it.
const query = ref(null);

const search = async () => {
  await store.search(store.query);
  router.push(`/search?q=${store.query}`);
};

onMounted(() => {
  query.value.focus();
});
</script>

<template>
  <form @submit.prevent="search">
    <div class="relative">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button class="p-1 focus:outline-none">
          <SearchIcon class="h-5 w-5 text-gray-400" />
        </button>
      </span>
      <input
        class="py-2 rounded-lg pl-10 pr-3 border-gray-300 border w-full focus:outline-none"
        type="search"
        v-model="store.query"
        ref="query"
        placeholder="Search for a food"
        autofocus
      />
    </div>
  </form>
</template>
