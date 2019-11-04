<template>
  <div class="person-content">
    <el-dropdown>
      <div class="person-avatar">
        <img :src="avatarUrl" alt />
        <!-- <el-avatar :size="size" :src="avatarUrl"></el-avatar> -->
      </div>
      <el-dropdown-menu slot="dropdown">
        <router-link to="/person-info/person-center">
          <el-dropdown-item>
            <svg-icon icon-class="person-center"></svg-icon>
            <span>个人中心</span>
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item @click.native="handleLogout">
          <svg-icon icon-class="exit"></svg-icon>
          <span>退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { removeToken } from '@/utils/auth.js'

export default {
  name: 'PersonContent',
  data () {
    return {
      // avatarUrl:
      //   'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      avatarUrl: require('../../../../images/avatar.jpg'),
      size: 'medium'
    }
  },
  methods: {
    handleLogout () {
      removeToken()
      this.$router.replace({ name: 'Login' })
    }
  }
}
</script>

<style lang="less" scoped>
.person-content {
  display: inline-block;
  cursor: pointer;
  height: 36px;
  vertical-align: middle;

  .person-avatar {
    height: 36px;

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
  }
}

.el-dropdown-menu {
  .el-dropdown-menu__item {
    span {
      margin-left: 5px;
    }
  }
}
</style>
