<template>
  <div class="stats">
    <h2><span class="material-icons">analytics</span>By the numbers</h2>
    <ul>
      <li>
        <p>Packages</p>
        <h3>{{ packages.length }}</h3>
      </li>
      <li>
        <p>Downloads</p>
        <h3>{{ getTotal(packages) }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ByTheNumbers',
  props: {
    packages: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  methods: {
    getTotal(array) {
      let total = 0
      array.forEach((item) => {
        total += Number(item.downloads)
      })
      return total === 0 ? '--' : total
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  width: 100%;
}
.stats {
  width: 25%;
  padding: 16px;
  height: 100%;

  h2 {
    font-weight: 300;
    font-size: 18px;
    width: 100%;
    border-bottom: 2px solid #ff6f00;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  li {
    width: 100%;
    height: 64px;
    margin-bottom: 8px;

    p {
      font-size: 14px;
      margin: 0;
      font-weight: 200;
    }
    h3 {
      font-size: 32px;
      font-weight: 300;
      margin: 0;
      padding: 0;
    }
  }
}
@media (max-width: 800px) {
  .stats {
    width: 100%;
  }
}
</style>
