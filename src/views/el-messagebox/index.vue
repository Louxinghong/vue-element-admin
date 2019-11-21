<template>
  <div class="content">
    <el-button type="text" @click="openOne">点击打开 Message Box one</el-button>
    <el-button type="text" :loading="loading" @click="openTwo">点击打开 Message Box two</el-button>
  </div>
</template>

<script>
import { getCnodeNews } from '@/api/news'

export default {
  name: 'ElementMessagebox',
  data () {
    return {
      loading: false
    }
  },
  methods: {
    openOne () {
      this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '你的邮箱是: ' + value
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    openTwo () {
      this.loading = true
      this.$prompt('请输入展期审核利率', '确认信息', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[^\u4e00-\u9fa5]+/,
        inputErrorMessage: '利率格式不正确',
        beforeClose: async (action, instance, done) => {
          if (action === 'confirm') {
            try {
              instance.confirmButtonLoading = true
              await getCnodeNews()
            // instance.confirmButtonText = '执行中...'
            } finally {
              instance.confirmButtonLoading = false
            }
            done()
          } else {
            done()
          }
        }
      }).then(val => {
        this.loading = false
        this.$message({
          type: 'success',
          message: '修改展期审核利率为' + val.value
        })
      }).catch(err => {
        this.loading = false
      })
    }
  }
}
</script>

<style>
</style>