<template>
  <div id="content">
    <tinymce v-model="tinymceContent"></tinymce>
    <p>显示输出：</p>
    <p v-html="tinymceContent"></p>
  </div>
</template>

<script>
export default {
  name: 'TinymceEditor',
  data () {
    return {
      tinymceContent: ''
    }
  },
  watch: {
    tinymceContent: {
      handler: function (val) {
        console.log(val)
      }
    }
  }
}
</script>

<style>
</style>
