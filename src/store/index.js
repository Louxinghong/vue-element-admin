import Vue from 'vue'
import Vuex from 'vuex'
import status from './modules/status.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    status
  }
});
