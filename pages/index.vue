<template>
  <div class="home">
    <AppBar />
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
</template>

<script>
import AppBar from '../components/AppBar.vue'
import PackageTile from '../components/PackageTile.vue'
export default {
  name: 'IndexPage',
  components: {
    AppBar,
    PackageTile,
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

<style lang="scss" scoped>
.home {
  margin: 0;
  padding: 0;
  margin-top: 80px;
  width: auto;
  height: calc(100vh - 80px);
  overflow-y: auto;
}
</style>
