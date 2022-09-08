<template>
  <div class="discover">
    <h3><span class="material-icons">pageview</span>Discover packages</h3>
  </div>
</template>

<script>
export default {
  name: 'DiscoverPackages',
}
</script>

<style lang="scss" scoped>
.discover {
  width: 30%;
  padding: 16px;
  height: 100%;

  h3 {
    font-weight: 300;
    font-size: 18px;
    width: 100%;
    border-bottom: 2px solid #ffd600;
    display: flex;
    align-items: center;
    gap: 4px;
  }
}
</style>
