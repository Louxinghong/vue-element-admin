<template>
  <div id="content">
    <el-divider content-position="left">
      <i class="el-icon-eleme"></i>
    </el-divider>
    <h3>此系统只列举elementUi-vue各个组件中的部分功能、JStest、CSStest等</h3>
  </div>
</template>

<script>
// import { isEqual } from 'lodash'
export default {
  name: 'Content',
  data () {
    return {
      finished: 'green',
      unfinished: '#99a9bf'
    }
  },
  created () {
    const length = document.body.getBoundingClientRect()
    console.log(length)
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
</style>
