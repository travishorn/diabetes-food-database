<script setup>
import { computed, ref } from "vue";

const props = defineProps(["food"]);

const expanded = ref(false);

const indicatorTranslation = computed(() => {
  const x = (props.food.level - 1) * 100 + 50;
  return `translate(${x} 10)`;
});

const indicatorText = computed(() => {
  const levels = ["Avoid", "Caution", "Okay", "Good", "Great"];
  return levels[props.food.level - 1];
});

const expand = () => {
  expanded.value = true;
};

const toggleExpanded = (e) => {
  expanded.value = !expanded.value;
  e.stopPropagation();
};
</script>

<template>
  <div @click="expand">
    <div class="flex flex-col gap-3">
      <h2 class="text-xl cursor-pointer" @click="toggleExpanded">
        {{ props.food.displayName }}
      </h2>

      <div class="max-w-md">
        <svg viewBox="0 0 500 40">
          <defs>
            <linearGradient id="redGreen">
              <stop offset="20%" stop-color="#cf597e" />
              <stop offset="35%" stop-color="#eeb479" />
              <stop offset="50%" stop-color="#e9e29c" />
              <stop offset="65%" stop-color="#9ccb86" />
              <stop offset="80%" stop-color="#009392" />
            </linearGradient>
          </defs>

          <rect width="500" height="10" rx="3" ry="3" fill="url(#redGreen)" />
          <g :transform="indicatorTranslation">
            <path d="M 5 0 L 10 10 L 0 10 Z" />
            <text x="5" y="25" text-anchor="middle">{{ indicatorText }}</text>
          </g>
        </svg>
      </div>

      <div v-if="expanded && props.food.explanation">
        <h3 class="font-bold">Explanation</h3>
        <p>{{ props.food.explanation }}</p>
      </div>
      <div v-if="expanded && props.food.suggestions">
        <h3 class="font-bold">Suggestions</h3>
        <p>{{ props.food.suggestions }}</p>
      </div>
    </div>
    <div
      class="italic text-gray-500 text-center md:text-left text-sm mt-2 cursor-pointer"
      v-if="!expanded"
    >
      more info
    </div>
  </div>
</template>
