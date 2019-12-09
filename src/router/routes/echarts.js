import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/echarts',
    name: 'Echarts',
    component: Layout,
    redirect: '/echarts/content',
    alwaysShow: false,
    children: [
      {
        path: 'content',
        name: 'EchartsContent',
        component: () =>
          import(/* webpackChunkName: 'group-echarts' */ '@/views/echarts/index.vue'),
        meta: { title: 'echarts 图表', icon: 'echarts' }
      }
    ]
  }
]
