<template>
  <div class="content">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column label="图片">
        <template v-slot="{ row }">
          <img :src="row.picUrl" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="place" label="地址"></el-table-column>
      <el-table-column label="数量">
        <template v-slot="{ row }">
          <el-input-number v-model="row.num" @change="handleChangeNums" :min="0" size="small"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column prop="singlePrice" label="单价"></el-table-column>
      <el-table-column label="总价">
        <template v-slot="{ row }">
          <p>{{ row.num * row.singlePrice }}</p>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text">编辑</el-button>
          <el-button type="text" @click="handleDelete(scope.$index, tableData)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <p>总价格：{{ allShoppingsPrice }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          date: '2016-05-03',
          picUrl: require('../../images/1.png'),
          name: 'elementUi',
          place: 'China',
          num: 3,
          singlePrice: 1000
        },
        {
          date: '2018-1-1',
          picUrl: require('../../images/1.png'),
          name: '啥是佩奇',
          place: 'China',
          num: 1,
          singlePrice: 900
        }
      ],
      multipleSelection: [],
      allShoppingsPrice: 0,
      thisPrice: 0,
      lastChangeNums: 0
    }
  },

  methods: {
    handleChangeNums (val) {
      this.allShoppingsPrice = 0
      this.multipleSelection.forEach(item => this.allShoppingsPrice += item.num * item.singlePrice)
    },
    handleClick (row) {
      console.log(row)
    },
    handleDelete (index, data) {
      data.splice(index, 1)
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      this.allShoppingsPrice = 0
      this.multipleSelection.forEach(item => this.allShoppingsPrice += item.num * item.singlePrice)
    }
  }
}
</script>

<style lang="less" scoped>
</style>