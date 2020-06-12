import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import Axios from 'axios'

Vue.prototype.$http = Axios
Vue.config.productionTip = false
Axios.defaults.baseURL = 'http://120.27.15.10:8080'
Axios.defaults.withCredentials = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
