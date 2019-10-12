<template>
  <div class="container">
    <p>
      <span>父组件title：</span>
      <span>{{title}}</span>
    </p>
    <el-button type="primary" @click="onChangeTitle" size="mini">父组件：更改title</el-button>
    <child :title.sync="title" />
  </div>
</template>

<script>
import Child from './components/child.vue'

export default {
  name: 'VueSyncContent',
  components: {
    Child
  },
  data () {
    return {
      title: 'I am father title.'
    }
  },
  methods: {
    onChangeTitle () {
      this.title = 'I am father change-title'
    }
  }
}
</script>

<style>
</style>