import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const requireModules = require.context('./modules', false, /\.js$/)
const modules = requireModules.keys().reduce((total, path) => {
  const module = requireModules(path)
  const name = path.replace(/(\.\/|\.js)/g, '')

  total[name] = module.default || module

  return total
}, {})

export default new Vuex.Store({
  modules,
  getters
})
