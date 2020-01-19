<template>
  <div class="table-container">
    <el-table ref="table" :data="data" border stripe>
      <template v-for="(item, index) in columnData">
        <!-- 操作列 -->
        <el-table-column
          v-if="item.operations"
          :label="item.label"
          :width="item.width"
          :fixed="item.fixed"
          :key="index"
        >
          <template v-slot="{ row, column, $index }">
            <template v-for="(operation, i) in item.operations">
              <el-button
                v-show="typeof operation.show === 'function' ? operation.show(row) : true"
                @click="operation.onClick(row, column, $index)"
                :disabled="typeof operation.disabled === 'function' ? operation.disabled(row, column, $index) : false"
                type="text"
                size="mini"
                :key="i"
              >{{ typeof operation.label === 'string' ? operation.label : operation.label(row, column, $index) }}</el-button>
            </template>
          </template>
        </el-table-column>
        <!-- 标签列 -->
        <el-table-column v-else-if="item.tags" :label="item.label" :width="item.width" :key="index">
          <template v-slot="{ row, column, $index }">
            <el-tag
              v-for="(tag, j) in (typeof item.tags === 'function' ? item.tags(row) : item.tags)"
              :key="j"
              v-show="typeof tag.show === 'function' ? tag.show(tag) : true"
              :type="tag.type"
              style="margin-right: 10px;"
            >{{ item.formatter ? item.formatter(row, column, tag, $index) : tag.label }}</el-tag>
          </template>
        </el-table-column>
        <!-- 图片列 -->
        <el-table-column
          v-else-if="item.image"
          :label="item.label"
          :width="item.width"
          :key="index"
        >
          <template v-slot="{ row }">
            <img
              :src="row[item.name]"
              :width="item.image.width || '100%'"
              :height="item.image.height || '25px'"
              :style="item.image.style || 'vertical-align: middle;'"
            />
          </template>
        </el-table-column>
        <!-- 开关列 -->
        <el-table-column
          v-else-if="item.switch"
          :label="item.label"
          :width="item.width"
          size="mini"
          :key="index"
        >
          <template v-slot="{ row }">
            <el-switch
              v-model="row[item.name]"
              @change="item.switch.onChange($event, row)"
              :active-value="typeof item.switch.activeValue !== undefined ? item.switch.activeValue : true"
              :inactive-value="typeof item.switch.inactiveValue !== undefined ? item.switch.inactiveValue : false"
              :active-text="item.switch.activeText || '开启'"
              :inactive-text="item.switch.inactiveText || '禁用'"
            ></el-switch>
          </template>
        </el-table-column>
        <!-- 普通列 -->
        <el-table-column
          v-else
          :type="item.type"
          :label="item.label"
          :prop="item.name"
          :formatter="item.formatter"
          :width="item.width"
          :selectable="item.selectable"
          :show-overflow-tooltip="item.ellipsis"
          :fixed="item.fixed"
          :key="index"
        >
          <template v-if="item.innerHtml" v-slot="{ row, column, $index }">
            <div v-html="item.innerHtml(row, column, row[item.name], $index)"></div>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TableContainer',
  inject: ['columnData'],
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
</style>