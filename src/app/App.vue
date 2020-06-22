<template>
  <div id="app">
    <div class="header">练习</div>
    <div class="body">
      <!-- <div class="left">
        <div class="menu-item" v-for="(item, index) in menuList" :key="index" @click="toView(item.url)">
          <i class="xin-iconfont item-icon"></i>
          <div class="item-text">{{item.name}}</div>
          <i class="xin-iconfont forward">&#xe685;</i>
        </div>
      </div> -->
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
        {name: '日期选择 date-picker', url: '/datePicker'},
        {name: '开关 switch', url: '/switch'},
        {name: '评分 rate', url: '/rate'},
        {name: '表格 table', url: '/table'},
        {name: '分页 page', url: '/page'},
        {name: '树 tree', url: '/tree'},
        {name: '标签 tabs', url: '/tabs'},
        {name: '对话框 dialog', url: '/dialog'},
        {name: '消息提示 message', url: '/message'},
        {name: '确认框 model', url: '/model'},
        {name: '步骤条 steps', url: '/steps'},
        {name: '进度条 progress', url: '/progress'},
        {name: '文字提示 tooltip', url: '/tooltip'},
        {name: '标记 badge', url: '/badge'},
        {name: '标签输入框 tag-input', url: '/tag-input'},
        {name: '穿梭框 transfer', url: '/transfer'},
        {name: '列表排序 sort-list', url: '/sort-list'},

        {name: 'Split 分割面板', url: '/split'},
        {name: 'Loading 加载', url: '/loading'},
        {name: 'Slide 滑块', url: '/slide'},
        {name: 'Cascader 级联选择', url: '/cascader'},
        {name: 'Transfer 穿梭框', url: '/transfer'},
        {name: 'Upload 上传', url: '/upload'},
        {name: 'ColorPicker 颜色选择器', url: '/colorPicker'},
        {name: 'Tips 提示条', url: '/tips'},
        {name: 'Popover 气泡提示', url: '/popover'},
        {name: 'Tag 标签', url: '/tag'},
        {name: 'Grid 栅格', url: '/grid'},
        {name: 'Icon 图标', url: '/icon'}
        
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
        .xin-iconfont {
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
<style lang="scss">
$color-blue: #0095ff;
$color-green: #15bf81;

.page {
  font-size: 12px;
}

.line {
  margin: 15px 0;
}
.line p {
  font-size: 14px;
  line-height: 20px;
  color: #888;
  text-indent: 30px;
}
.header {
  text-align: center;
  padding: 10px 20px;
  border-bottom: 1px solid transparentize(#0095ff, 0);
  position: relative;
  .xin-iconfont {
    width: 30px;
    height: 30px;
    cursor: pointer;
    text-align: center;
    line-height: 30px;
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 100%;
    background: #ff6666;
    color: #fff;
  }
}
.footer {
  text-align: center;
  padding: 20px;
  background: transparentize(#0095ff, 0.8);
}

.xin-col-content {
  color: #fff;
  background: #0095ff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 25px;
}
.xin-row + .xin-row {
  margin-top: 10px !important;
}

.page-icon {
  .area {
    width: 100px;
    height: 100px;
    display: inline-block;
    box-sizing: border-box;
    margin: 10px;
    border: 1px dashed #ccc;
    border-radius: 5px;
    vertical-align: top;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    
    &:hover {
      border: 1px solid $color-blue;
      .cover {
        left: 0;
        top: 0;
      }
      &.copy {
        border: 1px solid $color-green;
        .cover {
          color: $color-green;
        }
      }
    }
    .cover {
      position: absolute;
      top: -200%;
      left: -200%;
      width: 100%;
      height: 100%;
      background: #fff;
      color: $color-blue;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 12px;
    }
    .icon {
      width: 60px;
      height: 60px;
      margin: 0 auto;
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s;
    }
    .name {
      text-align: center;
      font-size: 12px;
      word-break: break-all;
      padding: 0 10px;
    }
  }
}
</style>
