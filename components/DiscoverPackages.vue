<template>
  <div class="discover">
    <h3><span class="material-icons">pageview</span>Discover packages</h3>
    <div class="filters">
      <span v-for="(item, i) in filters" :key="i">
        <button @click="handleClick(item.name)">
          <span class="material-icons">{{ item.icon }}</span>
          {{ item.name }}
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'DiscoverPackages',
  props: {
    filterPackages: {
      type: Function,
      default: () => {
        return this.filter
      },
    },
  },
  data() {
    return {
      filters: [
        { name: 'Front-End', icon: 'integration_instructions' },
        { name: 'Back-End', icon: 'terminal' },
        { name: 'Styling', icon: 'format_paint' },
        { name: 'Math', icon: 'calculate' },
      ],
    }
  },
  computed: {
    filter() {
      return this.$store.state.filter
    },
  },
  methods: {
    ...mapMutations({
      setFilter: 'setFilter',
    }),
    handleClick(string) {
      this.setFilter(string)
      this.filterPackages()
    },
  },
}
</script>

<style lang="scss" scoped>
.discover {
  width: 35%;
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
  .filters {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
    span {
      width: 46%;
      height: 64px;
      .material-icons {
        width: auto;
        display: flex;
        align-items: center;
      }
      align-items: center;

      button {
        border-radius: 2px;
        padding-left: 16px;
        padding-right: 16px;
        width: 100%;
        height: 100%;
        border: 0.5px solid #21212120;
        background: none;
        box-shadow: 0 1px 0 #21212140;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        color: #212121;
      }

      button:hover {
        background: #fefefe;
        cursor: pointer;
      }
      button:active {
        box-shadow: none;
        transform: translate(1px 0px);
      }
    }
  }
}
@media (max-width: 800px) {
  .discover {
    width: 100%;
  }
}
</style>
