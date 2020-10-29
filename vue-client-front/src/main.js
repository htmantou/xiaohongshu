import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
axios.defaults.baseURL = ' http://192.168.5.151:88';
Vue.prototype.$axios = axios;
// 要用axios的时候直接this.$axios

Vue.use(ElementUI)

Vue.config.productionTip = false
import bottom from './components/bottom.vue'
import wangeadit from './components/wange.vue'
Vue.component('bottom-msg',bottom)
Vue.component('wange',wangeadit)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
