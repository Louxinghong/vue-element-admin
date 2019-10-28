<template>
  <div id="content">
    <Content />
  </div>
</template>

<script>
import Content from '@/views/dashboard/components/content.vue'
export default {
  name: 'Dashboard',
  components: {
    Content
  }
}
</script>

<style lang="less" scoped>
#content {
  padding-top: 5px;
}
</style>
