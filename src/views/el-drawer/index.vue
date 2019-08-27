<template>
  <div class="content">
    <el-button type="text" @click="onOpenTableDrawer">打开嵌套表格的Drawer</el-button>
    <el-button type="text" @click="onOpenFormDrawer">打开嵌套表单的Drawer</el-button>

    <el-drawer title="该Drawer嵌套了表格" :visible.sync="tableDrawer" direction="rtl" size="40%">
      <el-table :data="tableData">
        <el-table-column prop="name" label="名称" width="150"></el-table-column>
        <el-table-column prop="position" label="位置" width="150"></el-table-column>
        <el-table-column prop="expert" label="擅长"></el-table-column>
      </el-table>
    </el-drawer>

    <el-drawer
      title="我嵌套了 Form !"
      :before-close="onClose"
      :visible.sync="formDrawer"
      direction="ltr"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="formData">
          <el-form-item label="名称">
            <el-input v-model="formData.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="名称">
            <el-input v-model="formData.position" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button>取 消</el-button>
            <el-button type="primary" :loading="loading">确 定</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  name: 'ElDrawer',
  data () {
    return {
      tableDrawer: false,
      formDrawer: false,
      loading: false,
      tableData: [
        {
          name: '小红',
          position: 'ADC',
          expert: '1V5'
        },
        {
          name: '小港',
          position: '打野',
          expert: '养猪'
        },
        {
          name: '崽种',
          position: '上单',
          expert: '挂机'
        }
      ],
      formData: {
        name: '',
        position: ''
      }
    }
  },
  methods: {
    onOpenTableDrawer () {
      this.tableDrawer = true
    },
    onOpenFormDrawer () {
      this.formDrawer = true
    },
    onClose (done) {
      this.$confirm('确定关闭吗？').then(() => {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          done()
        }, 2000)
      }).catch(() => { })
    }
  }
}
</script>

<style lang="less" scoped>
.el-form,
.el-table {
  margin: 20px;
}
</style>