<template>
    <div class="menu-wrapper">
        <template v-if="!item.children">
            <router-link :to="item.path">
                <el-menu-item :index="item.path">
                    <i :class="item.meta.icon"></i>
                    <span slot="title">{{item.meta.title}}</span>
                </el-menu-item>
            </router-link>
        </template>
        
        <el-submenu v-else :index="item.path">
            <template slot="title">
                <i :class="item.meta.icon"></i>
                <span slot="title">{{item.meta.title}}</span>
            </template>
            <side-bar-item
                v-for="child in item.children"
                :key="child.path"
                :item="child"
                :basepath="child.path">
            </side-bar-item>
        </el-submenu>
    </div>
</template>

<script>
export default {
    name: 'SideBarItem',
    data () {
        return {
            total_path: ''
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
      
    }
}
</script>

<style>

</style>
