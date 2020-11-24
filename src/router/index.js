import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages'
import components from '@/pages/components/index'
import buttonPage from '@/pages/components/buttonPage'
import linkPage from '@/pages/components/linkPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/components',
      name: 'components',
      component: components,
      redirect: '/components/button',
      children: [
        {
          path: '/components/button',
          name: 'buttonPage',
          component: buttonPage
        },
        {
          path: '/components/link',
          name: 'linkPage',
          component: linkPage
        }
      ]
    }
  ]
})
