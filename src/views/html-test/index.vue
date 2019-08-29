<template>
  <div class="content">
    <p>拖动图片到矩形框中</p>
    <div class="put-on" @drop="drop($event)" @dragover="allowDrop($event)" width="336" height="69"></div>
    <img src="../../images/1.png" :draggable="true" @dragstart="drag($event)" />
  </div>
</template>

<script>
export default {
  name: 'HtmlTest',
  methods: {
    allowDrop (ev) {
      ev.preventDefault()
    },
    drag (ev) {
      ev.dataTransfer.setData('Text', ev.target.id)
    },
    drop (ev) {
      ev.preventDefault()
      var data = ev.dataTransfer.getData('Text')
      ev.target.appendChild(document.getElementById(data))
    }
  }
}
</script>

<style lang="less" scoped>
.put-on {
  width: 350px;
  height: 70px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
</style>