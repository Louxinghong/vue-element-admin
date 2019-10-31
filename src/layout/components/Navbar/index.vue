<template>
  <div id="content">
    <span class="hiddenornot" @click="changeCollapse">
      <i :class="{'el-icon-s-unfold': isCollapse, 'el-icon-s-fold': !isCollapse}"></i>
    </span>
    <Breadcrumb />
    <div class="right-set">
      <Search />
      <Screenfull />
      <Setting />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Breadcrumb from './components/Breadcrumb.vue'
import Search from './components/Search.vue'
import Screenfull from './components/Screenfull.vue'
import Setting from './components/Setting.vue'

export default {
  name: 'NavBar',
  components: {
    Breadcrumb,
    Search,
    Screenfull,
    Setting
  },
  computed: {
    isCollapse () {
      return this.$store.state.status.isCollapse
    }
  },
  methods: {
    ...mapActions('status', ['changeCollapse'])
  }
}
</script>

<style lang="less" scoped>
@commonheigth: 50px;

#content > * {
  float: left;
  margin-left: 20px;
}

#content {
  width: 100%;
  height: @commonheigth;
  line-height: @commonheigth;
}

.hiddenornot {
  cursor: pointer;
  outline: none;
  font-size: 19px;
}

.right-set {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin-right: 20px;
}
</style>
