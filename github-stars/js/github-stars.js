const app = new Vue({
  el: '#app',
  data: {
    stats: [],
    always: true
  },
  computed: {
    apiUrl () {
      return 'http://api.captainweb.net/stars' + (this.always ? '?always=1' : '')
    }
  },
  watch: {
    always () {
      this.drawChart()
    }
  },
  methods: {
    fetchStats (callback) {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', this.apiUrl)
      xhr.onload = () => {
        this.stats = JSON.parse(xhr.responseText)
        if (typeof callback === 'function') callback()
      }
      xhr.send()
    },
    drawChart () {
      this.fetchStats(() => {
        const data = google.visualization.arrayToDataTable(this.stats)
        const chart = new google.charts.Line(this.$refs.chart)
        chart.draw(data)
        $(window)
          .off('debouncedresize')
          .on('debouncedresize', () => { chart.draw(data) })
      })
    }
  },
  mounted () {
    $.event.special.debouncedresize.threshold = 250;
    google.load('visualization', '1.1', {packages: ['line']})
    google.setOnLoadCallback(this.drawChart)
  }
})
