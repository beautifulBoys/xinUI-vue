<template>
  <div id="app">
    <div class="header">xinUI 前端组件库开发面板</div>
    <div class="body">
      <div class="left">
        <div
          :class="['menu-item', {active: $route.path === item.url}]"
          v-for="(item, index) in menuList"
          :key="index"
          @click="toView(item.url)"
        >
          <i class="xin-iconfont item-icon"></i>
          <div class="item-text">{{item.name}}</div>
          <xin-icon name="arrow-right" />
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
        {name: 'Label 文本', url: '/label'},
        {name: 'Input 输入框', url: '/input'},
        {name: 'Button 按钮', url: '/button'},
        {name: 'Radio 单选', url: '/radio'},
        {name: 'Checkbox 复选', url: '/checkbox'},
        {name: 'Select 选择', url: '/select'},
        {name: 'DatePicker 日期选择', url: '/datePicker'},
        {name: 'Switch 开关', url: '/switch'},
        {name: 'Rate 评分', url: '/rate'},
        {name: 'Table 表格', url: '/table'},
        {name: 'Page 分页', url: '/page'},
        {name: 'Tree 树', url: '/tree'},
        {name: 'Tabs 标签', url: '/tabs'},
        {name: 'Dialog 对话框', url: '/dialog'},
        {name: 'Message 消息提示', url: '/message'},
        {name: 'Model 确认框', url: '/model'},
        {name: 'Steps 步骤条', url: '/steps'},
        {name: 'Progress 进度条', url: '/progress'},
        {name: 'Tooltip 文字提示', url: '/tooltip'},
        {name: 'Badge 标记', url: '/badge'},
        {name: 'TagInput 标签输入框', url: '/tagInput'},
        {name: 'Transfer 穿梭框', url: '/transfer'},
        {name: 'SortList 列表排序', url: '/sortList'},
        {name: 'Split 分割面板', url: '/split'},
        {name: 'Loading 加载', url: '/loading'},
        {name: 'Slide 滑块', url: '/slide'},
        {name: 'Cascader 级联选择', url: '/cascader'},
        {name: 'Upload 上传', url: '/upload'},
        {name: 'ColorPicker 颜色选择器', url: '/colorPicker'},
        {name: 'Tips 提示条', url: '/tips'},
        {name: 'Popover 气泡提示', url: '/popover'},
        {name: 'Tag 标签', url: '/tag'},
        {name: 'Grid 栅格', url: '/grid'},
        {name: 'Icon 图标', url: '/icon'},
        {name: 'Viewer 预览器', url: '/viewer'}
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
    border-bottom: 1px solid $color-blue;
  }
  .body {
    display: flex;
    .left {
      width: 200px;
      border-right: 1px solid $color-blue;
      overflow-y: auto;
      .menu-item {
        line-height: 38px;
        height: 38px;
        padding: 0 10px;
        border-bottom: 2px solid #fff;
        background: transparentize($color-blue, 0.95);
        display: flex;
        cursor: pointer;
        .xin-iconfont {
          font-size: $font-size + 2px;
          display: inline-block;
          vertical-align: top;
        }
        .item-text {
          flex: 1;
          text-indent: 20px;
          font-size: $font-size;
          display: inline-block;
          line-height: 38px;
        }
        &:hover {
          color: $color-blue;
          font-weight: bold;
        }
        &.active {
          background: $color-blue;
          color: #fff;
          font-weight: bold;
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
<style lang="scss" src="./examples.scss"></style>
