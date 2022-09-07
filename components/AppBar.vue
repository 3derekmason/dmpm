<template>
  <div class="appbar">
    <DMPM />
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
  width: 100vw;
  height: 64px;
  display: flex;
  align-items: center;
  border-top: 8px solid #ff9800;
  border-bottom: 0.5px solid #12121280;
}
</style>
