
module.exports = {
  title: 'XinUI 前端组件库',
  description: '一个基于 Vue 框架的轻量级 UI 组件库',
  configureWebpack: {
    resolve: {
      alias: {
        '@': '../../src/'
      }
    }
  },
  themeConfig: {
    logo: '/assets/images/logo.png',
    nav: [
      {
        text: '快速开始',
        link: '/start/'
      },
      {
        text: '基础组件',
        link: '/components/'
      },
      {
        text: '功能组件',
        link: '/skill/'
      },
      {
        text: '代码仓库',
        link: 'https://github.com/beautifulBoys/xinUI-vue'
      }
    ],
    sidebar: {
      '/start/': [
        '',
        {
          title: '快速开始',
          collapsable: true,
          children: [
          ]
        }
      ],
      '/components/': [
        '',
        {
          title: '组件',
          collapsable: true,
          children: [
            'label',
            'input',
            'button',
            'radio',
            'checkbox',
            'select',
            'switch',
            'rate',
            'datePicker',
            'colorPicker',
            'tagInput',
            'table',
            'page',
            'tabs',
            'dialog',
            'message',
            'model',
            'steps',
            'progress',
            'tooltip',
            'badge',
            'transfer',
            'split',
            'loading',
            'tips',
            'tag',
            'grid',
            'popover',
            'icon',
            'tree',
            'slide',
          ]
        }
      ],
      'skill': [
        ''
      ]
    }
  }
}
