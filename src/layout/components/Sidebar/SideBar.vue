<template>
    
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span slot="title">导航5</span>
            </el-menu-item>
            <el-menu-item index="6">
                <i class="el-icon-setting"></i>
                <span slot="title">导航6</span>
            </el-menu-item>
            <el-menu-item index="7">
                <i class="el-icon-setting"></i>
                <span slot="title">导航7</span>
            </el-menu-item>
            <el-submenu index="8">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="9">
                <i class="el-icon-setting"></i>
                <span slot="title">导航A</span>
            </el-menu-item>
            <el-menu-item index="10">
                <i class="el-icon-setting"></i>
                <span slot="title">导航B</span>
            </el-menu-item>
            <el-menu-item index="11">
                <i class="el-icon-setting"></i>
                <span slot="title">导航C</span>
            </el-menu-item>
            <el-menu-item index="12">
                <i class="el-icon-setting"></i>
                <span slot="title">导航D</span>
            </el-menu-item>
            <el-menu-item index="13">
                <i class="el-icon-setting"></i>
                <span slot="title">导航E</span>
            </el-menu-item>
            <el-menu-item index="14">
                <i class="el-icon-setting"></i>
                <span slot="title">导航F</span>
            </el-menu-item>
            <el-menu-item index="15">
                <i class="el-icon-setting"></i>
                <span slot="title">导航G</span>
            </el-menu-item>
            <el-menu-item index="16">
                <i class="el-icon-setting"></i>
                <span slot="title">导航H</span>
            </el-menu-item>
        </el-menu>
    </el-scrollbar>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'SideBar',
    data () {
        return {
            
        }
    },
    computed: {
        ...mapState('status',['isCollapse'])
    }
}
</script>

<style lang="less" scoped>

</style>
