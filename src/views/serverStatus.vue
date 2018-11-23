<template>
  <b-container fluid class="p-4">
    <b-row class="m-3">
      <b-card-group deck>
        <b-card>
          <img src="../assets/img/teamspeak.svg" alt="Teamspeak Logo" class="card-img-top">
          <div><p class="card-text">
            Status: Online
            <br/>
            Online: 5 / 32
          </p></div>
        </b-card>
        <b-card>
          <img src="../assets/img/ethereum.svg" alt="Ethereum Logo" class="card-img-top">
          <div><p class="card-text">
            Status: Online
            <br/>
            Solutions: 5 / 30 min
          </p></div>
        </b-card>
        <b-card>
          <img src="../assets/img/cpu.svg" alt="CPU Logo" class="card-img-top">
          <div><p class="card-text">
            CPU: 3 % / 43 °C
            <br/>
            GPU: 50 % / 60 °C
          </p></div>
        </b-card>
        <b-card>
          <img src="../assets/img/pi-hole.svg" alt="Pi-Hole Logo" class="card-img-top">
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
</template>

<script>
  export default {
    name: "serverStatus"
  }
</script>

<style scoped>
  .card-img-top {
    height: 5em;
  }
</style>