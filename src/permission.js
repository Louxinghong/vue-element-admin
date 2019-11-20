import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth.js'

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
      // console.log('get')
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
