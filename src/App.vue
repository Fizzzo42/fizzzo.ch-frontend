<template>
  <div id="app">
    <b-container fluid class="p-4 bg-dark">
      <b-row>te
        <b-container fluid class="p-4 bg-light">tee</b-container>
      </b-row>
      <b-row>
        <img src="./assets/img/ethereum.svg" />
        <b-card-group deck>
          <b-card img-src="https://placekitten.com/1000/300"
                  img-alt="Teamspeak Logo"
                  img-top>
            <p class="card-text">
              Online: 7/30
            </p>
          </b-card>
          <b-card img-src="./assets/img/ethereum.svg"
                  img-alt="Ethereum"
                  img-top>
            <p class="card-text">
              dasdsa
            </p>
          </b-card>
          <b-card img-src="https://placekitten.com/1000/300"
                  img-alt="Card image"
                  img-top>
            <p class="card-text">
              Some quick example text to build on the card and make up the bulk of the card's content.
            </p>
          </b-card>
          <b-card img-src="https://placekitten.com/1000/300"
                  img-alt="Card image"
                  img-top>
            <p class="card-text">
              Some quick example text to build on the card and make up the bulk of the card's content.
            </p>
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
  margin-top: 60px;
}
</style>
