// // 全局注册icon-svg
// Vue.component('icon-svg', IconSvg)

// requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext)
// import all svg
const req = require.context('./svg', true, /\.svg$/)
requireAll(req)

const icons = []
requireAll(req).forEach(item => {
  icons.push(item.default.id.substring(5))
})
export default icons
