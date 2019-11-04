import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import components from './components'
import './styles/main.less'
import './styles/reset.less'
import './icons'
import { getToken } from '@/utils/auth.js'

Vue.use(ElementUI)

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})

// 不重定向白名单
const whiteList = ['/login', '/404']

router.beforeEach((to, from, next) => {
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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
