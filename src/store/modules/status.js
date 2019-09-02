import { routes } from '@/router/index'

export default {
  namespaced: true,
  state: {
    isCollapse: true,
    routes: routes,
    showDrawer: false,
    screenType: 'pc',
    isCloseSidebar: false
  },
  getters: {
    isCollapse (state) {
      return state.isCollapse
    },
    isShowDrawer (state) {
      return state.showDrawer
    },
    getScreenType (state) {
      return state.screenType
    },
    isCloseSidebar (state) {
      return state.isCloseSidebar
    }
  },
  mutations: {
    CHANGECOLLAPSE (state) {
      state.isCollapse = !state.isCollapse
    },
    SHOWDRAWER (state) {
      state.showDrawer = !state.showDrawer
    },
    CHANGESCREENTYPE (state, type) {
      state.screenType = type
    },
    CHANGESIDEBARSTATUS (state, type) {
      state.isCloseSidebar = type
    }
  },
  actions: {
    changeCollapse ({ commit }) {
      commit('CHANGECOLLAPSE')
    },
    changeDrawer ({ commit }) {
      commit('SHOWDRAWER')
    },
    changeScreenType ({ commit }, type) {
      commit('CHANGESCREENTYPE', type)
    },
    changeSidebarStatus ({ commit }, type) {
      commit('CHANGESIDEBARSTATUS', type)
    }
  }
}
