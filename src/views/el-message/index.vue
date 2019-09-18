<template>
  <div class="content">
    <el-button :plain="true" @click="openMessage1">普通</el-button>
    <el-button :plain="true" @click="openMessage2">成功</el-button>
    <el-button :plain="true" @click="openMessage3">警告</el-button>
    <el-button :plain="true" @click="openMessage4">错误</el-button>
  </div>
</template>

<script>
import { getNews } from '@/api/index'
export default {
  name: 'ElMessgae',
  data () {
    return {}
  },
  methods: {
    async openMessage1 () {
      const data = {
        time: '',
        pageSize: ''
      }

      data.time = new Date().getTime() + ''
      data.pageSize = 50

      await getNews(data)
      this.$message({ message: '这是一个成功的信息提醒' })
    },
    openMessage2 () {
      this.$message({ type: 'success', message: '这是一个成功的信息提醒' })
    },
    openMessage3 () {
      this.$message({ type: 'warning', message: '这是一个成功的信息提醒' })
    },
    openMessage4 () {
      this.$message({ type: 'error', message: '这是一个成功的信息提醒' })
    }
  }
}
</script>

<style>
</style>