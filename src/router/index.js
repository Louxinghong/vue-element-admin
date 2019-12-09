import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/**
* hidden: true                   设为 true 则该路由不会显示在 sidebar，默认为 false
* alwaysShow: true               设为 true 则根路由会一直显示, 无论子路由的多少；没有设置的话, 则只会显示子路由
* redirect: noredirect           设为 noredirect 则该路由在 breadcrumb 上点击不会跳转
* name:'router-name'             设置名称以便路由被 <keep-alive> 缓存，必须设置
* meta : {
    title: 'title'               用来在 sidebar 和 breadcrumb 上显示标题，建议设置
    icon: 'icon class'           用来在 sidebar 上显示图标
    permission: 'loanAuditView'  用来控制该路由是否显示
    noCache: true                设为 true 则该页面不会被缓存，默认是 false
    breadcrumb: false            设为 false 则该页面不会显示在面包屑，默认是 true
    affix: true                  设为 true 则改页面会默认显示在标签栏，默认是 false
    activeMenu: '/example/list'  侧边栏会高亮配置的路径
  }
**/

var allRoutes = []
const requireRoutes = require.context('./routes', false, /^((?!(index)).)*.js$/)
export const routes = requireRoutes.keys().reduce((total, path) => {
  const module = requireRoutes(path).routes
  allRoutes = allRoutes.concat(module)
  total = allRoutes
  return total
}, {})
// console.log(routes)
export default new VueRouter({
  base: process.env.BASE_URL,
  routes: routes
})
