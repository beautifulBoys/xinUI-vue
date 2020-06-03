<template>
  <div id="app">
    <div class="header">练习</div>
    <div class="body">
      <div class="left">
        <div class="menu-item" v-for="(item, index) in menuList" :key="index" @click="toView(item.url)">
          <i class="iconfont item-icon"></i>
          <div class="item-text">{{item.name}}</div>
          <i class="iconfont forward">&#xe666;</i>
        </div>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      menuList: [
        {name: '文本 label', url: '/label'},
        {name: '输入框 input', url: '/input'},
        {name: '按钮 button', url: '/button'},
        {name: '单选 radio', url: '/radio'},
        {name: '复选 checkbox', url: '/checkbox'},
        {name: '选择 select', url: '/select'},
        {name: '日期选择 date-picker', url: '/date-picker'},
        {name: '开关 switch', url: '/switch'},
        {name: '评分 rate', url: '/rate'},
        {name: '表格 table', url: '/table'},
        {name: '分页 pager', url: '/pager'},
        {name: '树 tree', url: '/tree'},
        {name: '标签 tabs', url: '/tabs'},
        {name: '对话框 dialog', url: '/dialog'},
        {name: '消息提示 message', url: '/message'},
        {name: '消息提示框 message-box', url: '/message-box'},
        {name: '步骤条 steps', url: '/steps'},
        {name: '进度条 progress', url: '/progress'},
        {name: '文字提示 tooltip', url: '/tooltip'},
        {name: '标记 badge', url: '/badge'},
        {name: '标签输入框 tag-input', url: '/tag-input'},
        {name: '穿梭框 transfer', url: '/transfer'},
        {name: '列表排序 sort-list', url: '/sort-list'}
      ]
    }
  },
  mounted () {
  },
  methods: {
    toView (url) {
      if (this.$route.path !== url) this.$router.push(url)
    }
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
* {
  font-family: microsoft yahei;
}
</style>

<style lang="scss" scoped>
@import "./const.scss";
#app {
  width: 100%;
  height: 100%;
  .header {
    line-height: 50px;
    font-size: $font-size + 10px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
  .body {
    display: flex;
    .left {
      width: 200px;
      border-right: 1px solid #ddd;
      overflow-y: auto;
      .menu-item {
        line-height: 25px;
        height: 25px;
        padding: 5px 10px;
        border-bottom: 1px solid #eee;
        display: flex;
        cursor: pointer;
        .iconfont {
          font-size: $font-size;
          display: inline-block;
          vertical-align: top;
          &.forward {
            transform: rotate(270deg);
          }
        }
        .item-text {
          flex: 1;
          text-indent: 20px;
          font-size: $font-size;
          display: inline-block;
          line-height: 20px;
        }
        &:hover {
          background: #f5f5f5;
        }
      }
    }
    .right {
      flex: 1;
      padding: 10px 20px;
    }
  }
}
</style>
