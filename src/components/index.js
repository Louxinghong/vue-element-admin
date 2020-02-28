/**
 * require.context 实现自动化导入模块，该函数接受三个参数
 * 1. directory {string} 读取文件的路径
 * 2. useSubdirectories {boolean} 是否遍历文件的子目录
 * 3. regExp {regExp} 匹配文件的正则表达式
 */
const requireComponents = require.context('.', true, /\.vue$/)
const components = requireComponents.keys().reduce((total, path) => {
  const module = requireComponents(path)
  const component = module.default || module
  const { name, global } = component

  if (global) {
    total[name] = component
  }

  return total
}, {})

export default components
