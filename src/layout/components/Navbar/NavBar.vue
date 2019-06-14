<template>
    <el-menu class="navbar" mode="horizontal">

        <span class="hiddenornot" @click="changestatus"><i :class="{'el-icon-s-unfold': isCollapse, 'el-icon-s-fold': !isCollapse}"></i></span>
        <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.path">
                <span v-if="index == breadcrumbs.length-1">{{breadcrumb.meta.title}}</span>
                <a v-else :href="breadcrumb.meta.path">{{breadcrumb.meta.title}}</a>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </el-menu>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    name: 'NavBar',
    data () {
        return {
            breadcrumbs: null
        }
    },
    computed: {
        ...mapState('status',['isCollapse'])
    },
    watch: {
        $route (route) {
            this.getroutepath();
        }
    },
    created () {
        this.getroutepath();
    },
    methods: {
        ...mapActions('status',['changestatus']),
        
        getroutepath() {
            let matched = this.$route.matched.filter(item => item.name);
            const firstpath = matched[0];
            if(firstpath && firstpath.name != 'home') {
                matched = [{ path: '/', meta: { title: '首页' }}].concat(matched);
            }
            this.breadcrumbs = matched.filter(item => item.meta && item.meta.title);
        }
    }
}
</script>

<style lang="less" scoped>
@commonheigth: 50px;

.navbar > * {
    float: left;
    margin-left: 20px;
    font-size: 24px;
}

.navbar {
    width: 100%;
    height: @commonheigth;
    line-height: @commonheigth;
}

.hiddenornot {
    cursor: pointer;
    outline: none;
}

.breadcrumb {
    height: @commonheigth;
    line-height: @commonheigth;
    font-size: 15px;
}
</style>
