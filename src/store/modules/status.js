export default {
    namespaced: true,
    state: {
        isCollapse: false
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