<template>
  <div class="content">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      border
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="日期">
        <template v-slot="scope">
          <template v-if="scope.row.isEdit">
            <el-date-picker v-model="scope.row.date" type="date" size="mini" placeholder="选择日期"></el-date-picker>
          </template>
          <template v-else>{{ scope.row.date }}</template>
        </template>
      </el-table-column>
      <el-table-column label="图片">
        <template v-slot="{ row }">
          <img :src="row.picUrl" />
        </template>
      </el-table-column>
      <el-table-column label="类型">
        <template v-slot="{ row }">
          <span class="status-tag" :class="{'s7 active': row.s7Status, 's7': !row.s7Status}">实</span>
          <span class="status-tag" :class="{'s8 active': row.s8Status, 's8': !row.s8Status}">S8</span>
          <span class="status-tag" :class="{'s9 active': row.s9Status, 's9': !row.s9Status}">S9</span>
        </template>
      </el-table-column>
      <el-table-column label="名称">
        <template v-slot="scope">
          <template v-if="scope.row.isEdit">
            <el-input v-model="scope.row.name" size="mini"></el-input>
          </template>
          <template v-else>{{ scope.row.name }}</template>
        </template>
      </el-table-column>
      <el-table-column label="地址">
        <template v-slot="scope">
          <template v-if="scope.row.isEdit">
            <el-input v-model="scope.row.place" size="mini"></el-input>
          </template>
          <template v-else>{{ scope.row.place }}</template>
        </template>
      </el-table-column>
      <el-table-column label="数量">
        <template v-slot="scope">
          <template v-if="scope.row.isEdit">
            <el-input-number
              v-model="scope.row.num"
              @change="handleChangeNums"
              :min="0"
              size="mini"
            ></el-input-number>
          </template>
          <template v-else>{{ scope.row.num }}</template>
        </template>
      </el-table-column>
      <el-table-column prop="singlePrice" label="单价"></el-table-column>
      <el-table-column label="总价">
        <template v-slot="{ row }">
          <p
            :style="{ color: row.num * row.singlePrice > 1000 ? 'red' : 'blue'}"
          >{{ row.num * row.singlePrice }}</p>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <template v-if="scope.row.isEdit">
            <el-button type="text" @click="onCancel(scope.$index)">取消</el-button>
            <el-button type="text" @click="onSubmit">保存</el-button>
          </template>
          <template v-else>
            <el-button @click="onEdit(scope)" type="text">编辑</el-button>
            <el-button type="text" @click="onDelete(scope.$index, tableData)">删除</el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>

    <p>总价格：{{ allShoppingsPrice }}</p>

    <el-button type="primary" @click="onAddDialog">新增测试数据</el-button>
    <el-table ref="testTable" :data="testTableData" tooltip-effect="dark" border>
      <el-table-column label="标题" prop="title"></el-table-column>
      <el-table-column label="时间" prop="time"></el-table-column>
      <el-table-column label="状态" prop="status"></el-table-column>
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button type="text" @click="onEditDialog(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <TestDialog
      :data="testData"
      :type="showDialogType"
      :show="showDialog"
      @close="onCloseTestDialog()"
    />
    <TableDetailTest />
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'
import TestDialog from './components/TestDialog.vue'
import TableDetailTest from './components/TableDetailTest.vue'

export default {
  name: 'ElementTable',
  components: {
    TestDialog,
    TableDetailTest
  },
  data () {
    return {
      tableData: [
        {
          date: '2016-05-03',
          picUrl: require('../../images/1.png'),
          name: 'elementUi',
          s7Status: false,
          s8Status: true,
          s9Status: false,
          place: 'China',
          num: 3,
          singlePrice: 1000
        },
        {
          date: '2018-1-1',
          picUrl: require('../../images/1.png'),
          name: '啥是佩奇',
          s7Status: true,
          s8Status: true,
          s9Status: false,
          place: 'China',
          num: 1,
          singlePrice: 900
        }
      ],
      testTableData: [
        {
          title: '陪小红度过漫长岁月',
          time: '2019-09-10',
          status: '开启'
        }
      ],
      multipleSelection: [],
      allShoppingsPrice: 0,
      thisPrice: 0,
      lastChangeNums: 0,
      selectRecord: {},
      testData: {},
      showDialogType: 0,
      showDialog: false
    }
  },

  methods: {
    handleChangeNums (val) {
      this.allShoppingsPrice = 0
      this.multipleSelection.forEach(
        item => (this.allShoppingsPrice += item.num * item.singlePrice)
      )
    },
    onEdit (scope) {
      const { row, $index } = scope
      this.selectRecord = cloneDeep(row)
      this.$set(this.tableData[$index], 'isEdit', true)
    },
    onDelete (index, data) {
      data.splice(index, 1)
    },
    onCancel (index) {
      this.selectRecord.isEdit = false
      console.log(this.selectRecord)
      this.$set(this.tableData, index, cloneDeep(this.selectRecord))
      this.selectRecord = {}
    },
    onSubmit () { },
    handleSelectionChange (val) {
      this.multipleSelection = val
      this.allShoppingsPrice = 0
      this.multipleSelection.forEach(
        item => (this.allShoppingsPrice += item.num * item.singlePrice)
      )
    },
    onAddDialog () {
      this.showDialogType = 0
      this.showDialog = true
    },
    onEditDialog (data) {
      this.showDialogType = 1
      this.showDialog = true
      this.testData = cloneDeep(data)
    },
    onCloseTestDialog (reload) {
      this.showDialogType = 0
      this.showDialog = false
      this.testData = {}
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  .status-tag {
    display: inline-block;
    margin-left: 3px;
    width: 22px;
    height: 22px;
    color: #ccc;
    border: 1px solid #ccc;
    border-radius: 50%;
    text-align: center;
    font-size: 12px;

    &.s7.active {
      color: #ffffff;
      border: none;
      background-color: #379efe;
    }

    &.s8.active {
      color: #ffffff;
      border: none;
      background-color: #fc8e12;
    }

    &.s9.active {
      color: #ffffff;
      border: none;
      background-color: #4dce1f;
    }
  }
}
</style>