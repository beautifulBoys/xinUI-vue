<template>
  <div id="app">
    <div class="header">LIXIN 组件练习</div>
    <div class="body">
      <div class="left">
        <div class="menu-item"></div>
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
      menuList: []
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
  }
  .footer {
    height: 50px;
  }
}
</style>
