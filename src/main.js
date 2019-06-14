import Vue from "vue";
import App from "./App.vue";
import ElementUI from 'element-ui';
import router from "./router/router";
import store from "./store/store";
import 'element-ui/lib/theme-chalk/index.css';
import components from './components/index';
import './commonstyles/main.less'

Vue.use(ElementUI);

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
  console.log(key)
  console.log(components[key])
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
