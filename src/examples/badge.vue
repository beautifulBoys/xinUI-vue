<template>
  <div class="page">
    <div class="line">
      <xin-label width="80">颜色展示</xin-label>
      <xin-badge :value="value1" color="info">
        <xin-button>未读消息</xin-button>
      </xin-badge>
      <xin-badge :value="value1" color="success">
        <xin-button>未读消息</xin-button>
      </xin-badge>
      <xin-badge value="new message" color="warning">
        <xin-button>未读消息</xin-button>
      </xin-badge>
      <xin-badge value="new message" color="error">
        <xin-button>未读消息</xin-button>
      </xin-badge>
    </div>
    <div class="line">
      <xin-label width="80">亮点展示</xin-label>
      <xin-badge :value="12" dot color="info">
        <xin-button color="success" fill>未读消息</xin-button>
      </xin-badge>
      <xin-badge :value="12" dot color="success">
        <xin-button color="success" fill>未读消息</xin-button>
      </xin-badge>
      <xin-badge :value="12" dot color="warning">
        <xin-button color="success" fill>未读消息</xin-button>
      </xin-badge>
      <xin-badge :value="12" dot color="error">
        <xin-button color="success" fill>未读消息</xin-button>
      </xin-badge>
    </div>
    <div class="line">
      <xin-label width="80">大数展示</xin-label>
      <xin-badge :value="value2" :max="max" color="info">
        <xin-button color="warning">未读消息</xin-button>
      </xin-badge>
      <xin-badge :value="value2" :max="max" color="success">
        <xin-button color="warning">未读消息</xin-button>
      </xin-badge>
      <xin-badge :value="value2" :max="max" color="warning">
        <xin-button color="warning">未读消息</xin-button>
      </xin-badge>
      <xin-badge :value="value2" :max="max" color="error">
        <xin-button color="warning">未读消息</xin-button>
      </xin-badge>
    </div>
    <div class="line">
      <xin-label width="80">白底色</xin-label>
      <xin-badge :value="12" :fill="false" color="info">
        <xin-button color="info" fill>未读消息</xin-button>
      </xin-badge>
      <xin-badge :value="12" :fill="false" color="success">
        <xin-button color="info" fill>未读消息</xin-button>
      </xin-badge>
      <xin-badge :value="12" :fill="false" color="warning">
        <xin-button color="info" fill>未读消息</xin-button>
      </xin-badge>
      <xin-badge :value="12" :fill="false" color="error">
        <xin-button color="info" fill>未读消息</xin-button>
      </xin-badge>
    </div>
    <div class="line">
      <xin-label width="80">禁用展示</xin-label>
      <xin-badge :value="12" disabled color="info">
        <xin-button color="error" fill>未读消息</xin-button>
      </xin-badge>
      <xin-badge :value="12" disabled color="success">
        <xin-button color="error" fill>未读消息</xin-button>
      </xin-badge>
      <xin-badge :value="12" disabled color="warning">
        <xin-button color="error" fill>未读消息</xin-button>
      </xin-badge>
      <xin-badge :value="12" disabled color="error">
        <xin-button color="error" fill>未读消息</xin-button>
      </xin-badge>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      value1: 12,
      value2: 643,
      max: 100
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
