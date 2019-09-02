const SCREEN_WIDTH = 992

export default {
  beforeMount () {
    window.addEventListener('resize', this.onAdapation)
  },
  mounted () {
    const isMobile = this.isMobileSize()
    if (isMobile) {
      this.$store.dispatch('status/changeScreenType', 'mobile')
      this.$store.dispatch('status/changeSidebarStatus', true)
    } else {
      this.$store.dispatch('status/changeScreenType', 'pc')
      this.$store.dispatch('status/changeSidebarStatus', false)
    }
  },
  methods: {
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
