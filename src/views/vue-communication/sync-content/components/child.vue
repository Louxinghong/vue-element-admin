<template>
  <div class="container">
    <p>
      <span>这是从父组件获取的title：</span>
      <span>{{ title }}</span>
    </p>
    <el-button type="primary" @click="onChangeFatherTitle" size="mini">子组件：改变父组件title</el-button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    onChangeFatherTitle () {
      this.$emit('update:title', '这是在子组件内改变父组件的title')
    }
  }
}
</script>

<style>
</style>