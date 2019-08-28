<template>
  <div>
    <div class="content">
      <div :class="{ word: isChanged }">前端技术</div>
      <div class="beforeClick" :class="{ clicked: isChanged }"></div>
    </div>
    <div>
      <el-button type="primary" @click="handleStyle">改变样式</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CssTest',
  data () {
    return {
      isChanged: false
    }
  },
  methods: {
    handleStyle () {
      this.isChanged = !this.isChanged
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  text-align: center;
  height: 50px;
}
.word {
  height: 10px;
  color: blue;
}
.beforeClick {
  width: 0px;
}
.clicked {
  width: 80px;
  display: inline-block;
  transition: 1s;
  background-color: blue;
  padding: 2px 4px;
}
</style>