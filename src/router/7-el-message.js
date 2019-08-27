import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/el-message',
    name: 'ElMessage',
    component: Layout,
    redirect: '/el-message/message',
    alwaysShow: false,
    children: [
      {
        path: 'message',
        name: 'Message',
        component: () =>
          import(/*webpackChunkName: 'group-message' */ '@/views/el-message/index.vue'),
        meta: { title: 'el-message 消息', icon: 'message' }
      }
    ]
  }
]
