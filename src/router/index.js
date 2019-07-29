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
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/person-info',
    name: 'PersonInfo',
    component: Layout,
    redirect: '/person-info/my-curriculum-vitae',
    meta: { title: '个人信息', icon: 'person-info' },
    alwaysShow: true,
    children: [
      {
        path: 'my-curriculum-vitae',
        name: 'PersonInfoCurriculumVitae',
        redirect: '/person-info/my-curriculum-vitae/my-info',
        component: () =>
          import(
            /*webpackChunkName: 'group-person-info' */ '@/views/person-info/my-curriculum-vitae/index.vue'
          ),
        meta: { title: '我的简历', icon: '' },
        children: [
          {
            path: 'my-info',
            name: 'PersonInfoCurriculumVitaeMyinfo',
            component: () =>
              import(
                /*webpackChunkName: 'group-person-info' */ '@/views/person-info/my-curriculum-vitae/my-info/index.vue'
              ),
            meta: { title: '备份', icon: '' }
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
