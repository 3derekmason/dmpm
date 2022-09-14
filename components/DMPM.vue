<template>
  <div class="dmpm">
    <button @click="changeMessage">
      <h1>{{ message }}</h1>
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
        'Deep Mud, Pretty Mosaics',
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
        random = Math.floor(Math.random() * this.messages.length)
      }
      this.message = this.messages[random]
    },
  },
}
</script>

<style lang="scss" scoped>
.dmpm {
  h1 {
    font-size: 14px;
    letter-spacing: 0.4px;
    font-family: 'Red Hat Mono', monospace;
    font-weight: 400;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    transition: 0.4s;
  }
  button:hover {
    color: #ababab;
    transition: 0.4s;
  }
  button:active {
    opacity: 1;
  }
}

@media (max-width: 800px) {
  .dmpm {
    color: #212121;
    h1 {
      font-size: 12px;
      letter-spacing: 0.2px;
      font-weight: 400;
    }
  }
}
</style>
