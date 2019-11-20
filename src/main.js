import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import components from './components'
import filters from './filters'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import './styles/main.less'
import './styles/reset.less'
import './icons'
import { getToken } from '@/utils/auth.js'

Vue.use(ElementUI)

// 注册全局组件
Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 不重定向白名单
const whiteList = ['/login', '/404']

// 进度条配置
NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start()

  if (!to.matched || to.matched.length === 0) {
    next('/404')
  } else {
    if (getToken()) {
      console.log('get')
      if (to.path === '/login') {
        next({ path: '/' })
      } else {
        next()
      }
    } else {
      if (whiteList.includes(to.path)) {
        next()
      } else {
        next({ name: 'Login', query: { redirect: to.path } })
      }
    }
  }
})

router.afterEach((to, from) => {
  NProgress.done()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
