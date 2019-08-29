import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/css-test',
    name: 'CssTest',
    component: Layout,
    redirect: '/css-test/css',
    alwaysShow: false,
    children: [
      {
        path: 'css',
        name: 'Css',
        component: () =>
          import(/*webpackChunkName: 'group-css-test' */ '@/views/css-test/index.vue'),
        meta: { title: 'css-test', icon: 'css' }
      }
    ]
  }
]
