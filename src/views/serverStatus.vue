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
    <b-row>
      <line-chart :chart-data="datacollection"></line-chart>
      <button @click="fillData()">Randomize</button>
    </b-row>
  </b-container>
</template>

<script>

  import LineChart from '../components/line-chart';

  export default {
    name: "serverStatus",
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"],
          datasets: [
            {
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),
                this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),
                this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * 10);
      }
    }
  }

</script>

<style scoped>

  .card-img-top {
    height: 5em;
  }

  .card-text {
    margin-top: 1em;
  }

</style>