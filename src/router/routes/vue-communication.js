import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/vue-communication',
    name: 'VueCommunication',
    component: Layout,
    redirect: '/vue-communication/sync',
    meta: { title: 'Vue组件各种通讯方式', icon: 'communication' },
    alwaysShow: true,
    children: [
      {
        path: 'sync',
        name: 'Sync',
        component: () =>
          import(
            /*webpackChunkName: 'group-vue-communication' */ '@/views/vue-communication/sync-content/index.vue'
          ),
        meta: { title: 'sync属性', icon: '' }
      }
    ]
  }
]
