<template>
  <div id="child">
    <el-rate v-model="rate_star" show-text></el-rate>
    <h1>{{ childcontent }}</h1>

    <el-tag type="success" closable="closable">
      标签一{{ info_of_parent }}
    </el-tag>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40000"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'child',
  inject: [
    'info_of_parent'
    ],
  props: {
    childcontent: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      rate_star: null,
      currentPage: 1
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style>

</style>
