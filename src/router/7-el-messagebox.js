import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/el-messagebox',
    name: 'ElMessagebox',
    component: Layout,
    redirect: '/el-messagebox/messagebox',
    alwaysShow: false,
    children: [
      {
        path: 'messagebox',
        name: 'Messagebox',
        component: () =>
          import(/*webpackChunkName: 'group-messagebox' */ '@/views/el-messagebox/index.vue'),
        meta: { title: 'el-messagebox 弹框', icon: 'messagebox' }
      }
    ]
  }
]
