<template>
  <div class="tile">
    <p>{{ name }}</p>
    <p>{{ description }}</p>
    <p>{{ version }}</p>
    <p>{{ downloads }}</p>
    <a :href="npm" target="_blank">View on NPM</a>
    <a :href="github" target="_blank">View on Github</a>
    <p>{{ created }}</p>
    <p>{{ updated }}</p>
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

<style scoped>
.tile {
  border: 1px solid blue;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4px;
}
</style>
