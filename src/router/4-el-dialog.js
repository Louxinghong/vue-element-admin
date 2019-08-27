import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/el-dialog',
    name: 'ElDialog',
    component: Layout,
    redirect: '/el-dialog/dialog',
    alwaysShow: false,
    children: [
      {
        path: 'dialog',
        name: 'Dialog',
        component: () =>
          import(/*webpackChunkName: 'group-dialog' */ '@/views/el-dialog/index.vue'),
        meta: { title: 'el-dialog 弹窗', icon: 'dialog' }
      }
    ]
  }
]
