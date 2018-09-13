import Vue from 'vue'
import Router from 'vue-router'
import vueRouter from './vue'
Vue.use(Router)

export default new Router({
  routes: [
    ...vueRouter
  ]
})
