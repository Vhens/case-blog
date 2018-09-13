// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MuseUI from 'muse-ui'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'
import './assets/reset.css'
import 'muse-ui/dist/muse-ui.css'


Vue.use(MuseUI);
Vue.config.productionTip = false
Vue.component("demo-block", demoBlock)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
