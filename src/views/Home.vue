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
          :key="i">
        </el-table-column>
      </template>
    
    </el-table>

    <el-button type="warning" v-on:click="comeonClick()">戳我啊</el-button>

    <div>123</div>
    <div>123</div>
    <div>123</div>
    <div>123</div>
    <div>123</div>
    <div>123</div>
  
    <setting-panel></setting-panel>
    <back-to-top></back-to-top>
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
      tableData: [{
        applyDate: '2016-05-03',
        userName: '小红123123',
        userPhone: '13788889999'
      }, {
        applyDate: '2016-05-02',
        userName: '小明',
        userPhone: '13788889999'
      }, {
        applyDate: '2016-05-04',
        userName: '小兰',
        userPhone: '13788889999'
      }],
      loading: true
    }
  },
  components: {
    ChildContent
  },

  methods: {
    comeonClick() {
      this.loading = !this.loading;
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
