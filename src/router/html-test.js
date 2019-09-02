import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/html-test',
    name: 'HtmlTest',
    component: Layout,
    redirect: '/html-test/html',
    meta: { title: 'html-test', icon: 'html' },
    alwaysShow: true,
    children: [
      {
        path: 'html',
        name: 'Html',
        component: () =>
          import(/*webpackChunkName: 'group-html-test' */ '@/views/html-test/dragAndTurnTable/index.vue'),
        meta: { title: '图片拖拽和转盘抽奖', icon: '' }
      }
    ]
  }
]
