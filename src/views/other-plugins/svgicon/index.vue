<template>
  <div id="content">
    <svg-icon icon-class="logo"></svg-icon>
    <svg-icon icon-class="dashboard"></svg-icon>
    <svg-icon icon-class="other-plugins"></svg-icon>
    <svg-icon icon-class="person-info"></svg-icon>
    <svg-icon icon-class="table"></svg-icon>
  </div>
</template>

<script>
export default {
  name: 'SvgIconExample',
  data () {
    return {}
  },
  methods: {
    onClick () { }
  }
}
</script>

<style lang="less" scoped>
.svg-icon {
  width: 50px;
  height: 50px;
  margin: 50px;
}
</style>
