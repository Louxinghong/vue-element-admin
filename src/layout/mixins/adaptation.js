const SCREEN_WIDTH = 992

export default {
  computed: {
    isCollapse () {
      return this.$store.state.status.isCollapse
    },
    isMobile () {
      return this.$store.getters.isMobile
    }
  },
  watch: {
    // 在手机状态下，每次侧栏打开选择新的路由后，侧栏自动缩回
    $route: {
      handler: function () {
        if (this.isMobile && !this.isCollapse) {
          this.$store.dispatch('status/changeCollapse')
        }
      }
    }
  },

  // 添加自适应监听事件
  beforeMount () {
    window.addEventListener('resize', this.onAdapation)
  },
  mounted () {
    const isMobile = this.isMobileSize()

    // 判断是否为手机尺寸，若是的话将screentype改为mobile，sidebar改为完全隐藏
    if (isMobile) {
      this.$store.dispatch('status/changeScreenType', 'mobile')
      this.$store.dispatch('status/changeSidebarStatus', true)
    } else {
      this.$store.dispatch('status/changeScreenType', 'pc')
      this.$store.dispatch('status/changeSidebarStatus', false)
    }
  },
  methods: {
    // 获取当前浏览器尺寸并与默认值进行比较
    isMobileSize () {
      const rect = document.body.getBoundingClientRect()
      return rect.width < SCREEN_WIDTH
    },
    onAdapation () {
      if (!document.hidden) {
        const isMobile = this.isMobileSize()
        if (isMobile) {
          this.$store.dispatch('status/changeScreenType', 'mobile')
          this.$store.dispatch('status/changeSidebarStatus', true)
        } else {
          this.$store.dispatch('status/changeScreenType', 'pc')
          this.$store.dispatch('status/changeSidebarStatus', false)
        }
      }
    }
  }
}
