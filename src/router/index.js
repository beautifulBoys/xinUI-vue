import Vue from 'vue'
import Router from 'vue-router'

import guide from '@/examples/guide'
import label from '@/examples/label'
import input from '@/examples/input'
import button from '@/examples/button'
import radio from '@/examples/radio'
import checkbox from '@/examples/checkbox'
import select from '@/examples/select'
import switch1 from '@/examples/switch'
import rate from '@/examples/rate'
import datePicker from '@/examples/datePicker'
import table from '@/examples/table'
import page from '@/examples/page'
import tabs from '@/examples/tabs'
import dialog from '@/examples/dialog'
import message from '@/examples/message'
import model from '@/examples/model'
import steps from '@/examples/steps'
import progress from '@/examples/progress'
import tooltip from '@/examples/tooltip'
import badge from '@/examples/badge'
import transfer from '@/examples/transfer'
import split from '@/examples/split'
import loading from '@/examples/loading'
import tips from '@/examples/tips'
import tag from '@/examples/tag'
import grid from '@/examples/grid'
import popover from '@/examples/popover'

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
    },
    {
      path: '/checkbox',
      component: checkbox
    },
    {
      path: '/select',
      component: select
    },
    {
      path: '/switch',
      component: switch1
    },
    {
      path: '/rate',
      component: rate
    },
    {
      path: '/datePicker',
      component: datePicker
    },
    {
      path: '/table',
      component: table
    },
    {
      path: '/page',
      component: page
    },
    {
      path: '/tabs',
      component: tabs
    },
    {
      path: '/dialog',
      component: dialog
    },
    {
      path: '/message',
      component: message
    },
    {
      path: '/model',
      component: model
    },
    {
      path: '/steps',
      component: steps
    },
    {
      path: '/progress',
      component: progress
    },
    {
      path: '/tooltip',
      component: tooltip
    },
    {
      path: '/badge',
      component: badge
    },
    {
      path: '/transfer',
      component: transfer
    },
    {
      path: '/split',
      component: split
    },
    {
      path: '/loading',
      component: loading
    },
    {
      path: '/tips',
      component: tips
    },
    {
      path: '/tag',
      component: tag
    },
    {
      path: '/grid',
      component: grid
    },
    {
      path: '/popover',
      component: popover
    }
  ]
})
