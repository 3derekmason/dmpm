<template>
  <div class="appbar">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'AppBar',
  data() {
    return {
      title: 'DMPM',
    }
  },
}
</script>

<style lang="scss" scoped>
.appbar {
  box-sizing: border-box;
  margin: 0;
  padding: 8px;
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  border: 1px solid red;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
