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
export default {
  name: 'SideBar',
  data () {
    return {
        
    }
  },
  components: {
    SideBarContent
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
