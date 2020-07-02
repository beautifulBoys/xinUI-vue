// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
import xinUI from '@/components'
import '@/styles/index.scss'
// import xinUI from '../../lib/index.js'
// import '../../lib/styles.css'

Vue.config.productionTip = false
Vue.use(xinUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
