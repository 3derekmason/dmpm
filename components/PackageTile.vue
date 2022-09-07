<template>
  <div class="tile">
    <p class="name">{{ name }}</p>
    <NuxtLink :to="npm" target="_blank">NPM</NuxtLink>
    <NuxtLink :to="github" target="_blank">SOURCE</NuxtLink>
    <p>{{ version }}</p>
  </div>
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

  p.name {
    width: 160px;
  }
}
</style>
