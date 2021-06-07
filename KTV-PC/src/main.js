import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Layer from 'vue-layer'

Vue.config.productionTip = false

Vue.prototype.$layer = Layer(Vue)

const Axios = axios.create({
  timeout: 8000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
// 拦截器
Axios.interceptors.request.use(function (config) {
  return config
}, function (err) {
  console.log(err)
})
Axios.interceptors.request.use(function (res) {
  return res.data
}, function (err) {
  console.log(err)
})
Vue.prototype.$http = Axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
