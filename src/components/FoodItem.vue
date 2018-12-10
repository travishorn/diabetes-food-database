<template>
  <div class="card" @click="expand">
    <div class="card-body">
      <h2 @click="toggleExpanded">{{ food.displayName }}</h2>

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

      <div v-if="expanded && food.explanation">
        <h3>Explanation</h3>
        <p>{{ food.explanation }}</p>
      </div>
      <div v-if="expanded && food.suggestions">
        <h3>Suggestions</h3>
        <p>{{ food.suggestions }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodItem',
  props: ['food'],
  data() {
    return {
      expanded: false,
    };
  },
  computed: {
    indicatorTranslation() {
      const x = (this.food.level - 1) * 100 + 50;
      return `translate(${x} 10)`;
    },
    indicatorText() {
      const levels = ['Avoid', 'Caution', 'Okay', 'Good', 'Great'];
      return levels[this.food.level - 1];
    },
  },
  methods: {
    expand() {
      this.expanded = true;
    },
    toggleExpanded(e) {
      this.expanded = !this.expanded;
      e.stopPropagation();
    },
  },
};
</script>

<style scoped>
  .card { cursor: pointer; }
  .card p,
  .card h3 { cursor: text; }
</style>
