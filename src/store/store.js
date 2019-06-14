import Vue from "vue";
import Vuex from "vuex";
import status from './modules/status'
import menu from './modules/menu'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    status,
    menu
  }
});
