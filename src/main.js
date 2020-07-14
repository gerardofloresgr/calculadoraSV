import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import './assets/css/global.css';
import { global } from './core/global.js';
import VuePageTransition from 'vue-page-transition'
 
Vue.use(VuePageTransition);
Vue.config.productionTip = true;
Vue.prototype.$global = global;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
