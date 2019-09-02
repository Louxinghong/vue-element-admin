<template>
  <el-drawer title="系统配置" :visible.sync="showDrawer" direction="rtl" :size="size">
    <div class="setting-panel">
      <div class="panel-item">
        <span>隐藏侧栏</span>
        <el-switch class="panel-switch" v-model="isCollapse" />
      </div>
    </div>
  </el-drawer>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'SettingPanel',
  data () {
    return {}
  },
  computed: {
    size () {
      return this.$store.getters.isMobile ? '50%' : '400px'
    },
    showDrawer: {
      get () {
        return this.$store.state.status.showDrawer
      },
      set (val) {
        this.$store.dispatch('status/changeDrawer')
      }
    },
    isCollapse: {
      get () {
        return this.$store.state.status.isCollapse
      },
      set (val) {
        this.$store.dispatch('status/changeCollapse')
      }
    }
  }
  // methods: {
  //   ...mapActions('status', ['changeCollapse']),
  // }
}
</script>

<style lang="less" scoped>
.setting-panel {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;

  .panel-item {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    padding: 12px 0;
  }
  .panel-switch {
    float: right;
  }
}
</style>
