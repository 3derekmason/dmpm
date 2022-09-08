<template>
  <div class="auth">
    <AppBar />
    <SearchBar />
    <div class="authView"></div>
  </div>
</template>

<script>
import AppBar from '../components/AppBar.vue'
import SearchBar from '../components/SearchBar.vue'
export default {
  name: 'AuthPage',
  components: {
    AppBar,
    SearchBar,
  },
  data() {
    return {
      username: '',
      password: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.auth {
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

  .authView {
    margin-top: 8px;
    width: 98%;
    height: calc(100% - 144px);
    overflow: hidden;
    background: #fafafa;
    border-radius: 4px;
    border: 0.5px solid #21212150;
  }
}
</style>
