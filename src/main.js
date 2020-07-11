import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import './assets/css/global.css';
import { global } from './core/global.js';

Vue.config.productionTip = false;

Vue.prototype.$global = global;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
