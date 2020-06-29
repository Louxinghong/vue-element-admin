<template>
  <div id="content">
    <h1 ref="test">{{ test }}</h1>
    <el-button type="primary" @click="handleTest">点击更改test</el-button>
    <el-input v-model="testTwo"></el-input>
  </div>
</template>

<script>
export default {
  name: 'MyInfo',
  data() {
    return {
      test: 'begin',
      testTwo: 'nothing'
    }
  },
  methods: {
    handleTest() {
      this.test = 'end'
      this.testTwo = this.test
      this.$nextTick(() => {
        console.log('test in nextTick:' + this.$refs.test.innerText)
      })
      console.log('test not in nextTick:' + this.$refs.test.innerText)
    }
  }
}
</script>

