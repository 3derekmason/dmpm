<template>
  <div class="dmpm">
    <button @click="changeMessage">
      <h4>{{ message }}</h4>
    </button>
  </div>
</template>

<script>
export default {
  name: 'DNPM',
  data() {
    return {
      messages: [
        'Derek Mason Package Manager',
        "Don't Mix Porridge Maniacally",
        'Developer Music per Mozart',
        'Deep Mud Paints Mosaics',
        'Devs Mostly Prefer Machines',
        'Deceitful Media Poisons Memory',
        'Drop Master, Push Main',
      ],
      message: '',
    }
  },
  mounted() {
    this.message = this.messages[0]
  },
  methods: {
    changeMessage() {
      let random = Math.floor(Math.random() * this.messages.length)
      if (this.message === this.messages[random]) {
        random = Math.floor(Math.Random() * this.messages.length)
      }
      this.message = this.messages[random]
    },
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
