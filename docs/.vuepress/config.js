
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
        text: 'Components',
        link: '/components/'
      },
      {
        text: 'XinSkill',
        link: '/skill/'
      },
      {
        text: '代码仓库',
        link: 'https://github.com/beautifulBoys/xinUI-vue'
      }
    ],
    sidebar: {
      '/components/': [
        '',
        {
          title: '组件',
          collapsable: true,
          children: [
            // 'badge',
            'button',
            'checkbox',
            // 'datePicker',
            'dialog',
            // 'input'
          ]
        }
      ],
      '/skill/': [
        ''
      ]
    }
  }
}
