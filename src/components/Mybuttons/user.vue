<template>
    <div id="tpl-of-button">
        <el-button type="danger">click me</el-button>
        <el-button type="infor">click me</el-button>
        <el-button type="primary">click me</el-button>
        <el-button type="success">click me</el-button>
        <el-button type="warning">click me</el-button>
        <slot name="mytext"></slot>
    </div>
</template>

<script>
export default {
    name: 'ManyButton',
    data(){
        return {
            
        }
    }

}
</script>

<style scoped>
#tpl-of-button > *{
    margin-top: 10px;
}
</style>
