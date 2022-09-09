<template>
  <div class="about">
    <AppBar />
    <div class="aboutView">
      <h1>About<img src="/dmpmword.png" alt="logo" width="120" /></h1>
      <p>
        dmpm is far from the world's largest software registry. An open source
        developer from Colorado, USA uses dmpm to share and document packages.
      </p>
      <p>dmpm was built using four distinct tools/frameworks</p>
      <ul>
        <li><img src="/icon.png" alt="nuxtjs" width="64" /></li>
        <li><img src="/sass-1.svg" alt="sass" width="64" /></li>
        <li><img src="/mongodb.svg" alt="mongodb" width="64" /></li>
        <li><img src="/vercel.svg" alt="vercel" width="64" /></li>
      </ul>
      <p>
        <a href="https://nuxtjs.org/" target="_blank"> Nuxt</a> is the framework
        this site was <strong>built</strong> using. The
        <strong>styling</strong> was organized with
        <a href="https://sass-lang.com/" target="_blank">Sass</a>. The data is
        stored using
        <a href="https://www.mongodb.com/" target="_blank">MongoDB</a>, and you
        are currently visiting this app due to
        <strong>deployment</strong> through
        <a href="https://vercel.com/docs" target="_blank">Vercel</a>.
      </p>
      <h1>Use dmpm to...</h1>
      <p>Easily locate and read about packages published by Derek Mason.</p>
      <p>Install tools that make everyday development easier.</p>
      <p>Download packages that are both safe and small.</p>
      <p>Discover multiple ways to solve the same puzzle.</p>
      <h1>Learn More...</h1>
      <p>
        Get in touch with Derek by
        <a href="https://derekmason.dev/#contact" target="_blank"
          >sending him a message</a
        >
        on his personal website.
      </p>
      <code
        >&copy; 2022 ||
        <em
          >dmpm is only associated with npm by providing links to the packages
          hosted there...</em
        ></code
      >
    </div>
  </div>
</template>

<script>
import AppBar from '../components/AppBar.vue'
export default {
  name: 'AboutPage',
  components: {
    AppBar,
  },
}
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #dedede;
  .aboutView {
    width: 80%;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: #fafafa;

    h1 {
      display: flex;
      align-items: center;
      color: #d50000;
      gap: 16px;
      width: 100%;
      border-bottom: 1px solid #ff5722;
      font-weight: 300;
    }

    a {
      text-decoration: none;
      color: #d50000;
      letter-spacing: 0.4px;
      transition: 0.2s;
    }
    a:hover {
      color: #121212;
      transition: 0.2s;
    }

    p {
      font-size: 16px;
      font-weight: 300;
    }

    ul {
      display: flex;
      align-items: center;
      gap: 24px;
      list-style: none;
    }
  }
}
</style>
