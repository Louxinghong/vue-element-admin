<template>
    <el-menu class="navbar" mode="horizontal">

        <span class="hiddenornot" @click="changestatus"><i class="el-icon-s-fold"></i></span>
        <el-breadcrumb separator="/" class="mianbaoxie">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
    </el-menu>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    name: 'NavBar',
    data () {
        return {

        }
    },
    computed: {
        ...mapState('status',['isCollapse'])
    },
    methods: {
        ...mapActions('status',['changestatus']),
        
    }
}
</script>

<style lang="less" scoped>
.navbar > * {
    float: left;
    margin-left: 20px;
    font-size: 24px;
}

.navbar {
    width: 100%;
    height: 50px;
    line-height: 50px;
}

.hiddenornot {
    cursor: pointer;
}

.mianbaoxie {
    height: 50px;
    line-height: 50px;
    font-size: 15px;
}
</style>
