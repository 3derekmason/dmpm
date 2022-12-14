<template>
  <div class="package">
    <AppBar />
    <div class="head">
      <NuxtLink to="/"
        ><img src="/dmpmword.png" alt="logo" height="80"
      /></NuxtLink>
      <h1>{{ currentPackage.name }}</h1>
    </div>
    <div class="packageView">
      <div v-if="currentPackage.name" class="main">
        <div class="dbl-row">
          <h2>{{ currentPackage.name }}</h2>
          <span>
            <p>v{{ currentPackage.version }}</p>
            <p>
              Published
              {{
                relativeTimeAgo(currentPackage.published, 'month').toLowerCase()
              }}
            </p>
          </span>
        </div>
        <div class="dbl-row">
          <p class="desc">
            {{ currentPackage.description }}
          </p>
        </div>
        <div class="row">
          <a :href="currentPackage.npmURL" target="_blank">View on NPM</a>
          <a :href="currentPackage.githubURL" target="_blank">View on github</a>
        </div>
        <div class="dbl-row">
          <h3>Installation</h3>
          <code>npm i {{ currentPackage.name }}</code>
        </div>
        <div class="dbl-row">
          <h3>Usage</h3>
          <code
            >import <em>{{ currentPackage.import }}</em> from '{{
              currentPackage.name
            }}'</code
          >
        </div>
      </div>
      <div class="info">
        <div class="block">
          <code>npm i {{ currentPackage.name }}</code>
          <button class="install" @click="copyInstallText">
            <span class="material-icons">content_copy</span>
          </button>
        </div>
        <div class="block">
          <p>Version</p>
          <h2>{{ currentPackage.version }}</h2>
        </div>
        <div class="block">
          <p>Total downloads</p>
          <h2>{{ currentPackage.downloads }}</h2>
        </div>

        <div class="block">
          <p>Published</p>
          <h4>{{ new Date(currentPackage.published).toLocaleDateString() }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import relativeTimeAgo from 'relative-time-ago'
import AppBar from '../../components/AppBar.vue'

export default {
  name: 'PackageView',
  components: {
    AppBar,
  },
  data() {
    return {
      currentPackage: {},
      path: '',
      installCode: '',
    }
  },
  async mounted() {
    await this.getCurrentData()
  },
  methods: {
    relativeTimeAgo,
    getCurrentData() {
      const name = this.$route.path.split('/')[2]
      fetch(`https://dev-mail.vercel.app/api/package/${name}`)
        .then((res) => res.json())
        .then((data) => {
          this.currentPackage = JSON.parse(data)
          this.installCode = 'npm i ' + JSON.parse(data).name
        })
    },
    async copyInstallText() {
      try {
        await navigator.clipboard.writeText(this.installCode)
      } catch ($e) {
        alert($e)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.package {
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

  .head {
    background: #fafafa;
    padding-left: 40px;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    gap: 48px;
    box-shadow: 0 4px 4px #dedede;

    h1 {
      font-weight: 400;
      font-size: 48px;
      background: -webkit-linear-gradient(35deg, #ff5722, #ff6f00, #d50000);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .packageView {
    width: 100%;
    height: calc(100% - 144px);
    overflow: hidden;
    padding-top: 16px;
    padding-left: 32px;
    padding-bottom: 16px;
    display: flex;

    p.desc {
      color: #323232;
      font-family: 'Red Hat Mono', monospace;
      margin: 0;
      font-weight: 400;
    }

    .main {
      width: 66%;
      height: 100%;
      background: #fafafa;
      font-family: 'Red Hat Mono', monospace;
      a {
        text-decoration: none;
        text-transform: uppercase;
        color: #d50000;
        padding: 6px;
        border: 1px solid #d50000;
        border-radius: 4px;
        box-shadow: 0 2px 0 #ff5722;
      }
      a:active {
        box-shadow: none;
        transform: translateY(2px);
      }
      code {
        padding: 2px;
        padding-left: 8px;
        padding-right: 8px;
        background: #99999950;
        width: fit-content;
      }
      .row,
      .dbl-row {
        width: 100%;
        padding: 16px;
        display: flex;

        h2 {
          font-size: 24px;
          font-weight: 400;
          margin: 0;
        }
        h3 {
          width: 90%;
          margin: 0;
          margin-bottom: 8px;
          font-size: 18px;
          font-weight: 300;
          border-bottom: 1px solid #ff6f00;
        }
        p {
          font-size: 14px;
        }
      }
      .row {
        gap: 40px;
        align-items: center;
        height: calc(100% / 9) px;
      }
      .dbl-row {
        height: calc(100% / 4.5) px;
        flex-direction: column;
        gap: 8px;

        span {
          width: 90%;
          display: flex;
          gap: 40px;
          border-bottom: 1px solid #d50000;
        }
      }
    }

    .install {
      background: none;
      border: none;
      cursor: pointer;
    }
    .install:hover {
      color: #d50000;
    }
    .install:active {
      opacity: 0.5;
    }

    .info {
      box-sizing: border-box;
      width: 33%;
      height: 100%;
      background: #fefefe;
      border-radius: 8px;
      margin-left: 32px;
      margin-right: 32px;
      padding: 80px;
      display: flex;
      flex-direction: column;

      code {
        width: 100%;
        padding: 8px;
        background: #ff6f0020;
      }
      .block {
        width: 100%;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
}

@media (max-width: 800px) {
  .package {
    .head {
      img {
        height: 60px;
      }
      h1 {
        font-size: 1.5rem;
      }
    }

    .packageView {
      max-width: 100%;
      flex-direction: column;
      height: auto;
      overflow: auto;
      padding: 2px;
      overflow-x: hidden;
      .main {
        width: 98%;
        code {
          width: auto;
          max-width: 90%;
        }

        .desc {
          padding: 4px;
        }
        .row {
          gap: 16px;
          a {
            width: 40%;
          }
        }
      }
      .info {
        width: 98%;
        margin: 0;
        margin-left: 4px;
        padding: 16px;
        border: 0.5px solid #d50000;
      }
    }
  }
}
</style>
