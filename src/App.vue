<template>
  <div id="app">
    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-container fluid class="p-3 bg-light">
          <b-row>
            <b-col>Link 1</b-col>
            <b-col>Link 2</b-col>
            <b-col>Link 3</b-col>
            <b-col>Link 4</b-col>
          </b-row>
        </b-container>
      </b-row>
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
              Status: Running
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
              Status: Running
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
export default {
  name: 'app',
  components: {
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

</style>
