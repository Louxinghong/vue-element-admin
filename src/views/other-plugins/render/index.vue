<template>
  <div class="container">
    <MyButton :type="'success'" :text="'niu'" @myClick="onClick"></MyButton>
  </div>
</template>

<script>
import MyButton from './components/MyButton.vue'

export default {
  name: 'RenderFunction',
  components: {
    MyButton
  },
  data () {
    return {}
  },
  methods: {
    onClick () {
      console.log('1')
    }
  }
}
</script>

<style lang="less" scoped></style>
