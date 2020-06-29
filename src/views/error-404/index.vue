<template>
  <div class="content">
    <svg-icon icon-class="error-404"></svg-icon>
    <div class="warnWord">抱歉，您访问的路径有误</div>
    <div class="go-btn">
      <el-button type="primary" size="small" @click="onGoBack">返回上页</el-button>
      <el-button type="primary" size="small" @click="onGoHome">回到首页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  methods: {
    onGoBack() {
      this.$router.go(-1)
    },
    onGoHome() {
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-top: 50px;

  .svg-icon {
    font-size: 130px;
  }

  .warnWord {
    margin: 20px 0px;
    font-size: 20px;
    color: #969292;
  }
}
</style>