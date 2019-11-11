<template>
  <div class="operation-container">
    <!-- <div class="operation">
      <slot name="left-operation"></slot>
    </div>
    <div class="operation">
      <template v-if="filterable">
        <el-button type="primary" icon="el-icon-search" :loading="loading" @click="onSearch">查询</el-button>
        <el-button icon="el-icon-refresh" :loading="loading" @click="onReset">重置</el-button>
      </template>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'OperationContainer'
  // inject: [
  //   'filterData',
  //   'filterOptions'
  // ]
}
</script>
