<template>
  <div class="package">
    <AppBar />
    <div class="packageView">
      <NuxtLink to="/"> <img src="/dmpmword.png" width="120" /></NuxtLink>
      {{ currentPackage.name }}
      <p>{{ currentPackage.description }}</p>
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
      path: '',
    }
  },
  mounted() {
    this.getCurrentData()
  },
  methods: {
    getCurrentData() {
      const name = this.$route.path.split('/')[2]
      fetch(`https://dev-mail.vercel.app/api/package/${name}`)
        .then((res) => res.json())
        .then((data) => {
          this.currentPackage = JSON.parse(data)
        })
    },
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
