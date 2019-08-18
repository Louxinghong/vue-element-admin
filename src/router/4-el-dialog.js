import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/el-dialog',
    name: 'ElDialog',
    component: Layout,
    redirect: '/el-dialog/dialog',
    meta: { title: 'el-dialog 弹窗', icon: 'dialog' },
    alwaysShow: true,
    children: [
      {
        path: 'dialog',
        name: 'Dialog',
        component: () =>
          import(/*webpackChunkName: 'group-dialog' */ '@/views/el-dialog/index.vue'),
        meta: { title: '弹窗', icon: '' }
      }
    ]
  }
]
