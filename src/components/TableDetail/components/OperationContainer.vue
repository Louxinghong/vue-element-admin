<template>
  <div class="operation-container">
    <div class="operation">
      <slot name="left-operation"></slot>
    </div>
    <div class="operation">
      <template v-if="filterable">
        <el-button type="primary" icon="el-icon-search" :loading="loading" @click="onSearch">查询</el-button>
        <el-button icon="el-icon-refresh" :loading="loading" @click="onReset">重置</el-button>
      </template>
      <slot name="right-operation"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OperationContainer',
  inject: [
    'filterData',
    'filterOptions'
  ],
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    filterable () {
      return this.filterData.length > 0
        
    }
  },
  methods: {
    onSearch () {},
    onReset () {}
  }
}
</script>

<style lang="less" scoped>
.operation-container {
  display: flex;
  justify-content: space-between;

  .operation {
    display: flex;

    /deep/ button {
      margin-bottom: 10px;
    }
  }
}
</style>
