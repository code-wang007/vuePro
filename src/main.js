// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import App from './App'
Vue.use(MintUI);
import 'mint-ui/lib/style.css'
import axios from 'axios'


import router from './router'
import store from '@/store/store.js'

Vue.config.productionTip = false
Vue.prototype.$api = axios;

// router.beforeEach((to,from,next) =>{
// 	console.log('全局前置导航守卫',to,from,next)
// 	next()
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
