import { routes } from '@/router/index.js'

export default {
  namespaced: true,
  state: {
    isCollapse: false,
    routes: routes
  },
  getters: {
    isCollapse(state){
      return state.isCollapse;
    }
  },
  mutations: {
    CHANGESTATUS(state) {
      state.isCollapse = !state.isCollapse;
    }
  },
  actions: {
    changestatus({commit}){
      commit('CHANGESTATUS');
    }
  }
}