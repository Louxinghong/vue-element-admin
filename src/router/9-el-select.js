import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/el-select',
    name: 'ElSelect',
    component: Layout,
    redirect: '/el-select/select',
    alwaysShow: false,
    children: [
      {
        path: 'select',
        name: 'Select',
        component: () =>
          import(/*webpackChunkName: 'group-select' */ '@/views/el-select/index.vue'),
        meta: { title: 'el-select 选择器', icon: 'select' }
      }
    ]
  }
]
