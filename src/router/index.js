import Vue from 'vue'
import Router from 'vue-router'
import label from '@/components/label'
import input from '@/components/input'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/label',
      childrens: [
        {
          path: '/label',
          component: label
        },
        {
          path: '/input',
          component: input
        }
      ]
    }
  ]
})
