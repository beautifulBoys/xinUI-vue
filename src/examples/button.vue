<template>
  <div class="example-page">
    <div class="line">
      <xin-label width="60">基础样式</xin-label>
      <xin-button color="default" @click="event($event)">默认按钮</xin-button>
      <xin-button color="info" @click="event($event)">信息按钮</xin-button>
      <xin-button color="success" @click="event($event)">成功按钮</xin-button>
      <xin-button color="error" @click="event($event)">错误按钮</xin-button>
      <xin-button color="warning" @click="event($event)">警告按钮</xin-button>
    </div>
    <div class="line">
      <xin-label width="60">颜色填充</xin-label>
      <xin-button color="default" fill @click="event($event)">默认按钮</xin-button>
      <xin-button color="info" fill @click="event($event)">信息按钮</xin-button>
      <xin-button color="success" fill @click="event($event)">成功按钮</xin-button>
      <xin-button color="error" fill @click="event($event)">错误按钮</xin-button>
      <xin-button color="warning" fill @click="event($event)">警告按钮</xin-button>
    </div>
    <div class="line">
      <xin-label width="60">圆角按钮</xin-label>
      <xin-button color="default" round @click="event($event)">默认按钮</xin-button>
      <xin-button color="info" round @click="event($event)">信息按钮</xin-button>
      <xin-button color="success" round @click="event($event)">成功按钮</xin-button>
      <xin-button color="error" round @click="event($event)">错误按钮</xin-button>
      <xin-button color="warning" round @click="event($event)">警告按钮</xin-button>
    </div>
    <div class="line">
      <xin-label width="60">行内按钮</xin-label>
      <xin-button color="default" inline @click="event($event)">默认按钮</xin-button>
      <xin-button color="info" inline @click="event($event)">信息按钮</xin-button>
      <xin-button color="success" inline @click="event($event)">成功按钮</xin-button>
      <xin-button color="error" inline @click="event($event)">错误按钮</xin-button>
      <xin-button color="warning" inline @click="event($event)">警告按钮</xin-button>
    </div>
    <div class="line">
      <xin-label width="60">禁用按钮</xin-label>
      <xin-button color="default" inline disabled @click="event($event)">默认按钮</xin-button>
      <xin-button color="success" inline disabled @click="event($event)">成功按钮</xin-button>
      <xin-button color="default" fill disabled @click="event($event)">信息按钮</xin-button>
      <xin-button color="success" fill disabled @click="event($event)">成功按钮</xin-button>
      <xin-button color="default" disabled @click="event($event)">错误按钮</xin-button>
      <xin-button color="success" disabled @click="event($event)">警告按钮</xin-button>
    </div>
    <div class="line">
      <xin-label width="60">图标按钮</xin-label>
      <xin-button color="default" icon="smile" @click="event($event)">默认按钮</xin-button>
      <xin-button color="info" icon="set" @click="event($event)">信息按钮</xin-button>
      <xin-button color="success" fill icon="store" @click="event($event)">成功按钮</xin-button>
      <xin-button color="error" fill icon="Daytimemode" @click="event($event)">错误按钮</xin-button>
      <xin-button color="warning" inline icon="robot" @click="event($event)">警告按钮</xin-button>
      <xin-button color="info" inline icon="collection" @click="event($event)">信息按钮</xin-button>
    </div>
    <div class="line">
      <xin-label width="60">加载展示</xin-label>
      <xin-button color="info" :disabled="disabled" :icon="icon" fill @click="loadingEvent($event)">信息按钮</xin-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      icon: 'set',
      disabled: false
    }
  },
  mounted () {
  },
  methods: {
    event () {
      console.log('点击事件')
    },
    loadingEvent () {
      console.log('点击事件')
      this.icon = 'loading'
      this.disabled = true
      setTimeout(() => {
        this.icon = 'set'
        this.disabled = false
      }, 3000)
    },
    mouseover () {
      console.log('mouseover 事件')
    }
  }
}
</script>
