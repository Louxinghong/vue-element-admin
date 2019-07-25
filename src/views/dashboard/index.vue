<template>
  <div id="content">
    <Content></Content>
  </div>
</template>

<script>
import Content from '@/views/dashboard/components/content'
export default {
  name: 'Dashboard',
  components: {
    Content
  }
}
</script>

<style lang="less" scoped>
#content {
  padding-top: 20px;
}
</style>
