<template>
  <el-dialog :title="type === 1? '编辑提示' : '新增提示'" :visible="show" :before-close="onClose">
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item label="标题" prop="title.elementValue">
        <el-input v-model="form.title.elementValue"></el-input>
      </el-form-item>
      <el-form-item label="活动名称" prop="name.elementValue">
        <el-input v-model="form.name.elementValue"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="onCancel">取消</el-button>
        <el-button @click="onSubmit">确认</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: Number
    },
    data: {
      type: Array
    }
  },
  data () {
    return {
      form: {
        title: {
          elementType: 'article',
          elementName: 'title',
          elementValue: ''
        },
        name: {
          elementType: 'article',
          elementName: 'name',
          elementValue: ''
        }
      },
      rules: {
        title: {
          elementValue: [
            { required: true, message: '请输入标题', trigger: 'blur' }
          ]
        },
        name: {
          elementValue: [
            { required: true, message: '请输入名称', trigger: 'blur' }
          ]
        }
      }
    }
  },
  watch: {
    isSubmit: {
      handler: function (val) {
        // console.log(val)
      },
      immediate: true
    },
    type: {
      handler: function (val) {
        if (val === 1) {
          this.form.title.elementValue = this.data.find(
            item =>
              item.elementType === 'article' && item.elementName === 'title'
          ).elementValue
          this.form.name.elementValue = this.data.find(
            item =>
              item.elementType === 'article' && item.elementName === 'name'
          ).elementValue
        }
      },
      immediate: true
    }
  },
  methods: {
    onClose (reload) {
      !reload && this.$refs.form.resetFields()
      this.$emit('close', typeof reload === 'function' ? false : reload, this.form)
    },
    onCancel () {
      this.onClose(false)
    },
    onSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          try {
            this.onClose(true)
          } catch { () => { } }
        }
      })
    }
  }
}
</script>

<style>
</style>