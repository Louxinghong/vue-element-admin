import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/el-upload',
    name: 'ElUpload',
    component: Layout,
    redirect: '/el-upload/upload',
    alwaysShow: false,
    children: [
      {
        path: 'upload',
        name: 'Upload',
        component: () =>
          import(/*webpackChunkName: 'group-upload' */ '@/views/el-upload/index.vue'),
        meta: { title: 'el-upload 上传', icon: 'upload' }
      }
    ]
  }
]
