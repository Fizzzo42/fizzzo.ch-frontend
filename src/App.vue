<template>

  <div id="app">

    <Navbar/>

    <router-view />

  </div>

</template>

<script>
  import Navbar from './components/navbar';

  export default {
    name: 'App',
    components: {
      Navbar
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    background: #DFDBE5 url(assets/img/background.svg) center center fixed;
    background-size: 10em 10em;
  }

</style>
