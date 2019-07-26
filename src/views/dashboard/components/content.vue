<template>
  <div id="content">
    <el-timeline>
    <el-timeline-item timestamp="2019/4/12" placement="top" :color="finished">
      <el-card>
        <h4>整体框架搭建（侧栏、顶栏、面包屑、设置等）</h4>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/5/3~2019/6/3" placement="top" :color="unfinished">
      <el-card>
        <h4>更新个人信息模块</h4>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/5/3~2019/6/3" placement="top" :color="unfinished">
      <el-card>
        <h4>更新个人信息模块</h4>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/5/3~2019/6/3" placement="top" :color="unfinished">
      <el-card>
        <h4>更新个人信息模块</h4>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/5/3~2019/6/3" placement="top" :color="unfinished">
      <el-card>
        <h4>更新个人信息模块</h4>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/5/3~2019/6/3" placement="top" :color="unfinished">
      <el-card>
        <h4>更新个人信息模块</h4>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/5/3~2019/6/3" placement="top" :color="unfinished">
      <el-card>
        <h4>更新个人信息模块</h4>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/5/3~2019/6/3" placement="top" :color="unfinished">
      <el-card>
        <h4>更新个人信息模块</h4>
      </el-card>
    </el-timeline-item>
  </el-timeline>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data() {
    return {
      finished: 'green',
      unfinished: '#99a9bf',
      data: []
    }
  }
}
</script>

<style lang="less" scoped>

</style>
