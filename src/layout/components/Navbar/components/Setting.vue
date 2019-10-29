<template>
  <div class="setting">
    <svg-icon icon-class="setting" @click.native="onChangeSetting"></svg-icon>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Setting',
  methods: {
    onChangeSetting () {
      this.$store.dispatch('status/changeDrawer')
    }
  }
}
</script>

<style lang="less" scoped>
.setting {
  display: inline-block;
  font-size: 17.5px;
  cursor: pointer;
}
</style>
