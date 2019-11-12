<template>
  <div class="table-detail-test">
    <table-detail :filter-data="filterData" />
  </div>
</template>

<script>
import { dictToOptions, ADDRESS_STATUS } from '@/api/dict'
import { optionsDict } from '@/utils'

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
          type: 'select',
          options: []
        },
        {
          name: 'date',
          label: '创建时间',
          type: 'date'
        }
      ]
    }
  },
  created () {
    const addressStatus = dictToOptions(ADDRESS_STATUS)
    console.log(addressStatus)
    optionsDict(this.filterData, 'address', 'options', addressStatus)
  }
}
</script>
