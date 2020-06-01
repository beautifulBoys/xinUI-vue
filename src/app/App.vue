<template>
  <div id="app">
    <div class="header">LIXIN 组件练习</div>
    <div class="body">
      <div class="left">
        <div class="menu-item" v-for="(item, index) in menuList" :key="index">
          <i class="iconfont item-icon"></i>
          <div class="item-text">{{item.name}}</div>
          <i class="iconfont">&#xe666;</i>
        </div>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      menuList: [
        {name: '输入框 input', url: '/input'},
        {name: '按钮 button', url: '/button'},
        {name: '单选 radio', url: '/radio'},
        {name: '复选 checkbox', url: '/checkbox'},
        {name: '文本 label', url: '/label'},
        {name: '数字输入 input-number', url: '/input-number'},
        {name: '选择 select', url: '/select'},
        {name: '日期选择 date-picker', url: '/date-picker'},
        {name: '联想 autocomplete', url: '/autocomplete'},
        {name: '开关 switch', url: '/switch'},
        {name: '评分 rate', url: '/rate'},
        {name: '文件上传 upload', url: '/upload'},
        {name: '图片预览 image-viewer', url: '/image-viewer'},
        {name: '表格 table', url: '/table'},
        {name: '分页 pager', url: '/pager'},
        {name: '树 tree', url: '/tree'},
        {name: '菜单 menu', url: '/menu'},
        {name: '标签 tabs', url: '/tabs'},
        {name: '面包屑 breadcrumb', url: '/breadcrumb'},
        {name: '卡片 card', url: '/card'},
        {name: '对话框 dialog', url: '/dialog'},
        {name: '消息提示 message', url: '/message'},
        {name: '消息提示框 message-box', url: '/message-box'},
        {name: '加载中 loading', url: '/loading'},
        {name: '步骤条 steps', url: '/steps'},
        {name: '进度条 progress', url: '/progress'},
        {name: '富文本编辑器 tinymce', url: '/tinymce'},
        {name: '文字提示 tooltip', url: '/tooltip'},
        {name: '标记 badge', url: '/badge'},
        {name: '支付密码 payPassword', url: '/pay-password'},
        {name: '缩略图 img', url: '/img'},
        {name: '标签输入框 tag-input', url: '/tag-input'},
        {name: '穿梭框 transfer', url: '/transfer'},
        {name: '基础样式 style', url: '/style'},
        {name: '列表排序 sort-list', url: '/sort-list'}
      ]
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 0;
}
</style>

<style lang="scss" scoped>
@import "./const.scss";
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  .header {
    height: 50px;
  }
  .body {
    flex: 1;
    display: flex;
    .left {
      width: 200px;
      .menu-item {
        line-height: 20px;
        padding: 5px 10px;
        .iconfont {
          font-size: $font-size;
          display: inline-block;
        }
        .item-text {
          font-size: $font-size;
          display: inline-block;
          line-height: 20px;
        }
      }
    }
    .right {
      flex: 1;
    }
  }
  .footer {
    height: 50px;
  }
}
</style>
