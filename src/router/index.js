import Vue from 'vue'
import Router from 'vue-router'

import guide from '@/examples/guide'
import label from '@/examples/label'
import input from '@/examples/input'
import button from '@/examples/button'
import radio from '@/examples/radio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: guide
    },
    {
      path: '/label',
      component: label
    },
    {
      path: '/input',
      component: input
    },
    {
      path: '/button',
      component: button
    },
    {
      path: '/radio',
      component: radio
    }
  ]
})
