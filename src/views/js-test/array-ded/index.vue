<template>
  <div class="container">
    <p>数组去重：双层for循环，Array.filter()和indexOf，Array.sort加一行遍历冒泡(相邻元素去重)，ES6的set去重，Object键值对</p>
    <div>
      <p>filter：{{ array1 }}</p>
      <el-button type="primary" @click="onFilter">filter去重</el-button>
      <p>去重后：{{ result1 }}</p>
    </div>
    <el-divider></el-divider>
    <div>
      <p>set：{{ array2 }}</p>
      <el-button type="primary" @click="onSet">set去重</el-button>
      <p>去重后：{{ result2 }}</p>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'

export default {
  name: 'ArrayDeduplication',
  data () {
    return {
      name: '123',
      array: [1, 3, 4, 1, 2, 3, 5, 1],
      array1: [],
      result1: [],
      array2: [],
      result2: []
    }
  },
  created () {
    this.array1 = cloneDeep(this.array)
    this.array2 = cloneDeep(this.array)
  },
  methods: {
    onFilter () {
      this.result1 = []
      this.array.filter((item, index) => {
        this.array.indexOf(item) === index ? this.result1.push(item) : ''
      })
    },
    onSet () {
      this.result2 = []
      this.result2 = Array.from(new Set(this.array2)) // 或者携程this.result2 = [...new Set(array)]
    }
  }
}
</script>
