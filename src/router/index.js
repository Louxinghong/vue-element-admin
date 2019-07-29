import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

var allRoutes = []
const requireRoutes = require.context('.',false,/^((?!(index)).)*.js$/)
export const routes = requireRoutes.keys().reduce((total, path) => {
  const module = requireRoutes(path).routes
  allRoutes = allRoutes.concat(module)
  total = allRoutes
  return total
}, {})
// console.log(routes)
export default new VueRouter({
  base: process.env.BASE_URL,
  routes: routes
});
