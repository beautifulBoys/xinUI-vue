module.exports = {
  title: 'XinUI 前端组件库',
  description: '一个基于 Vue 框架的轻量级 UI 组件库',
  configureWebpack: {
    resolve: {
      alias: {
        '@src': '/src',
        '@docs': '/docs'
      }
    }
  },
  themeConfig: {
    logo: '/assets/images/logo.png',
    nav: [
      {
        text: 'XinUI',
        link: '/ui/'
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
      '/ui/': [
        '',
        {
          title: '组件',
          collapsable: true,
          children: [
            'components/button'
          ]
        }
      ],
      '/skill/': [
        ''
      ]
    }
  }
}
