import Vue from 'vue'
import Router from 'vue-router'
import examples from '@/examples'

import Guide from '@/examples/guide'

Vue.use(Router)

let routes = []
for (let k in examples) {
  if (k === 'install') continue
  routes.push({
    path: '/' + k.toLowerCase(),
    component: examples[k]
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      component: Guide
    },
    ...routes
  ]
})
