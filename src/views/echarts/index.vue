<template>
  <div class="content">
    <div id="main"></div>
  </div>
</template>

<script>
export default {
  name: 'Echarts',
  data () {
    return {}
  },
  mounted () {
    this.drawEcharts()
  },
  methods: {
    drawEcharts () {
      const myChart = this.$echarts.init(document.getElementById('main'))

      myChart.setOption({
        title: { text: 'Vue中Echart测试' },
        tooltip: {},
        xAxis: {
          data: ['Top', 'Jungle', 'Mid', 'ADC', 'Support']
        },
        yAxis: {},
        series: [
          {
            name: '人数',
            type: 'bar',
            data: [5, 6, 7, 8, 9]
          }
        ]
      })
    }
  }
}
</script>

<style lang="less" scoped>
#main {
  width: 400px;
  height: 400px;
}
</style>
