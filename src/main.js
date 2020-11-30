// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/less/reset/reset.less'
import './assets/less/index.less'
import miniEleHeader from '@/components/common/miniEleHeader'
import miniElButton from '@/components/miniElButton/index'
import miniElLink from '@/components/miniElLink/index'

Vue.use(miniElButton)
Vue.use(miniElLink)
Vue.config.productionTip = false
Vue.component('miniEleHeader', miniEleHeader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
