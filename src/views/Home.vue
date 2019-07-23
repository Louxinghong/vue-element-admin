<template>
  <div class="home">
    <p>111</p>
    <table-view mytableviewcontent="woho~ big big world">
      <template v-slot:my_content>
        <el-button type="danger">戳我</el-button>
        <el-dropdown>
          <el-button type="text" icon="el-icon-circle-close"></el-button>
          <template v-slot:dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="closeOthers">关闭其他</el-dropdown-item>
              <el-dropdown-item command="closeAll">关闭所有</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
    </table-view>
    <hr>
    <ChildContent :childcontent="messageContent"></ChildContent>

    <el-table
      v-loading="loading"
      element-loading-text="玩命加载中"
      :data="tableData">
      <template v-for="(column, i) in tableLabel">
        <el-table-column
          :prop="column.name"
          :label="column.label"
          width="180"
          :key="i"
        >
        </el-table-column>
      </template>
      <el-table-column fixed="right" label="操作" width="120" :key='i'>
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-button type="warning" v-on:click="comeonClick()">戳我啊</el-button>

    <el-select v-model="optionValue" placeholder="请输入">
      <el-option 
        v-for="option in options" 
        :key="option.value" 
        :label="option.label" 
        :value="option.value">
      </el-option>
    </el-select>

    <el-date-picker
      v-model="dateValue"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    >
    </el-date-picker>

    <p>????????????{{ whatisay}}</p>
  </div>
</template>

<script>
import ChildContent from './child'
export default {
  name: "home",
  provide() {
    return {
      info_of_parent: 'Woooooooooo~'
    }
  },
  data(){
    return {
      whatisay: '',
      messageContent: 'you are my first child',
      tableLabel: [
        {
          name: 'applyDate',
          label: '申请日期'
        },
        {
          name: 'userName',
          label: '申请人'
        },
        {
          name: 'userPhone',
          label: '申请电话'
        }
      ],
      tableData: [
        {
          applyDate: '2016-05-03',
          userName: '小红123123',
          userPhone: '13788889999'
        }, 
        {
          applyDate: '2016-05-02',
          userName: '小明',
          userPhone: '13788889999'
        }, 
        {
          applyDate: '2016-05-04',
          userName: '小兰',
          userPhone: '13788889999'
        }
      ],
      loading: true,
      options: [
        {
          value: '选项1',
          label: '宁波大学'
        },
        {
          value: '选项2',
          label: '宁波工程学院'
        },
        {
          value: '选项3',
          label: '宁波大学科技学院'
        },
        {
          value: '选项4',
          label: '浙江纺织学院'
        }
      ],
      optionValue: '',
      dateValue: ''
    }
  },
  components: {
    ChildContent
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    comeonClick() {

      this.$prompt('请输入备注','提示',{})
      .then(({value}) => {
        this.whatisay = value
      }).catch(() => {

      })
      this.loading = !this.loading;
      console.log(this.optionValue)
      var result = [
        {
          subject: 'math',
          score: 88
        },
        {
          subject: 'chinese',
          score: 95
        },
        {
          subject: 'english',
          score: 80
        }
      ];
      var sum = result.reduce((prev, cur) => {
        return cur.score+ prev;
      }, 0);//0为初始值
      console.log(sum);
    }
  }
};
</script>
