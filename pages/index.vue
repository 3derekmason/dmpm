<template>
  <div class="home">
    <AppBar />
    <SearchBar />
    <div class="homeView">
      <ul>
        <PackageTile
          v-for="(item, i) in packages"
          :key="i"
          :name="item.name"
          :description="item.description"
          :version="item.version"
          :downloads="Number(item.downloads)"
          :npm="item.npmURL"
          :github="item.githubURL"
          :created="item.created"
          :updated="item.updated_at"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import AppBar from '../components/AppBar.vue'
import SearchBar from '../components/SearchBar.vue'
import PackageTile from '../components/PackageTile.vue'
export default {
  name: 'IndexPage',
  components: {
    AppBar,
    PackageTile,
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
body {
  margin: 0;
  padding: 0;
}
.home {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .homeView {
    width: 100%;
    height: calc(100% - 160px);
    overflow-y: auto;
  }
}
</style>
