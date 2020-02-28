import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/other-plugins',
    name: 'OtherPlugins',
    component: Layout,
    redirect: '/other-plugins/tinymce',
    meta: { title: '其他插件', icon: 'other-plugins' },
    alwaysShow: true,
    children: [
      {
        path: 'tinymce',
        name: 'Tinymce',
        component: () =>
          import(
            /* webpackChunkName: 'group-other-plugins' */ '@/views/other-plugins/tinymce/index.vue'
          ),
        meta: { title: 'tinymce 富文本编辑器', icon: '' }
      },
      {
        path: 'svgicon-example',
        name: 'SvgIconExample',
        component: () =>
          import(
            /* webpackChunkName: 'group-other-plugins' */ '@/views/other-plugins/svgicon/index.vue'
          ),
        meta: { title: 'svg-icon 自定义图标', icon: '' }
      },
      {
        path: 'render-function',
        name: 'RenderFunction',
        component: () =>
          import(
            /* webpackChunkName: 'group-other-plugins' */ '@/views/other-plugins/render/index.vue'
          ),
        meta: { title: 'render 渲染函数', icon: '' }
      },
      {
        path: 'npm-components',
        name: 'NpmComponents',
        component: () =>
          import(
            /* webpackChunkName: 'group-other-plugins' */ '@/views/other-plugins/npm-components/color-picker/index.vue'
          ),
        meta: { title: 'npm自定义组价库——颜色选择', icon: '' }
      }
    ]
  }
]
