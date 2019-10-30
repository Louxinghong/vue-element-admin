<template>
  <div class="wrapper" :class="classAll">
    <div class="hideCollapse" v-show="isMobile && !isCollapse" @click="handleCollapse"></div>
    <SideBar class="side-container" />
    <div class="main-container">
      <NavBar class="navbar-container" />
      <MainContent class="main-content" />
    </div>
    <SettingPanel />
    <BackToTop />
  </div>
</template>

<script>
import adaptation from './mixins/adaptation.js'
import SideBar from '@/layout/components/Sidebar/index.vue'
import NavBar from '@/layout/components/Navbar/index.vue'
import MainContent from '@/layout/components/Maincontainer/index.vue'
import SettingPanel from '@/layout/components/Settingpanel/index.vue'
import BackToTop from '@/layout/components/Backtotop/index.vue'

export default {
  name: 'Layout',
  data () {
    return {}
  },
  mixins: [adaptation],
  computed: {
    isCollapse () {
      return this.$store.state.status.isCollapse
    },
    isCloseSidebar () {
      return this.$store.state.status.isCloseSidebar
    },
    isMobile () {
      return this.$store.getters.isMobile
    },
    classAll () {
      return {
        mobile: this.isMobile,
        isCollapse: this.isCollapse
      }
    }
  },
  components: {
    SideBar,
    NavBar,
    MainContent,
    SettingPanel,
    BackToTop
  },
  methods: {
    handleCollapse () {
      this.$store.dispatch('status/changeCollapse')
    }
  }
}
</script>

<style lang="less">
@isCollapse: 62px;
@notCollapse: 250px;

.wrapper {
  height: 100%;

  .hideCollapse {
    position: absolute;
    background: #000000;
    opacity: 0.3;
    width: 100%;
    height: 100%;
    top: 0px;
    z-index: 999;
  }

  .side-container {
    position: fixed;
    width: @notCollapse;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow-x: hidden;
    transition: width 0.28s;
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);

    .scrollbar-wrapper {
      overflow-x: hidden !important;
      background-color: #001529;

      .el-menu {
        height: 100%;
        width: 100% !important;

        .svg-icon {
          font-size: 20px;
          margin-right: 16px;
          vertical-align: middle;
        }

        .is-active > .el-submenu__title {
          color: #f4f4f5 !important;
        }
      }
    }
  }

  .main-container {
    position: relative;
    height: 100%;
    margin-left: @notCollapse;
    transition: margin-left 0.28s;

    .main-content {
      padding: 20px;
    }
  }

  .navbar-container {
    position: sticky;
    top: 0px;
    z-index: 99;
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    background-color: #ffffff;
  }

  &.isCollapse {
    .main-container {
      margin-left: @isCollapse;
    }

    .side-container {
      width: @isCollapse;
      .el-menu--collapse {
        .el-submenu {
          .el-submenu__title {
            span {
              height: 0;
              width: 0;
              overflow: hidden;
              visibility: hidden;
              display: inline-block;
            }

            .el-submenu__icon-arrow {
              display: none;
            }
          }
        }
      }
    }
  }

  &.mobile {
    .main-container {
      margin-left: 0px;
    }

    &.isCollapse {
      .side-container {
        transform: translate3d(-@isCollapse, 0, 0);
      }
    }
  }
}
</style>
