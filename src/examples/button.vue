<template>
  <div class="page">
    <div class="line">
      <xin-button status="default">默认按钮</xin-button>
      <xin-button status="success">成功按钮</xin-button>
      <xin-button status="error">错误按钮</xin-button>
      <xin-button status="warning">警告按钮</xin-button>
      <xin-button status="info">信息按钮</xin-button>
    </div>
    <div class="line">
      <xin-button status="default" fill>默认按钮</xin-button>
      <xin-button status="success" fill>成功按钮</xin-button>
      <xin-button status="error" fill>错误按钮</xin-button>
      <xin-button status="warning" fill>警告按钮</xin-button>
      <xin-button status="info" fill>信息按钮</xin-button>
    </div>
    <div class="line">
      <xin-button status="default" round>默认按钮</xin-button>
      <xin-button status="success" round>成功按钮</xin-button>
      <xin-button status="error" round>错误按钮</xin-button>
      <xin-button status="warning" round>警告按钮</xin-button>
      <xin-button status="info" round>信息按钮</xin-button>
    </div>
    <div class="line">
      <xin-button status="default" inline>默认按钮</xin-button>
      <xin-button status="success" inline>成功按钮</xin-button>
      <xin-button status="error" inline>错误按钮</xin-button>
      <xin-button status="warning" inline>警告按钮</xin-button>
      <xin-button status="info" inline>信息按钮</xin-button>
    </div>
    <div class="line">
      <xin-button status="default" icon="success">默认按钮</xin-button>
      <xin-button status="success" icon="success">成功按钮</xin-button>
      <xin-button status="error" icon="success">错误按钮</xin-button>
      <xin-button status="warning" icon="success">警告按钮</xin-button>
      <xin-button status="info" icon="success">信息按钮</xin-button>
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
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
