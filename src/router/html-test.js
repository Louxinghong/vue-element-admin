import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/html-test',
    name: 'HtmlTest',
    component: Layout,
    redirect: '/html-test/html',
    alwaysShow: false,
    children: [
      {
        path: 'html',
        name: 'Html',
        component: () =>
          import(/*webpackChunkName: 'group-html-test' */ '@/views/html-test/index.vue'),
        meta: { title: 'html-test', icon: 'html' }
      }
    ]
  }
]
