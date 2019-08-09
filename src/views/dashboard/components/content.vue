<template>
  <div id="content">
    <el-timeline>
      <el-timeline-item timestamp="2019/4/12" placement="top" :color="finished">
        <el-card>
          <h4>整体框架搭建（侧栏、顶栏、面包屑、设置等）</h4>
        </el-card>
      </el-timeline-item>

      <el-timeline-item timestamp="2019/5/12" placement="top" :color="finished">
        <el-card>
          <h4>个人信息界面</h4>
        </el-card>
      </el-timeline-item>

      <el-timeline-item timestamp="2019/7/29" placement="top" :color="finished">
        <el-card>
          <h4>svg-icon组件</h4>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <!-- <el-button type="primary" @click="onCompare">比较</el-button> -->
  </div>
</template>

<script>
// import { isEqual } from 'lodash'
export default {
  name: 'Content',
  data() {
    return {
      finished: 'green',
      unfinished: '#99a9bf'
    }
  },
  methods: {
    // onCompare () {
    //   if (isEqual(this.finished, this.unfinished)) {
    //     console.log('same')
    //   }
    //   else {
    //     console.log('different')
    //   }
    // }
  }
}
</script>

<style lang="less" scoped>
</style>
