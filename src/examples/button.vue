<template>
  <div class="page">
    <div class="line">
      <xin-button color="default" @click="event($event)">默认按钮</xin-button>
      <xin-button color="success" @click="event($event)">成功按钮</xin-button>
      <xin-button color="error" @click="event($event)">错误按钮</xin-button>
      <xin-button color="warning" @click="event($event)">警告按钮</xin-button>
      <xin-button color="info" @click="event($event)">信息按钮</xin-button>
    </div>
    <div class="line">
      <xin-button color="default" fill @click="event($event)">默认按钮</xin-button>
      <xin-button color="success" fill @click="event($event)">成功按钮</xin-button>
      <xin-button color="error" fill @click="event($event)">错误按钮</xin-button>
      <xin-button color="warning" fill @click="event($event)">警告按钮</xin-button>
      <xin-button color="info" fill @click="event($event)">信息按钮</xin-button>
    </div>
    <div class="line">
      <xin-button color="default" round @click="event($event)">默认按钮</xin-button>
      <xin-button color="success" round @click="event($event)">成功按钮</xin-button>
      <xin-button color="error" round @click="event($event)">错误按钮</xin-button>
      <xin-button color="warning" round @click="event($event)">警告按钮</xin-button>
      <xin-button color="info" round @click="event($event)">信息按钮</xin-button>
    </div>
    <div class="line">
      <xin-button color="default" inline @click="event($event)">默认按钮</xin-button>
      <xin-button color="success" inline @click="event($event)">成功按钮</xin-button>
      <xin-button color="error" inline @click="event($event)">错误按钮</xin-button>
      <xin-button color="warning" inline @click="event($event)">警告按钮</xin-button>
      <xin-button color="info" inline @click="event($event)">信息按钮</xin-button>
    </div>
    <div class="line">
      <xin-button color="default" disabled @click="event($event)">默认按钮</xin-button>
      <xin-button color="success" disabled @click="event($event)">成功按钮</xin-button>
      <xin-button color="error" disabled @click="event($event)">错误按钮</xin-button>
      <xin-button color="warning" disabled @click="event($event)">警告按钮</xin-button>
      <xin-button color="info" disabled @click="event($event)">信息按钮</xin-button>
    </div>
    <div class="line">
      <xin-button color="default" icon="success" @click="event($event)">默认按钮</xin-button>
      <xin-button color="success" icon="success" @click="event($event)">成功按钮</xin-button>
      <xin-button color="error" icon="success" @click="event($event)">错误按钮</xin-button>
      <xin-button color="warning" icon="success" @click="event($event)">警告按钮</xin-button>
      <xin-button color="info" icon="success" @click="event($event)">信息按钮</xin-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    event () {
      console.log('点击事件')
    },
    mouseover () {
      console.log('mouseover 事件')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
