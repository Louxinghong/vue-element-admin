import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/el-drawer',
    name: 'ElDrawer',
    component: Layout,
    redirect: '/el-drawer/drawer',
    alwaysShow: false,
    children: [
      {
        path: 'drawer',
        name: 'Drawer',
        component: () =>
          import(/*webpackChunkName: 'group-drawer' */ '@/views/el-drawer/index.vue'),
        meta: { title: 'el-drawer 抽屉', icon: 'drawer' }
      }
    ]
  }
]
