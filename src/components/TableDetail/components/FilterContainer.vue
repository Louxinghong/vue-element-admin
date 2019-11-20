<template>
  <div class="filter-container">
    <el-form ref="form" inline :model="filterOptions">
      <el-form-item
        v-for="(item, index) in filterData"
        :key="index"
        :label="item.label + ':'"
        :prop="item.name"
      >
        <el-input
          v-if="item.type === 'input' "
          v-model="filterOptions[item.name]"
          :placeholder="'请输入' + item.label"
          clearable
        ></el-input>
        <el-select
          v-else-if="item.type === 'select'"
          v-model="filterOptions[item.name]"
          :placeholder="'请选择' + item.label"
          clearabel
        >
          <el-option v-for="(i, j) in item.options" :key="j" :value="i.value" :label="i.label"></el-option>
        </el-select>
        <el-date-picker
          v-else-if="item.type === 'date' || item.type === 'datetime'"
          :type="item.type"
          v-model="filterOptions[item.name]"
          :value-format="item.format"
          clearable
        ></el-date-picker>
        <el-date-picker
          v-else-if="item.type === 'daterange' || item.type === 'datetimerange'"
          :type="item.type"
          v-model="filterOptions[item.name]"
          :value-format="item.format"
          start-placeholde="开始日期"
          end-placeholde="结束日期"
          clearable
        ></el-date-picker>
        <el-cascader
          v-else-if="item.type === 'cascader'"
          v-model="filterOptions[item.name]"
          :options="item.options"
          :props="item.props"
          :show-all-levels="false"
          clearable
        ></el-cascader>
        <template v-else-if="item.type === 'numberrange'">
          <NumberRange v-model="filterOptions[item.name]" />
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'FilterContainer',
  inject: ['filterData', 'filterOptions']
}
</script>

<style lang="less" scoped>
</style>