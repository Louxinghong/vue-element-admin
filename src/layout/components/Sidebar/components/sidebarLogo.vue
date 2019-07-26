<template>
  <el-menu-item class="sidevar-logo">
    <svg-icon icon-class="logo"></svg-icon>
    <template v-slot:title>
      <span>{{ title }}</span>
    </template>
  </el-menu-item>
</template>

<script>
export default {
  name: 'SidebarLogo',
  data() {
    return {
      title: '管理系统'
    }
  }
}
</script>

<style>

</style>
