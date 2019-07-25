<template>
  <div class="menu-wrapper">
    <el-submenu v-if="hasChildren(item) && item.alwaysShow != false" :index="basepath">
      <template slot="title">
        <i :class="item.meta.icon != null ? item.meta.icon : ''"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </template>
      <side-bar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :basepath="totalPath(basepath, child.path)">
      </side-bar-item>
    </el-submenu>

    <template v-else-if="hasOneChildren(item) && item.alwaysShow === false">
      <router-link :to="'/' + childrenroute.path">
        <el-menu-item :index="'/' + childrenroute.path">
          <i :class="childrenroute.meta.icon"></i>
          <span slot="title">{{ childrenroute.meta.title }}</span>
        </el-menu-item>
      </router-link>
    </template>
    
    <template v-else-if="hasNoChildren(item)">
      <router-link :to="basepath">
        <el-menu-item :index="basepath">
          <i :class="item.meta.icon != null ? item.meta.icon : ''"></i>
          <span slot="title">{{ item.meta.title }}</span>
           
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SideBarItem',
  data () {
    return {
        childrenroute: []
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    basepath: {
      type: String,
      default: ''
    }
  },
  methods: {
    hasChildren(data) {
      if(data.children) {
        return true
      }
      else {
        return false
      }
    },
    hasOneChildren(data) {
      if(data.children) {
        data = data.children
        if(data.children) {
          return false
        }
        else {
          this.childrenroute = data[0]
          return true
        }
      }
    },
    hasNoChildren(data) {
      if(data.chidlren) {
        return false
      }
      else {
        return true
      }
    },
    totalPath(data, item) {
      return data + '/' + item
    }
  }
}
</script>

<style>

</style>
