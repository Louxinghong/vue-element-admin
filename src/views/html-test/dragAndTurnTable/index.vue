<template>
  <div class="content">
    <p>拖拽图片至矩形框</p>
    <div class="drag-drop">
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
        src="../../../images/1.png"
        draggable="true"
        @dragstart="dragStart($event)"
        width="69"
        height="69"
      />
    </div>
    <el-divider></el-divider>
    <p>转盘抽奖活动</p>
    <div class="big-turntable">
      <div v-for="(item, index) in awards" :key="index">
        <div class="award award4" v-if="index === 4" @click="onStart">
          <div>{{ item.name }}</div>
        </div>
        <div v-else :class="{ 'active': index === current[select] && isLottery }" class="award">
          <div>{{ item.name }}</div>
        </div>
      </div>
    </div>
    <el-divider></el-divider>
    <el-button type="primary" @click="onRotate">旋转</el-button>
    <img
      src="../../../images/1.png"
      alt="啥是佩奇啊"
      :style="isRotate ? { transform: roatetAngle, transition: rotateTransition } : ''"
    />
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  name: 'HtmlTest',
  data() {
    return {
      list: [
        '1: lgg',
        '2: pgg',
        '3: ygg',
        '4: hgg'
      ],
      awards: [
        { id: '0', name: '啥是佩奇0号啊' },
        { id: '1', name: '啥是佩奇1号啊' },
        { id: '2', name: '啥是佩奇2号啊' },
        { id: '3', name: '啥是佩奇3号啊' },
        { id: '4', name: '开始' },
        { id: '5', name: '啥是佩奇5号啊' },
        { id: '6', name: '啥是佩奇6号啊' },
        { id: '7', name: '啥是佩奇7号啊' },
        { id: '8', name: '啥是佩奇8号啊' }
      ],
      current: [0, 1, 2, 5, 8, 7, 6, 3],
      select: 0,
      speed: 200, // 速度
      diff: 15, // 速度增加值
      award: {}, // 获得的奖项
      time: 0, // 记录开始抽奖时的时间
      rotateNums: 0,
      isRotate: true,
      isLottery: false
    }
  },
  computed: {
    roatetAngle() {
      return `rotate(${this.rotateNums}deg)`
    },
    rotateTransition() {
      return '5s'
    }
  },
  methods: {
    allowDrop(e) {
      e.preventDefault()
    },
    dragStart(e) {
      e.dataTransfer.setData('Text', e.target.id)
    },
    drop(e) {
      this.allowDrop(e)
      var data = e.dataTransfer.getData('Text')
      e.target.appendChild(document.getElementById(data))
    },
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
    onStart() {
      this.drawAward()
      this.isLottery = true
      this.time = Date.now()
      this.speed = 200
      this.diff = 15
    },
    drawAward() {
      setTimeout(() => {
        this.award = this.awards[3]
      }, 1000)
      this.move()
    },
    move() {
      window.timeout = setTimeout(() => {
        this.select++
        if (this.select > 7) {
          this.select = 0
        }
        if (this.award.id && (Date.now() - this.time) / 1000 > 2) {
          this.speed += this.diff

          if ((Date.now() - this.time) / 1000 > 4 && this.award.id == this.awards[this.current[this.select]].id) {
            clearTimeout(window.timeout)
            setTimeout(() => {
              alert('恭喜你，抽中了' + this.award.name)
            }, 0)
            return
          }
        } else {
          this.speed -= this.diff
        }
        this.move()
      }, this.speed)
    },
    onRotate() {
      // this.isRotate = !this.isRotate 若为false就恢复初始样式
      this.rotateNums = this.rotateNums + (Math.random() + 60) * 70
    }
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

.drog-move {
  transition: transform 1s;
}

.big-turntable {
  display: flex;
  width: 370px;
  flex-flow: row wrap;
  background: url("../../../images/1.png") no-repeat;
  background-size: 100%;
  .award {
    display: inline-block;
    position: relative;
    width: 100px;
    height: 100px;
    margin: 10px;
    background: #e5e905;

    div {
      position: absolute;
      text-align: center;
      top: 50%;
      left: 50%;
      font-size: 10px;
      transform: translate(-50%, -50%);
    }
    &.award4 {
      background: #ffffff;
      border: 1px solid black;
      border-radius: 5px;
      cursor: pointer;
    }
    &.active {
      background: crimson;
    }
    // &:not(.award4) {
    //   background: crimson;
    // }
  }
}
</style>