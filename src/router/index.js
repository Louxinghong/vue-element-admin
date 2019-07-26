import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(Router);

export const routes = [
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    alwaysShow: false,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () =>
          import(
            /*webpackChunkName: 'group-dashboard' */ '@/views/dashboard/index.vue'
          ),
        meta: { title: '首页', icon: 'el-icon-menu' }
      }
    ]
  },
  {
    path: '/person-info',
    name: 'PersonInfo',
    component: Layout,
    redirect: '/person-info/my-curriculum-vitae',
    meta: { title: '个人信息', icon: 'el-icon-user' },
    alwaysShow: true,
    children: [
      {
        path: 'my-curriculum-vitae',
        name: 'PersonInfoCurriculumVitae',
        redirect: '/person-info/my-curriculum-vitae/my-info',
        component: () =>
          import(
            /*webpackChunkName: 'group-dashboard' */ '@/views/person-info/my-curriculum-vitae/index.vue'
          ),
        meta: { title: '我的简历' },
        children: [
          {
            path: 'my-info',
            name: 'PersonInfoCurriculumVitaeMyinfo',
            component: () =>
              import(
                /*webpackChunkName: 'group-dashboard' */ '@/views/person-info/my-curriculum-vitae/my-info/index.vue'
              ),
            meta: { title: '备份' }
          }
        ]
      }
    ]
  }
]

export default new Router({
  base: process.env.BASE_URL,
  routes: routes
});
