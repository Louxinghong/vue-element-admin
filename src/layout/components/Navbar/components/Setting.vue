<template>
  <div class="setting">
    <svg-icon icon-class="setting" @click.native="onChangeSetting"></svg-icon>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  methods: {
    onChangeSetting() {
      this.$store.dispatch('status/changeDrawer')
    }
  }
}
</script>

<style lang="less" scoped>
.setting {
  display: inline-block;
  font-size: 17px;
  cursor: pointer;
}
</style>
