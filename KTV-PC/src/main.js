import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Layer from 'vue-layer'

Vue.config.productionTip = false

Vue.prototype.$layer = Layer(Vue)

const Axios = axios.create({
  baseURL: 'http://49.235.93.38:82/index.php/api',
  timeout: 8000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
// 拦截器
Axios.interceptors.request.use(config => {
  return config
}, err => {
  return err
})
Axios.interceptors.response.use(res => {
  return res.data
}, err => {
  return err
})
Vue.prototype.$http = Axios
Vue.prototype.baseURL = 'http://49.235.93.38:82'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
