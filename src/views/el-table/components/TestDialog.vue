<template>
  <el-dialog
    :title="type === 1 ? '编辑测试数据' : '新增测试数据'"
    :visible="show"
    :before-close="onClose"
    width="700px"
  >
    <el-form ref="form" :model="form" :rules="rules" label-width="50px">
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="时间" prop="time">
        <el-date-picker v-model="form.time" type="date" format="yyyy-MM-dd" placeholder="请选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-input v-model="form.status"></el-input>
      </el-form-item>
    </el-form>
    <template slot="footer">
      <el-button @click="onCancel">取消</el-button>
      <el-button type="primary" @click="onSubmit">确认</el-button>
    </template>
  </el-dialog>
</template>

<script>
import { cloneDeep } from 'lodash'

export default {
  name: 'TestDialog',
  props: {
    type: {
      type: Number,
      default: 0
    },
    show: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object
    }
  },
  data() {
    return {
      form: {
        title: '',
        time: '',
        status: ''
      },
      rules: {
        title: [{ required: true, message: '请输入标题', tigger: 'blur' }],
        time: [{ required: true, message: '请选择时间', tigger: 'change' }],
        status: [{ required: true, message: '请输入标题', tigger: 'blur' }]
      }
    }
  },
  watch: {
    type: {
      handler: function(val) {
        if (val === 1) {
          this.$nextTick(() => {
            this.form = cloneDeep(this.data)
          })
        }
      },
      immediate: true
    }
  },
  methods: {
    onClose(reload) {
      this.$refs.form.resetFields()
      this.$emit('close', typeof reload === 'function' ? false : reload)
    },
    onCancel() {
      this.onClose()
    },
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
        }
      })
    }
  }
}
</script>

<style>
</style>