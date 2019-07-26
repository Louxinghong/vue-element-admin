import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import components from './components';
import './commonstyles/main.less'
import './icons'

Vue.use(ElementUI);

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
