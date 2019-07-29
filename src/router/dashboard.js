import Layout from '@/layout/index.vue'

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
  }
]