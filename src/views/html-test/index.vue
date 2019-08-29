<template>
  <div class="content">
    <p>拖拽图片至矩形框</p>

    <!-- <transition-group name="drog" tag="ul">
      <li
        draggable="true"
        v-for="(item, index) in list"
        :key="index"
        @dragstart="dragStart($event, index)"
        @dragover="allowDrop"
        @drop="drop($event, index)"
      >{{ item }}</li>
    </transition-group>-->

    <div id="div1" @drop="drop($event)" @dragover="allowDrop($event)"></div>
    <img
      id="drag1"
      src="../../images/1.png"
      draggable="true"
      @dragstart="dragStart($event)"
      width="336"
      height="69"
    />
  </div>
</template>

<script>
import { concat } from 'lodash'
export default {
  name: 'HtmlTest',
  data () {
    return {
      list: [
        '1: lgg',
        '2: pgg',
        '3: ygg',
        '4: hgg'
      ]
    }
  },
  methods: {
    allowDrop (e) {
      e.preventDefault()
    },
    dragStart (e) {
      e.dataTransfer.setData('Text', e.target.id)
    },
    drop (e) {
      this.allowDrop(e)
      var data = e.dataTransfer.getData('Text')
      e.target.appendChild(document.getElementById(data))
    }
    // dragStart (e, index) {
    //   e.dataTransfer.setData('Text', index)
    // },
    // drop (e, index) {
    //   this.allowDrop(e)

    //   let arr = this.list.concat([])
    //   let dragIndex = e.dataTransfer.getData('Text')
    //   let temp = arr.splice(dragIndex, 1)

    //   arr.splice(index, 0, temp[0])
    //   this.list = arr
    // }
  }
}
</script>

<style lang="less" scoped>
#div1 {
  width: 350px;
  height: 70px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
.put-on {
  width: 350px;
  height: 70px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}

.drog-move {
  transition: transform 1s;
}
</style>