import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import Layout from '../layout/index.vue'

Vue.use(Router);

export const routes = [
  {
    path: "/",
    name: "home",
    component: Layout,
    meta: { title: '首页', icon: 'el-icon-menu'}
  },
  {
    path: "/about",
    name: "about",
    component: Layout,
    meta: { title: '关于我们', icon: 'el-icon-coordinate'}
  },
  {
    path: '/main',
    name: 'main',
    component: Layout,
    meta: { title: '主场', icon: 'el-icon-data-analysis'},
    children: [
      {
        path: '/main/myhome',
        name: 'myhome',
        component: Home,
        meta: {title: '我的主场'},
        children: [
          {
            path: '/main/myhome/mysmallhome',
            name: 'mysmallhoem',
            component: Home,
            meta: { title: '我的客场' }
          }
        ]
      }
    ]
  },
  {
    path: '/muhaha',
    name: 'muhaha',
    component: Layout,
    meta: { title: 'Xixix', icon: 'el-icon-menu'}
  }
]

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});
