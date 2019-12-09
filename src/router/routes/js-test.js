import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/js-test',
    name: 'JsTest',
    component: Layout,
    redirect: '/js-test/carousel',
    meta: { title: 'js-test', icon: 'js' },
    alwaysShow: true,
    children: [
      {
        path: 'carousel',
        name: 'Carousel',
        component: () =>
          import(/*webpackChunkName: 'group-js-test' */ '@/views/js-test/carousel/index.vue'),
        meta: { title: '纯JS轮播图', icon: '' }
      }
    ]
  }
]
