<template>
  <div class="error-log">
    <svg-icon icon-class="error-log" @click.native="show = true"></svg-icon>
    <el-dialog title="错误日志" :visible.sync="show" :append-to-body="true" top="10vh" width="80%">
      <el-table :data="logs" border>
        <el-table-column label="信息">
          <template v-slot="scope">
            <div class="info-content">
              <span class="message-title">Msg:</span>
              <el-tag type="danger">{{scope.row.err.message}}</el-tag>
            </div>
            <div class="info-content">
              <span class="message-title">Info:</span>
              <el-tag type="warning">{{scope.row.vm.$vnode.tag}} error in {{scoped.row.info}}</el-tag>
            </div>
            <div class="info-content">
              <span class="message-title">Url:</span>
              <el-tag type="success">{{scope.row.url}}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="详细">
          <template
            v-slot="scope"
          >{{scope.row.err.stack ? scope.row.err.stack : JSON.stringify(scope.row.err)}}</template>
        </el-table-column>
      </el-table>
      <template v-slot:footer>
        <el-button @click="handleClear" type="warning" icon="el-icon-delete">清除</el-button>
        <el-button @click="show = false" type="primary">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ErrorLog',
  data () {
    return {
      show: false
    }
  },
  computed: {
    logs () {
      return this.$store.state.errorLog.logs
    }
  },
  methods: {
    handleClear () {
      this.$store.dispatch('errorLog/clearErrorLog')
    }
  }
}
</script>

<style lang="less" scoped>
.error-log {
  display: inline-block;
  font-size: 17.5px;
  cursor: pointer;
  margin-right: 15px;

  /deep/ .el-dialog {
    .el-dialog__body {
      .info-content {
        &:not(:last-child) {
          margin-bottom: 5px;
        }

        .message-title {
          padding-right: 5px;
        }
      }
      td {
        &:nth-child(2) {
          display: block;
          height: 99px;
          overflow-y: scroll;
        }
      }
    }
  }
}
</style>