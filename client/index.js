import Vue from 'vue'
import App from './app.vue'
import './assets/styles/global.styl'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)
const router = createRouter()
const store = createStore()

// 动态加载模块
// store.registerModule('c', {
//   state: {
//     text: 3
//   }
// })

router.beforeEach((to, from, next) => {
  console.log('beforeeach')
  next()
})
router.beforeResolve((to, from, next) => {
  console.log('beforeresolve')
  next()
})
router.afterEach((to, from) => {
  console.log('aftereach')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
