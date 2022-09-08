<template>
  <div class="home">
    <AppBar />
    <SearchBar :searchPackages="searchPackages" />
    <div class="homeView">
      <div class="mainRow">
        <div v-if="packages" class="packages">
          <h3 v-if="!search">
            <span class="material-icons"> library_books </span>Libraries
          </h3>
          <h3 v-else>
            <span class="material-icons"> library_books </span>Filtered
            Libraries
          </h3>
          <PackageTile
            v-for="(item, i) in packages"
            :key="i"
            :name="item.name"
            :version="item.version"
            :npm="item.npmURL"
            :github="item.githubURL"
          />
        </div>
        <DiscoverPackages :filterPackages="filterPackages" />
        <ByTheNumbers :packages="packages" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import AppBar from '../components/AppBar.vue'
import ByTheNumbers from '../components/ByTheNumbers.vue'
import DiscoverPackages from '../components/DiscoverPackages.vue'
import SearchBar from '../components/SearchBar.vue'
import PackageTile from '../components/PackageTile.vue'

export default {
  name: 'IndexPage',
  components: {
    AppBar,
    ByTheNumbers,
    DiscoverPackages,
    PackageTile,
    SearchBar,
  },
  data() {
    return {
      packages: [],
      allPackages: [],
    }
  },
  computed: {
    search() {
      return this.$store.state.search
    },
    filter() {
      return this.$store.state.filter
    },
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
          this.allPackages = JSON.parse(data.message)
        })
    },
    searchPackages() {
      if (!this.search) {
        this.getAllPackages()
      } else {
        const filtered = []
        this.packages.forEach((item) => {
          if (JSON.stringify(item).includes(this.search)) {
            filtered.push(item)
          }
          this.packages = filtered
        })
      }
    },
    filterPackages() {
      const filtered = []
      this.allPackages.forEach((item) => {
        if (item.tags.includes(this.filter)) {
          filtered.push(item)
        }
      })
      this.packages = filtered
    },
    ...mapMutations({
      setSearch: 'setSearch',
      setFilter: 'setFilter',
    }),
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

  h3 {
    padding-bottom: 16px;
  }
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
    margin-top: 8px;
    width: 98%;
    height: calc(100% - 144px);
    overflow: hidden;
    background: #fafafa;
    border-radius: 4px;
    border: 0.5px solid #21212150;
    .mainRow {
      height: 70%;
      width: 100%;
      display: flex;
      border-bottom: 0.5px solid #21212140;

      .packages {
        width: 40%;
        padding: 16px;
        overflow: auto;

        h3 {
          font-weight: 300;
          font-size: 18px;
          width: 100%;
          border-bottom: 2px solid #ff5722;
          display: flex;
          align-items: center;
          gap: 4px;
        }
      }
    }
  }
}
</style>
