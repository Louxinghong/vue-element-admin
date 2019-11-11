<template>
  <div class="table-detail-test">
    <table-detail :filter-data="filterData" />
  </div>
</template>

<script>
export default {
  name: 'TableDetailTest',
  data () {
    return {
      filterData: [
        {
          name: 'name',
          label: '姓名',
          type: 'input'
        },
        {
          name: 'address',
          label: '地址',
          type: 'select'
        },
        {
          name: 'date',
          label: '创建时间',
          type: 'date'
        }
      ]
    }
  },
  created () {}
}
</script>
