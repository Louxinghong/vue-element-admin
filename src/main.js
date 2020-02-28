import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import components from './components'
import directives from './directives'
import filters from './filters'
import echarts from 'echarts'
import './permission'
import './errorHandler'
import './styles/main.less'
import './styles/reset.less'
import './icons'
import colorpicker from 'vcolorpicker-l'
Vue.use(colorpicker)

Vue.use(ElementUI, { size: 'small' })
Vue.prototype.$echarts = echarts

// 注册全局组件
Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})

// 注册全局自定义指令
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
