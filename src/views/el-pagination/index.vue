<template>
  <div class="content">
    <el-table
      ref="table"
      v-loading="loading"
      element-loading-text="加载中"
      :data="tableData"
      :height="tableHeight"
      stripe
      border
    >
      <el-table-column label="序号" prop="id"></el-table-column>
      <el-table-column label="作者" prop="author_name"></el-table-column>
      <el-table-column label="标题" prop="title" show-overflow-tooltip></el-table-column>
      <el-table-column label="摘要" prop="summary" show-overflow-tooltip></el-table-column>
    </el-table>
    <el-pagination
      :total="pageContent.total"
      :current-page="pageContent.currentPage"
      :page-size="pageContent.pageSize"
      :page-sizes="[5, 10, 15, 20, 25]"
      @current-change="onCurrentChange"
      @size-change="onSizeChange"
      layout="total, sizes, prev, pager, next, jumper"
      align="right"
      background
    ></el-pagination>
  </div>
</template>

<script>
import { getNews } from '@/api/news'

export default {
  name: 'ElementPagination',
  data () {
    return {
      loading: false,
      tableHeight: null,
      allData: [],
      pageContent: {
        total: null,
        currentPage: null,
        pageSize: null
      },
      tableData: []
    }
  },
  created () {
    this.onGetNews()
  },
  methods: {
    async onGetNews () {
      const documentHeight = document.body.clientHeight

      this.tableHeight = documentHeight - 180

      const data = {
        time: '',
        pageSize: ''
      }

      data.time = new Date().getTime()
      data.pageSize = 100

      try {
        this.loading = true
        this.allData = await getNews(data)
        this.setPageData()
      } finally {
        this.loading = false
      }
    },
    setPageData () {
      this.pageContent = {
        total: this.allData.length,
        currentPage: 1,
        pageSize: 25
      }
      this.tableData = this.allData.filter((item, index) => {
        return index < this.pageContent.pageSize
      })
    },
    onCurrentChange (val) {
      this.tableData = this.allData.filter((item, index) => {
        return (
          index >= (val - 1) * this.pageContent.pageSize &&
          index < val * this.pageContent.pageSize
        )
      })
      this.pageContent.currentPage = val
    },
    onSizeChange (val) {
      this.pageContent.pageSize = val
      this.pageContent.currentPage = 1
      this.tableData = this.allData.filter((item, index) => {
        return index < this.pageContent.pageSize
      })
    }
  }
}
</script>

<style lang="less" scoped>
.el-pagination {
  margin-top: 20px;
}
</style>