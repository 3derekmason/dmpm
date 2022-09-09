<template>
  <div class="dmpm">
    <button>
      <h4>{{ message }}</h4>
    </button>
  </div>
</template>

<script>
export default {
  name: 'DNPM',
  data() {
    return {
      message: 'Derek Mason Package Manager',
    }
  },
}
</script>

<style lang="scss" scoped>
.dmpm {
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  h4 {
    font-size: 14px;
    letter-spacing: 0.4px;
    font-family: 'Red Hat Mono', monospace;
    font-weight: 500;
  }
}

@media (max-width: 800px) {
  .dmpm {
    color: #212121;
    h4 {
      font-size: 12px;
      letter-spacing: 0.2px;
      font-weight: 400;
    }
  }
}
</style>
