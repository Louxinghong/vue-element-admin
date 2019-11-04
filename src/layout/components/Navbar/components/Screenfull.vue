<template>
  <div class="screenfull">
    <svg-icon
      :icon-class="isFullscreen ? 'exit-screenfull' : 'screenfull'"
      @click.native="handleClick"
    ></svg-icon>
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'Screenfull',
  data () {
    return {
      isFullscreen: false
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    handleClick () {
      if (!screenfull.enabled) {
        this.$message({
          message: '该浏览器不支持全屏功能',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
    init () {
      if (screenfull.enabled) {
        screenfull.on('change', () => {
          this.isFullscreen = screenfull.isFullscreen
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.screenfull {
  display: inline-block;
  font-size: 16.5px;
  cursor: pointer;
  margin-right: 15px;
}
</style>
