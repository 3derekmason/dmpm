<template>
  <div class="searchBar">
    <NuxtLink to="/" name="home">
      <img src="/dmpmword.png" alt="dmpm-logo" width="120"
    /></NuxtLink>
    <div class="search">
      <input
        type="text"
        :placeholder="search || 'Search packages...'"
        @input="handleChange"
      />
      <button @click="searchPackages">Search</button>
      <NuxtLink v-if="showAdmin" to="/auth">Admin</NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'SearchBar',
  props: {
    searchPackages: {
      type: Function,
      default: () => {
        return this.search
      },
    },
  },
  data() {
    return {
      showAdmin: false,
    }
  },
  computed: {
    search() {
      return this.$store.state.search
    },
  },
  methods: {
    ...mapMutations({
      setSearch: 'setSearch',
    }),
    handleChange(e) {
      this.setSearch(e.target.value)
      this.searchPackages()
    },
  },
}
</script>

<style lang="scss" scoped>
.searchBar {
  background: #fafafa;
  width: 100vw;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 12px;
  box-shadow: 0 4px 4px #dedede;

  .search {
    width: 80%;
    height: 50px;
    display: flex;
    align-items: center;

    input {
      padding-left: 12px;
      width: calc(100% - 112px);
      height: 44px;
      border: 1px solid transparent;
      background: #dedede;
      font-family: 'Red Hat Mono', monospace;
    }
    input:focus {
      outline: none;
      border: 1px solid #212121;
    }

    button {
      border: none;
      width: 112px;
      height: 100%;
      background: #212121;
      color: #fafafa;
      letter-spacing: 0.3px;
      font-size: 0.875rem;
      margin-right: 40px;
      cursor: pointer;
    }
  }
}

@media (max-width: 800px) {
  img {
    width: 64px;
    margin-left: 16px;
  }
  .search {
    button {
      width: 88px;
      font-size: 0.6rem;
      margin-right: 16px;
    }
  }
}
</style>
