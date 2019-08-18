<template>
  <div class="content">
    <el-button type="text" @click="onAddOpen">新增数据Dialog</el-button>
    <el-button type="text" @click="onEditOpen">编辑数据Dialog</el-button>
    <Dialog :type="dialogType" :data="dialogData" :show="showDialog" @close="onClose"></Dialog>
  </div>
</template>

<script>
import Dialog from './components/eldialog'
export default {
  name: 'ElDialog',
  components: {
    Dialog
  },
  data () {
    return {
      showDialog: false,
      dialogType: 0,
      dialogData: [],
      formData: {
        elementData: [
          {
            elementType: 'article',
            elementName: 'title',
            elementValue: '标题'
          },
          {
            elementType: 'article',
            elementName: 'name',
            elementValue: '名称'
          },
          {
            elementType: 'map',
            elementName: 'name',
            elementValue: '地图'
          }
        ]
      },
    }
  },
  methods: {
    onClose (reload, data) {
      if (reload) {
        this.dialogData = [data.title, data.name]
      }
      this.showDialog = false
    },
    onAddOpen () {
      this.dialogType = 0
      this.showDialog = true
    },
    onEditOpen () {
      this.dialogData = this.formData.elementData
      this.dialogType = 1
      this.showDialog = true
    }
  }
}
</script>

<style>
</style>