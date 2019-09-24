import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/el-notification',
    name: 'ElNotification',
    component: Layout,
    redirect: '/el-notification/notification',
    alwaysShow: false,
    children: [
      {
        path: 'notification',
        name: 'Notification',
        component: () =>
          import(/*webpackChunkName: 'group-notification' */ '@/views/el-notification/index.vue'),
        meta: { title: 'el-notification 通知', icon: 'notification' }
      }
    ]
  }
]
