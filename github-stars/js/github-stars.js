const app = new Vue({
  el: '#app',
  data: {
    stats: [],
    always: false,
    loaded: false
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
    getQueryParam (name) {
      name = name.replace(/[\[\]]/g, '\\$&')
      const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
      const results = regex.exec(window.location.href)
      if (!results) return null
      if (!results[2]) return ''
      return decodeURIComponent(results[2].replace(/\+/g, ' '))
    },
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
      if (!this.loaded) return
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
  created () {
    this.always = this.getQueryParam('always') !== null
  },
  mounted () {
    $.event.special.debouncedresize.threshold = 250
    google.load('visualization', '1.1', {packages: ['line']})
    google.setOnLoadCallback(() => {
      this.loaded = true
      this.drawChart()
    })
  }
})
