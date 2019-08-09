import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/person-info',
    name: 'PersonInfo',
    component: Layout,
    redirect: '/person-info/my-curriculum-vitae',
    meta: { title: '个人信息', icon: 'person-info' },
    alwaysShow: true,
    children: [
      {
        path: 'my-curriculum-vitae',
        name: 'PersonInfoCurriculumVitae',
        redirect: '/person-info/my-curriculum-vitae/my-info',
        component: () =>
          import(
            /*webpackChunkName: 'group-person-info' */ '@/views/person-info/my-curriculum-vitae/index.vue'
          ),
        meta: { title: '重要信息', icon: '' },
        children: [
          {
            path: 'my-info',
            name: 'PersonInfoCurriculumVitaeMyinfo',
            component: () =>
              import(
                /*webpackChunkName: 'group-person-info' */ '@/views/person-info/my-curriculum-vitae/my-info/index.vue'
              ),
            meta: { title: '备份', icon: '' }
          }
        ]
      }
    ]
  }
]