import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/el-table',
    name: 'ElTable',
    component: Layout,
    redirect: '/el-table/table',
    alwaysShow: false,
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () =>
          import(/*webpackChunkName: 'group-table' */ '@/views/el-table/index.vue'),
        meta: { title: 'el-table 表格', icon: 'table' }
      }
    ]
  }
]
