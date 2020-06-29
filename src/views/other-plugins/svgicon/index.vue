<template>
  <div id="content">
    <svg-icon v-for="(item, index) in icons" :key="index" :icon-class="item"></svg-icon>
  </div>
</template>

<script>
import icons from '@/icons/index.js'
export default {
  name: 'SvgIconExample',
  data() {
    return {
      icons: icons
    }
  }
}
</script>

<style lang="less" scoped>
.svg-icon {
  width: 50px;
  height: 50px;
  margin: 50px;
}
</style>
