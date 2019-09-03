<template>
  <div id="back-to-top" @click="onBackToTop" v-show="visible">
    <i class="el-icon-arrow-up"></i>
  </div>
</template>

<script>
export default {
  name: 'BackToTop',
  data () {
    return {
      visible: false,
      visibleOffset: 120
    }
  },
  mounted () {
    // 屏幕滚动
    window.smoothscroll = () => {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll)
        window.scrollTo(0, Math.floor(currentScroll - currentScroll / 5))
      }
    }

    this.$nextTick(() => {
      window.addEventListener('scroll', this.onScroll)
    })
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      this.visible = window.pageYOffset > parseInt(this.visibleOffset)
    },
    onBackToTop () {
      window.smoothscroll()
    }
  }
}
</script>

<style lang="less" scoped>
#back-to-top {
  position: fixed;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: rgb(145, 144, 144);
  right: 40px;
  bottom: 40px;
  text-align: center;
  line-height: 40px;
  color: white;
  cursor: pointer;
  &:hover {
    background: crimson;
  }
}
</style>
