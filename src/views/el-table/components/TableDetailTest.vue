<template>
  <div class="table-detail-test">
    <table-detail
      :loading="loading"
      :filter-data="filterData"
      :column-data="columnData"
      :data="data"
    >
      <template v-slot:left-operation>
        <el-button icon="el-icon-plus">新增</el-button>
      </template>
    </table-detail>
  </div>
</template>

<script>
import { dictToOptions, ADDRESS_STATUS } from '@/api/dict'
import { optionsDict } from '@/utils'

export default {
  name: 'TableDetailTest',
  data () {
    return {
      loading: false,
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
      ],
      columnData: [
        {
          name: 'name',
          label: '姓名'
        },
        {
          name: 'address',
          label: '地址'
        },
        {
          name: 'date',
          label: '创建时间'
        },
        {
          name: 'isOver',
          label: '是否毕业',
          width: 150,
          switch: {
            activeValue: true,
            inactiveValue: false,
            activeText: '是',
            inactiveText: '否',
            onChange: ($event, row) => alert($event)
          }
        },
        {
          name: 'avatarImg',
          label: '头像',
          image: {
            width: '25px'
          },
          width: 50
        },
        {
          label: '标签',
          tags: [
            {
              label: 'LOL',
              type: 'success'
            },
            {
              label: '90后',
              type: 'warning'
            },
            {
              label: '程序员',
              type: 'danger'
            }
          ]
        },
        {
          label: '操作',
          width: 90,
          operations: [
            {
              label: '毕业',
              onClick: row => this.$message.success('毕业啦')
            },
            {
              label: '考研',
              onClick: row => this.onPostgraduate(row)
            }
          ]
        }
      ],
      data: [
        {
          name: 'louxinghong',
          address: 'here',
          date: '2019-10-10',
          isOver: true,
          avatarImg: require('../../../images/1.png')
        },
        {
          name: 'lgglgglggl',
          address: 'there',
          date: '2019-10-10',
          isOver: false,
          avatarImg: require('../../../images/person.jpg')
        }
      ]
    }
  },
  created () {
    const addressStatus = dictToOptions(ADDRESS_STATUS)
    console.log(addressStatus)
    optionsDict(this.filterData, 'address', 'options', addressStatus)
  },
  methods: {
    onPostgraduate () {
      this.$notify.success({ title: '成功', message: '考研成功' })
    }
  }
}
</script>
