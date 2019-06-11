<template>
    <div class="wrapper" :class="{'isCollapse': isCollapse}">
        <SideBar class="side-container"></SideBar>
        <div class="main-container">
            <NavBar class="navbar-container"></NavBar>
        </div>
        
    </div>
</template>

<script>
import SideBar from './components/Sidebar/SideBar'
import NavBar from './components/Navbar/NavBar'
import {mapState} from 'vuex'
export default {
    name: 'Layout',
    data () {
        return {

        }
    },
    computed:{
        ...mapState('status',['isCollapse'])
    },
    components: {
        SideBar,
        NavBar
    }
}
</script>

<style lang="less" >
.wrapper {
    .side-container {
        position: fixed;
        width: 250px;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        overflow-x: hidden;

        .el-scrollbar__wrap{
            overflow-x: hidden;
        }
    }

    .main-container {
        position: relative;
        margin-left: 250px;
        transition: margin-left 0.28s;

    }

    &.isCollapse {
        .main-container {
            margin-left: 62px;
        }

        .side-container {
            width: 62px;
        }
    }
}


</style>
