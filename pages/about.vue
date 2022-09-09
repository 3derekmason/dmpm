<template>
  <div class="about">
    <AppBar />
    <SearchBar />
    <div class="aboutView"></div>
  </div>
</template>

<script>
import AppBar from '../components/AppBar.vue'
import SearchBar from '../components/SearchBar.vue'
export default {
  name: 'AboutPage',
  components: {
    AppBar,
    SearchBar,
  },
}
</script>
