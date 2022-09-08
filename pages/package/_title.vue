<template>
  <div class="package">
    <AppBar />
    <div class="packageView">
      {{ $route.path }}
    </div>
  </div>
</template>

<script>
import AppBar from '../../components/AppBar.vue'
export default {
  name: 'PackageView',
  components: {
    AppBar,
  },
  data() {
    return {
      currentPackage: {},
    }
  },
  mounted() {
    this.getCurrentData()
  },
  methods: {
    getCurrentData() {},
  },
}
</script>

<style lang="scss" scoped>
.package {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .packageView {
    margin-top: 8px;
    width: 98%;
    height: calc(100% - 80px);
    overflow: hidden;
    background: #fafafa;
    border-radius: 4px;
    border: 0.5px solid #21212150;
  }
}
</style>
