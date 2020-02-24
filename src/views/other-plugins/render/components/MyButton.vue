<script>
export default {
  name: 'MyButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    text: {
      type: String,
      default: 'button'
    }
  },
  render (h) {
    /**
     * h类似于createElement，接收2个参数
     * 1 - 元素
     * 2 - 选项
     */
    return h('button', {
      // 相当于v-bind: class
      class: {
        btn: true,
        'btn-success': this.type === 'success',
        'btn-danger': this.type === 'danger',
        'btn-warning': this.type === 'warning',
        'btn-normal': this.type === 'normal',
        'btn-default': this.type === '' || this.type === 'default'
      },
      domProps: {
        innerText: this.text || '默认'
      },
      on: {
        click: this.handleClick
      }
    })
  },
  methods: {
    handleClick () {
      this.$emit('myClick')
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  width: 100px;
  height: 40px;
  line-height: 40px;
  border: 0;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.6;
}

.btn-success {
  color: #fff;
  background: #2ecc71;
}
.btn-danger {
  color: #fff;
  background: #e74c3c;
}
.btn-warning {
  color: #fff;
  background: #f39c12;
}
.btn-normal {
  color: #fff;
  background: #1a9ef7;
}
.btn-default {
  color: black;
  background: #fff;
}
</style>
