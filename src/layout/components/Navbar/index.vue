<template>
  <div id="content">
    <span class="hiddenornot" @click="changeCollapse">
      <i :class="{'el-icon-s-unfold': isCollapse, 'el-icon-s-fold': !isCollapse}"></i>
    </span>
    <Breadcrumb />
    <div class="right-set">
      <Search />
      <Screenfull />
      <ErrorLog />
      <Setting />
    </div>
    <div class="right-person">
      <Person />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Breadcrumb from './components/Breadcrumb.vue'
import Search from './components/Search.vue'
import Screenfull from './components/Screenfull.vue'
import ErrorLog from './components/ErrorLog.vue'
import Setting from './components/Setting.vue'
import Person from './components/Person.vue'

export default {
  name: 'NavBar',
  components: {
    Breadcrumb,
    Search,
    Screenfull,
    ErrorLog,
    Setting,
    Person
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
  right: 65px;
  bottom: 0;
}

.right-person {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin-right: 20px;
  vertical-align: middle;
}
</style>
