<script>
  import { Line, mixins } from 'vue-chartjs'
  const { reactiveProp } = mixins

  export default {
    extends: Line,
    mixins: [reactiveProp],
    data: () => ({
      chartdata: {
        datacollection: {
          datasets: [
            {
              backgroundColor: '#423423',
            }
          ]
        }
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }),
    mounted () {
      // this.chartData is created in the mixin.
      // If you want to pass options please create a local options object
      this.renderChart(this.chartData, this.options);
    }
  }
</script>

<style scoped>

</style>