const app = new Vue({
  el: '#app',
  data: {
    stats: [],
    always: false,
    svg: null,
    $svg: null,
    margin: {horizontal: 50, vertical: 30}
  },
  computed: {
    apiUrl () {
      return 'http://api.captainweb.net/stars.tsv' + (this.always ? '?always=1' : '')
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
      const parseTime = d3.timeParse('%d/%m/%Y')
      d3.tsv(this.apiUrl, (d, _, columns) => {
        d.date = parseTime(d.date)
        for (let i = 1, n = columns.length, c; i < n; ++i) d[c = columns[i]] = +d[c]
        return d
      }, callback)
    },
    updateChart (data) {
      this.$svg.empty()
      const width = this.$svg.width() - (this.margin.horizontal * 2)
      const height = this.$svg.height() - (this.margin.vertical * 2)
      const g = this.svg.append('g')
        .attr('transform', 'translate(' + this.margin.horizontal + ',' + this.margin.vertical + ')')
      const x = d3.scaleTime().range([0, width])
      const y = d3.scaleLinear().range([height, 0])
      const z = d3.scaleOrdinal(d3.schemeCategory10)
      const line = d3.line()
        .curve(d3.curveBasis)
        .x(d => x(d.date))
        .y(d => y(d.stars))
      const repos = data.columns.slice(1).map(id => ({
        id,
        values: data.map(d => ({date: d.date, stars: d[id]}))
      }))
      x.domain(d3.extent(data, d => d.date))
      y.domain([
        d3.min(repos, c => d3.min(c.values, d => d.stars)),
        d3.max(repos, c => d3.max(c.values, d => d.stars))
      ])
      z.domain(repos.map(c => c.id))
      g.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x))
      g.append('g')
        .attr('class', 'axis axis--y')
        .call(d3.axisLeft(y))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('fill', '#000')
        .text('Stars')
      const repo = g.selectAll('.repo')
        .data(repos)
        .enter()
        .append('g')
        .attr('class', 'repo')
      repo.append('path')
        .attr('class', 'line')
        .attr('d', d => line(d.values))
        .style('stroke', d => z(d.id))
      repo.append('text')
        .datum(d => ({id: d.id, value: d.values[d.values.length - 1]}))
        .attr('transform', d => 'translate(' + x(d.value.date) + ',' + y(d.value.stars) + ')')
        .attr('x', 3)
        .attr('dy', '0.35em')
        .style('font', '10px sans-serif')
        .text(d => d.id)
    },
    drawChart () {
      this.fetchStats((error, data) => {
        if (error) throw error
        this.updateChart(data)
        $(window)
          .off('debouncedresize')
          .on('debouncedresize', () => { this.updateChart(data) })
      })
    }
  },
  created () {
    this.always = this.getQueryParam('always') !== null
  },
  mounted () {
    $.event.special.debouncedresize.threshold = 250
    this.svg = d3.select('svg')
    this.$svg = $('svg')
    this.drawChart()
  }
})
