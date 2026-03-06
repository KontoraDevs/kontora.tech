import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'

var VueCookie = require('vue-cookie');

Vue.use(VueRouter)
Vue.use(VueScrollTo)
Vue.use(VueCookie);

Vue.config.productionTip = false

const routes = [
  { path: '/' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')