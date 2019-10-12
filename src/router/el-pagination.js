import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/el-pagination',
    name: 'ElPagination',
    component: Layout,
    redirect: '/el-pagination/pagination',
    alwaysShow: false,
    children: [
      {
        path: 'pagination',
        name: 'Pagination',
        component: () =>
          import(/*webpackChunkName: 'group-pagination' */ '@/views/el-pagination/index.vue'),
        meta: { title: 'el-pagination 分页', icon: 'pagination' }
      }
    ]
  }
]
