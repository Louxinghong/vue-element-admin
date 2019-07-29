import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue'
import { camelCase } from 'lodash'

Vue.use(VueRouter);

const requireRoutes = require.context('.',false,/^((?!(index)).)*.js$/)
export const routes = requireRoutes.keys().reduce((total, path) => {
  const module = requireRoutes(path).routes

  total = module.default || module
  console.log(total)
  return total
}, {})

export default new VueRouter({
  base: process.env.BASE_URL,
  routes: routes
});
