<template>
  <NuxtLink class="tile" :to="`/package/${name}`">
    <p class="name">{{ name }}</p>
    <p>v{{ version }}</p>
  </NuxtLink>
</template>

<script>
export default {
  name: 'PackageTile',
  props: {
    name: {
      type: String,
      default: 'Name',
    },
    description: {
      type: String,
      default: 'About this package',
    },
    version: {
      type: String,
      default: '0.0.0',
    },
    downloads: {
      type: Number,
      default: 0,
    },
    npm: {
      type: String,
      default: 'https://npmjs.com/',
    },
    github: {
      type: String,
      default: 'https://github.com/',
    },
    created: {
      type: Date,
      default() {
        return new Date()
      },
    },
    updated: {
      type: Date,
      default() {
        return new Date()
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.tile {
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 0.1s;
  color: #212121;

  p.name {
    width: 160px;
  }
}
.tile:hover {
  background: #efefef;
  cursor: pointer;
  transition: 0.1s;
}

@media (max-width: 800px) {
  .tile {
    width: 100%;
  }
}
</style>
