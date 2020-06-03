<template>
  <div class="page">
    <div class="line">
      <xin-button status="default" @click="event($event)">默认按钮</xin-button>
      <xin-button status="success" @click="event($event)">成功按钮</xin-button>
      <xin-button status="error" @click="event($event)">错误按钮</xin-button>
      <xin-button status="warning" @click="event($event)">警告按钮</xin-button>
      <xin-button status="info" @click="event($event)">信息按钮</xin-button>
    </div>
    <div class="line">
      <xin-button status="default" fill @click="event($event)">默认按钮</xin-button>
      <xin-button status="success" fill @click="event($event)">成功按钮</xin-button>
      <xin-button status="error" fill @click="event($event)">错误按钮</xin-button>
      <xin-button status="warning" fill @click="event($event)">警告按钮</xin-button>
      <xin-button status="info" fill @click="event($event)">信息按钮</xin-button>
    </div>
    <div class="line">
      <xin-button status="default" round @click="event($event)">默认按钮</xin-button>
      <xin-button status="success" round @click="event($event)">成功按钮</xin-button>
      <xin-button status="error" round @click="event($event)">错误按钮</xin-button>
      <xin-button status="warning" round @click="event($event)">警告按钮</xin-button>
      <xin-button status="info" round @click="event($event)">信息按钮</xin-button>
    </div>
    <div class="line">
      <xin-button status="default" inline @click="event($event)">默认按钮</xin-button>
      <xin-button status="success" inline @click="event($event)">成功按钮</xin-button>
      <xin-button status="error" inline @click="event($event)">错误按钮</xin-button>
      <xin-button status="warning" inline @click="event($event)">警告按钮</xin-button>
      <xin-button status="info" inline @click="event($event)">信息按钮</xin-button>
    </div>
    <div class="line">
      <xin-button status="default" disabled @click="event($event)">默认按钮</xin-button>
      <xin-button status="success" disabled @click="event($event)">成功按钮</xin-button>
      <xin-button status="error" disabled @click="event($event)">错误按钮</xin-button>
      <xin-button status="warning" disabled @click="event($event)">警告按钮</xin-button>
      <xin-button status="info" disabled @click="event($event)">信息按钮</xin-button>
    </div>
    <div class="line">
      <xin-button status="default" icon="success" @click="event($event)">默认按钮</xin-button>
      <xin-button status="success" icon="success" @click="event($event)">成功按钮</xin-button>
      <xin-button status="error" icon="success" @click="event($event)">错误按钮</xin-button>
      <xin-button status="warning" icon="success" @click="event($event)">警告按钮</xin-button>
      <xin-button status="info" icon="success" @click="event($event)">信息按钮</xin-button>
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
