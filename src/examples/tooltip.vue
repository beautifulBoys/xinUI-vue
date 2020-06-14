<template>
  <div class="page">
    <div class="line">
      <xin-label width="60">基础展示</xin-label>
      <xin-tooltip position="left" content="左边工具条">
        <xin-button fill>左边</xin-button>
      </xin-tooltip>
      <xin-tooltip position="top" content="上边工具条">
        <xin-button fill>上边</xin-button>
      </xin-tooltip>
      <xin-tooltip position="bottom" content="下边工具条">
        <xin-button fill>下边</xin-button>
      </xin-tooltip>
      <xin-tooltip position="right" content="右边工具条">
        <xin-button fill>右边</xin-button>
      </xin-tooltip>
    </div>
    <div class="line">
      <xin-label width="60">动画展示</xin-label>
      <xin-tooltip position="left" content="左边工具条" animate>
        <xin-button fill color="success">左边</xin-button>
      </xin-tooltip>
      <xin-tooltip position="top" content="上边工具条" animate>
        <xin-button fill color="success">上边</xin-button>
      </xin-tooltip>
      <xin-tooltip position="bottom" content="下边工具条" animate>
        <xin-button fill color="success">下边</xin-button>
      </xin-tooltip>
      <xin-tooltip position="right" content="右边工具条" animate>
        <xin-button fill color="success">右边</xin-button>
      </xin-tooltip>
    </div>
    <div class="line">
      <xin-label width="60">颜色展示</xin-label>
      <xin-tooltip position="left" content="左边工具条">
        <xin-button fill>左边</xin-button>
      </xin-tooltip>
      <xin-tooltip position="top" color="white" content="上边工具条">
        <xin-button fill>上边</xin-button>
      </xin-tooltip>
      <xin-tooltip position="bottom" color="info" content="下边工具条">
        <xin-button fill>下边</xin-button>
      </xin-tooltip>
      <xin-tooltip position="right" color="success" content="右边工具条">
        <xin-button fill>右边</xin-button>
      </xin-tooltip>
      <xin-tooltip position="top" color="warning" content="上边工具条">
        <xin-button fill>上边</xin-button>
      </xin-tooltip>
      <xin-tooltip position="top" color="error" content="上边工具条">
        <xin-button fill>上边</xin-button>
      </xin-tooltip>
    </div>
    <div class="line">
      <xin-label width="60">弧角展示</xin-label>
      <xin-tooltip position="left" content="左边工具条" radius>
        <xin-button fill color="warning">左边</xin-button>
      </xin-tooltip>
      <xin-tooltip position="top" content="上边工具条" radius>
        <xin-button fill color="warning">上边</xin-button>
      </xin-tooltip>
      <xin-tooltip position="bottom" content="下边工具条" radius>
        <xin-button fill color="warning">下边</xin-button>
      </xin-tooltip>
      <xin-tooltip position="right" content="右边工具条" radius>
        <xin-button fill color="warning">右边</xin-button>
      </xin-tooltip>
    </div>
    <div class="line">
      <xin-label width="60">禁用展示</xin-label>
      <xin-tooltip position="left" content="左边工具条" disabled>
        <xin-button fill color="error">左边</xin-button>
      </xin-tooltip>
      <xin-tooltip position="top" content="上边工具条" disabled>
        <xin-button fill color="error">上边</xin-button>
      </xin-tooltip>
      <xin-tooltip position="bottom" content="下边工具条" disabled>
        <xin-button fill color="error">下边</xin-button>
      </xin-tooltip>
      <xin-tooltip position="right" content="右边工具条" disabled>
        <xin-button fill color="error">右边</xin-button>
      </xin-tooltip>
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
