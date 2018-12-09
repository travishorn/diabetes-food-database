<template>
  <div>
    <div v-if="results.length > 0">
      <div v-for="food in results" :key="food.name">
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
        <p>{{ food.explanation }}</p>
        <p>{{ food.suggestions }}</p>
      </div>
    </div>
    <p v-else>No results found.</p>
  </div>
</template>

<script>
module.exports = {
  name: 'ResultsListing',
  props: ['results'],
  components: {
  },
}
</script>

<style scoped>
  h2 {
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
