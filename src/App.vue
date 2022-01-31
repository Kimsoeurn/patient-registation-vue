<template>
  <div id="app">
    <Navbar></Navbar>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;1,300;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nokora:wght@300;400&display=swap');

#app {
  font-family: Nunito, Nokora, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-weight: 400 !important;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
