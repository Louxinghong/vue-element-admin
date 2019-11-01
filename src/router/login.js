export const routes = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () =>
      import(/*webpackChunkName: 'group-login' */ '@/views/login/index.vue')
  }
]
