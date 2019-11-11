<template>
  <div class="number-range">
    <el-input :style="{width: inputWidth}" v-model="from" @change="onChange"></el-input>
    <span style="margin: 0 8px;">-</span>
    <el-input :style="{width: inputWidth}" v-model="to" @change="onChange"></el-input>
  </div>
</template>

<script>
export default {
  name: 'NumberRange',
  global: true,
  model: {
    prop: 'data',
    event: 'change'
  },
  props: {
    data: {
      type: Array,
      default: () => ['', '']
    },
    inputWidth: {
      type: String,
      default: '60px'
    }
  },
  data () {
    return {
      from: '',
      to: ''
    }
  },
  watch: {
    data: {
      handler: function (val) {
        this.$nextTick(() => {
          this.form = val[0]
          this.to = val[1]
        })
      }
    }
  },
  methods: {
    onChange (val) {
      this.$emit('change', [this.form, this.to])
    }
  }
}
</script>

<style>
</style>