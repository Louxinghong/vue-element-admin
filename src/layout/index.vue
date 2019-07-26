<template>
  <div class="wrapper" :class="{'isCollapse': isCollapse}">
    <SideBar class="side-container"></SideBar>
    <div class="main-container">
      <NavBar class="navbar-container"></NavBar>
      <main-content class="main-content"></main-content>
    </div>
    <setting-panel></setting-panel>
    <back-to-top></back-to-top>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SideBar from '@/layout/components/Sidebar/index.vue'
import NavBar from '@/layout/components/Navbar/index.vue'
import MainContent from '@/layout/components/Maincontainer/index.vue'
import BackToTop from '@/layout/components/Backtotop/index.vue'
import SettingPanel from '@/layout/components/Settingpanel/index.vue'

export default {
  name: 'Layout',
  data () {
    return {

    }
  },
  computed:{
    ...mapState('status',['isCollapse'])
  },
  components: {
    SideBar,
    NavBar,
    MainContent,
    BackToTop,
    SettingPanel
  }
}
</script>

<style lang="less">
@isCollapse: 62px;
@notCollapse: 250px;

.wrapper {
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
      }
    }
  }

  .main-container {
    position: relative;
    margin-left: @notCollapse;
    transition: margin-left 0.28s;

    .main-content {
      padding: 0px 20px;
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
}


</style>
