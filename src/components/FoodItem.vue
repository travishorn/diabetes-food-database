<template>
  <div class="foodItem" @click="toggleExpanded">
    <h2>{{ food.displayName }}</h2>

    <table>
      <tbody>
        <tr>
          <td style="background-color:#FF3A3A">Avoid</td>
          <td style="background-color:#FF7C7C">Caution</td>
          <td style="background-color:#CBD370">Okay</td>
          <td style="background-color:#A7FF7F">Good</td>
          <td style="background-color:#63C130">Great</td>
        </tr>
        <tr>
          <td><img alt="Avoid" src="/images/arrow-up.png" v-if="food.level === 1"></td>
          <td><img alt="Caution" src="/images/arrow-up.png" v-if="food.level === 2"></td>
          <td><img alt="Okay" src="/images/arrow-up.png" v-if="food.level === 3"></td>
          <td><img alt="Good" src="/images/arrow-up.png" v-if="food.level === 4"></td>
          <td><img alt="Great" src="/images/arrow-up.png" v-if="food.level === 5"></td>
        </tr>
      </tbody>
    </table>

    <div v-if="expanded">
      <p>{{ food.explanation }}</p>
      <p>{{ food.suggestions }}</p>
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
  methods: {
    toggleExpanded() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style scoped>
  .foodItem {
    box-shadow: 1px 1px 1px gray;
    margin: 1rem 0;
    padding: 0.25rem;
    cursor: pointer;
  }

  h2 {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
  }

  table {
    width: 100%;
  }

  td {
    width: 20%;
    font-size: 0.6rem;
    text-align: center;
  }
</style>
