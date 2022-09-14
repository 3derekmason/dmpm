<template>
  <div class="appbar">
    <DMPM />
    <span class="nav">
      <div v-if="$route.path !== '/'">
        <NuxtLink to="/">Home </NuxtLink>
      </div>
      <div v-if="$route.path !== '/about'">
        <NuxtLink to="/about">About </NuxtLink>
      </div>
      <NuxtLink to="/"
        ><img src="/dmpm.png" alt="dmpm d logo" width="32"
      /></NuxtLink>
    </span>
  </div>
</template>

<script>
import DMPM from './DMPM.vue'
export default {
  name: 'AppBar',
  components: {
    DMPM,
  },
}
</script>

<style lang="scss" scoped>
$grad: linear-gradient(35deg, #ff9800, #ff5722, #ff6f00, #ffc107);
.appbar {
  box-sizing: border-box;
  margin: 0;
  padding: 8px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100vw;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 8px solid #ff9800;
  border-bottom: 0.5px solid #12121240;
  background: #fafafa;

  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    span {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    a {
      text-decoration: none;
      text-transform: uppercase;
      color: #d50000;
    }
  }
}

@media (max-width: 800px) {
  .appbar {
    padding-left: 8px;
    padding-right: 8px;
  }
}
</style>
