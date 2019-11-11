<template>
  <div class="table-detail">
    <FilterContainer />
    <OperationContainer />
    <TableContainer />
  </div>
</template>

<script>
import FilterContainer from './components/FilterContainer.vue'
import OperationContainer from './components/OperationContainer.vue'
import TableContainer from './components/TableContainer.vue'

export default {
  name: 'TableDetail',
  components: {
    FilterContainer,
    OperationContainer,
    TableContainer
  },
  provide () {
    return {
      filterData: this.filterData,
      filterOptions: this.filterOptions
    }
  },
  props: {
    filterData: {
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
    filterData.forEach(item => {
      item.trigger
        ? this.$set(filterOptions, item.name, item.initialValue || []) // 日期范围或次级联组件
        : this.$set(filterOptions, item.name, item.initialValue || '') // 输入框或下拉框组件
    })
  }
}
</script>
