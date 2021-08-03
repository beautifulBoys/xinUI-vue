
module.exports = {
  title: 'XinUI 前端组件库',
  description: '一个基于 Vue 框架的轻量级 UI 组件库',
  // base: '/pc/xinUI/',
  head: [
    [
      'link',
      { rel: 'shortcut icon', type: "image/x-icon", href: `assets/images/favicon.ico` }
    ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': '../../src/'
      }
    },
    output: {
      // publicPath: '/pc/xinUI/'
    }
  },
  themeConfig: {
    logo: 'assets/images/logo.png',
    nav: [
      {
        text: '快速开始',
        link: '/start/'
      },
      {
        text: '基础组件',
        link: '/basic/'
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
        {
          title: '快速开始',
          collapsable: true,
          children: [
            'install',
            'use',
            // 'plugin',
            'develop',
            'log'
          ]
        },
        'copyright'
      ],
      '/basic/': [
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
      '/skill/': [
        '',
        {
          title: '功能组件',
          collapsable: true,
          children: [
            'upload',
            'crop'
          ]
        }
      ]
    }
  }
}
