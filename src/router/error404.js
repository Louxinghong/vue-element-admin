export const routes = [
  {
    path: '/404',
    name: 'Error404',
    hidden: true,
    component: () =>
      import(/*webpackChunkName: 'group-error404' */ '@/views/error404/index.vue')
  }
]
