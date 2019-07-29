<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      background-color="#001529"
      text-color="#a6adb4"
      active-text-color="#409eff"
      :default-active="activedPath"
      :collapse="isCollapse"
      :collapse-transition="false"
      :unique-opened="true">
      
      <SidebarLogo></SidebarLogo>
      <SideBarContent
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :basepath="route.path"> 
      </SideBarContent>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapState } from 'vuex'
import SideBarContent from './components/content'
import SidebarLogo from './components/sidebarLogo'
export default {
  name: 'SideBar',
  data () {
    return {
      color: ''
    }
  },
  components: {
    SideBarContent,
    SidebarLogo
  },
  computed: {
    ...mapState('status',['isCollapse', 'routes']),
    activedPath() {
      const { path } = this.$route
      return path
    }
  }
}
</script>

<style lang="less" scoped>

</style>
