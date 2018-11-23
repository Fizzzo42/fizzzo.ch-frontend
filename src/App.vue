<template>
  <div id="app">

    <b-navbar toggleable="md" type="dark" variant="dark">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">Home</b-navbar-brand>

      <b-collapse is-nav id="naiv_collapse">

        <b-navbar-nav>
          <b-nav-item href="#">Link 1</b-nav-item>
          <b-nav-item href="#">Link 2</b-nav-item>
          <b-nav-item href="#">Link 3</b-nav-item>
          <b-nav-item href="#">Server Status</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <nav-text>Add something useful here ;)</nav-text>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <b-container fluid class="p-4">
      <b-row class="m-3">
        <b-card-group deck>
          <b-card>
            <img src="./assets/img/teamspeak.svg" alt="Teamspeak Logo" class="card-img-top">
            <div><p class="card-text">
              Status: Online
              <br/>
              Online: 5 / 32
            </p></div>
          </b-card>
          <b-card>
            <img src="./assets/img/ethereum.svg" alt="Ethereum Logo" class="card-img-top">
            <div><p class="card-text">
              Status: Online
              <br/>
              Solutions: 5 / 30 min
            </p></div>
          </b-card>
          <b-card>
            <img src="./assets/img/cpu.svg" alt="CPU Logo" class="card-img-top">
            <div><p class="card-text">
              CPU: 3 % / 43 °C
              <br/>
              GPU: 50 % / 60 °C
            </p></div>
          </b-card>
          <b-card>
            <img src="./assets/img/pi-hole.svg" alt="Pi-Hole Logo" class="card-img-top">
            <div><p class="card-text">
              Status: Online
              <br/>
              DNS Requests: 5345 / 24h
              <br/>
              Ads Blocked: 5.5 %
            </p></div>
          </b-card>
        </b-card-group>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import NavText from "bootstrap-vue/es/components/nav/nav-text";

export default {
  name: 'app',
  components: {
    NavText
  }
}

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .card-img-top {
    height: 5em;
  }

  body {
    background: #DFDBE5 url(assets/img/background.svg) center center fixed;
    background-size: 10em 10em;
  }

</style>
