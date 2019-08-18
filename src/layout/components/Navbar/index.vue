<template>
  <div id="content">
    <span class="hiddenornot" @click="changeStatus">
      <i :class="{'el-icon-s-unfold': isCollapse, 'el-icon-s-fold': !isCollapse}"></i>
    </span>
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.path">
          <span v-if="index === breadcrumbs.length-1">{{ breadcrumb.meta.title }}</span>
          <a v-else @click="gotoPath(breadcrumb.path)">{{ breadcrumb.meta.title }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'NavBar',
  data () {
    return {
      breadcrumbs: null
    }
  },
  computed: {
    ...mapState('status', ['isCollapse'])
  },
  watch: {
    $route (route) {
      this.getroutepath()
    }
  },
  created () {
    this.getroutepath()
  },
  methods: {
    ...mapActions('status', ['changeStatus']),

    getroutepath () {
      let matched = this.$route.matched.filter(item => item.name)
      const firstpath = matched[0]
      if (firstpath && firstpath.name !== 'Dashboard') {
        matched = [{ path: '/dashboard', meta: { title: '首页' } }].concat(
          matched
        )
      }
      this.breadcrumbs = matched.filter(item => item.meta && item.meta.title)
    },
    gotoPath (data) {
      this.$router.push(data)
    }
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

.el-breadcrumb {
  height: @commonheigth;
  line-height: @commonheigth;
  font-size: 14px;
}

.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all 0.5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
