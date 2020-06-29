<template>
  <div class="container">
    <div id="box" @mouseover="onMouseOver" @mouseout="onMouseOut">
      <ul id="ulTag">
        <li>
          <img src="@/images/avatar.jpg" alt />
        </li>
        <li>
          <img src="@/images/background-image.jpg" alt />
        </li>
        <li>
          <img src="@/images/person.jpg" alt />
        </li>
        <li>
          <img src="@/images/avatar.jpg" alt />
        </li>
      </ul>

      <ol id="olTag">
        <li @click="onOlLiMove(0)"></li>
        <li @click="onOlLiMove(1)"></li>
        <li @click="onOlLiMove(2)"></li>
        <li></li>
      </ol>
      <div class="left" id="left" @click="onLeft">
        <span>←</span>
      </div>
      <div class="right" id="right" @click="onRight">
        <span>→</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JsTest',
  data() {
    return {
      timer: setInterval(this.move, 2000),
      timer1: null,
      cur: 0,
      target: 0,
      moveTarget: 0,
      speed: 0
    }
  },
  mounted() {
    this.buttonShow()
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    onLeft() {
      this.moveTarget = 400
      this.target = this.moveTarget + this.cur
      if (this.target >= 380) {
        this.cur = -1200
        this.target = -800
      }
      this.sport(this.target)
      this.buttonShow()
    },
    onRight() {
      this.moveTarget = -400
      this.target = this.moveTarget + this.cur
      if (this.target <= -1200) {
        this.cur = 0
        this.target = -400
      }
      this.sport(this.target)
      this.buttonShow()
    },
    onOlLiMove(index) {
      this.target = -(index * 400)
      this.sport(this.target)
      this.buttonShow()
    },
    move() {
      if (this.target <= -1200) {
        this.cur = 0
        this.target = -400
      } else {
        this.target -= 400
      }
      this.sport(this.target)
      this.buttonShow()
    },
    sport(data) {
      clearInterval(this.timer1)
      this.timer1 = setInterval(() => {
        if (this.cur === data) {
          clearInterval(this.timer1)
        } else {
          this.speed = (data - this.cur) / 10
          this.cur = this.cur + this.speed
          document.getElementById('ulTag').style.left = this.cur + 'px'
        }
      }, 20)
    },
    buttonShow() {
      var olLi = document.getElementById('olTag').getElementsByTagName('li')
      var index = -Math.round(this.target / 400)
      console.log(index)
      index === 3 ? (index = 0) : index
      for (let j = 0; j < olLi.length; j++) {
        olLi[j].style.background = ''
      }
      olLi[index].style.background = '#ffffff'
    },
    onMouseOver() {
      clearInterval(this.timer)
    },
    onMouseOut() {
      this.timer = setInterval(this.move, 2000)
    }
  }
}
</script>

<style lang="less" scoped>
#box {
  position: relative;
  display: inline-block;
  width: 400px;
  height: 300px;
  overflow: hidden;

  ul {
    position: relative;
    width: 400px;
    height: 300px;
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-flow: row nowrap;

    img {
      width: 400px;
      height: 300px;
    }
  }

  ol {
    position: absolute;
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 50px;
    top: 270px;
    left: 50%;
    transform: translateX(-50%);

    li {
      &:not(:last-child) {
        width: 10px;
        height: 10px;
        border: 1px solid rgb(255, 255, 255);
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }

  .left,
  .right {
    position: absolute;
    cursor: pointer;
    top: 140px;
    width: 25px;
    height: 20px;
    color: #ffffff;
    opacity: 0.5;
  }

  .left {
    background-color: rgba(172, 170, 170, 0.384);

    text-align: center;
  }

  .right {
    right: 0;
  }

  .left:hover,
  .right:hover {
    opacity: 1;
  }
}
</style>
