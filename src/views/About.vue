<template>
  <div class="about">
    <h1>This is an about page</h1>
    <many-button>
      <template v-slot:mytext>
        <el-input placeholder="write something here" v-model="input_content">
        </el-input>
      </template>
    </many-button>
  </div>
</template>

<script>
export default {
  name: 'about',
  data(){
    return {
      input_content: ''
    }
  }
}
</script>

