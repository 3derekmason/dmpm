<template>
  <div class="home">
    <AppBar />
    <SearchBar />
    <div class="homeView">
      <div class="mainRow"></div>
    </div>
  </div>
</template>

<script>
import AppBar from '../components/AppBar.vue'
import SearchBar from '../components/SearchBar.vue'
// import PackageTile from '../components/PackageTile.vue'
export default {
  name: 'IndexPage',
  components: {
    AppBar,
    // PackageTile,
    SearchBar,
  },
  data() {
    return {
      packages: [],
    }
  },
  mounted() {
    this.getAllPackages()
  },
  methods: {
    getAllPackages() {
      fetch('https://dev-mail.vercel.app/api/packages')
        .then((res) => res.json())
        .then((data) => {
          this.packages = JSON.parse(data.message)
        })
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300;400;500;600;700&display=swap');
body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}
.home {
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

  .homeView {
    width: 98%;
    height: calc(100% - 160px);
    overflow-y: auto;

    .mainRow {
      height: 70%;
      width: 100%;
      display: flex;
      border-bottom: 0.5px solid #21212180;
    }
  }
}
</style>
