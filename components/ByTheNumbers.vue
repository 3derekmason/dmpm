<template>
  <div class="stats">
    <h3><span class="material-icons">analytics</span>By the numbers</h3>
    <ul>
      <li>
        <p>Packages</p>
        <h2>4</h2>
      </li>
      <li>
        <p>Downloads</p>
        <h2>{{ total }}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ByTheNumbers',
  data() {
    return {
      total: 0,
    }
  },
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  width: 100%;
}
.stats {
  width: 30%;
  padding: 16px;
  height: 100%;

  h3 {
    font-weight: 400;
    font-size: 20px;
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
    }
    h2 {
      font-size: 32px;
      margin: 0;
      padding: 0;
    }
  }
}
</style>
