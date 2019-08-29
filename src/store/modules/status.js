import { routes } from '@/router/index'

export default {
  namespaced: true,
  state: {
    isCollapse: false,
    routes: routes,
    showDrawer: false
  },
  getters: {
    isCollapse (state) {
      return state.isCollapse
    },
    isShowDrawer (state) {
      return state.showDrawer
    }
  },
  mutations: {
    CHANGESTATUS (state) {
      state.isCollapse = !state.isCollapse
    },
    SHOWDRAWER (state) {
      state.showDrawer = !state.showDrawer
    }
  },
  actions: {
    changeStatus ({ commit }) {
      commit('CHANGESTATUS')
    },
    changeDrawer ({ commit }) {
      commit('SHOWDRAWER')
    }
  }
}
