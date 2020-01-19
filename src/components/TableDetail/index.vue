<template>
  <div class="table-detail">
    <FilterContainer ref="filterContainer" />
    <OperationContainer ref="operationContainer" :loading="loading">
      <template v-slot:left-operation>
        <slot name="left-operation"></slot>
      </template>
      <template v-slot:right-operation>
        <slot name="right-operation"></slot>
      </template>
    </OperationContainer>
    <TableContainer ref="tableContainer" :loading="loading" :data="data" />
  </div>
</template>

<script>
import FilterContainer from './components/FilterContainer.vue'
import OperationContainer from './components/OperationContainer.vue'
import TableContainer from './components/TableContainer.vue'

export default {
  name: 'TableDetail',
  global: true,
  components: {
    FilterContainer,
    OperationContainer,
    TableContainer
  },
  provide () {
    return {
      filterData: this.filterData,
      filterOptions: this.filterOptions,
      columnData: this.columnData
    }
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    filterData: {
      type: Array,
      default: () => []
    },
    columnData: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      filterOptions: {}
    }
  },
  created () {
    const { filterData, filterOptions, $set } = this
    filterData.forEach(item => {
      item.trigger
        ? $set(filterOptions, item.name, item.initialValue || []) // 日期范围或次级联组件
        : $set(filterOptions, item.name, item.initialValue || '') // 输入框或下拉框组件
    })
  }
}
</script>
