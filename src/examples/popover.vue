<template>
  <div class="example-page">
    <div class="line">
      <xin-label width="60">基础展示</xin-label>
      <xin-popover position="left">
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill>左边</xin-button>
      </xin-popover>
      <xin-popover position="top">
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill>上边</xin-button>
      </xin-popover>
      <xin-popover position="bottom">
        <div slot="refer">
          <p style="color: 12px">{{text}}</p>
          <xin-button>按钮</xin-button>
          <xin-button>按钮</xin-button>
        </div>
        <xin-button fill>下边</xin-button>
      </xin-popover>
      <xin-popover position="right">
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill>右边</xin-button>
      </xin-popover>
    </div>
    <div class="line">
      <xin-label width="60">动画展示</xin-label>
      <xin-popover position="left" animate>
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill color="success">左边</xin-button>
      </xin-popover>
      <xin-popover position="top" animate>
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill color="success">上边</xin-button>
      </xin-popover>
      <xin-popover position="bottom" animate>
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill color="success">下边</xin-button>
      </xin-popover>
      <xin-popover position="right" animate>
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill color="success">右边</xin-button>
      </xin-popover>
    </div>
    <div class="line">
      <xin-label width="60">trigger</xin-label>
      <xin-popover position="left" trigger="click">
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill color="warning">左边</xin-button>
      </xin-popover>
      <xin-popover position="top" trigger="hover">
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill color="warning">上边</xin-button>
      </xin-popover>
      <xin-popover position="bottom" trigger="click">
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill color="warning">下边</xin-button>
      </xin-popover>
      <xin-popover position="right" trigger="hover">
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill color="warning">右边</xin-button>
      </xin-popover>
    </div>
    <div class="line">
      <xin-label width="60">颜色展示</xin-label>
      <xin-popover position="left">
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill>左边</xin-button>
      </xin-popover>
      <xin-popover position="top" color="dark">
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill>上边</xin-button>
      </xin-popover>
      <xin-popover position="bottom" color="info">
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill>下边</xin-button>
      </xin-popover>
      <xin-popover position="right" color="success">
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill>右边</xin-button>
      </xin-popover>
      <xin-popover position="top" color="warning">
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill>上边</xin-button>
      </xin-popover>
      <xin-popover position="top" color="error">
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill>上边</xin-button>
      </xin-popover>
    </div>
    <div class="line">
      <xin-label width="60">弧角展示</xin-label>
      <xin-popover position="left" radius>
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill color="warning">左边</xin-button>
      </xin-popover>
      <xin-popover position="top" radius>
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill color="warning">上边</xin-button>
      </xin-popover>
      <xin-popover position="bottom" radius>
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill color="warning">下边</xin-button>
      </xin-popover>
      <xin-popover position="right" radius>
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill color="warning">右边</xin-button>
      </xin-popover>
    </div>
    <div class="line">
      <xin-label width="60">禁用展示</xin-label>
      <xin-popover position="left" disabled>
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill color="error">左边</xin-button>
      </xin-popover>
      <xin-popover position="top" disabled>
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill color="error">上边</xin-button>
      </xin-popover>
      <xin-popover position="bottom" disabled>
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill color="error">下边</xin-button>
      </xin-popover>
      <xin-popover position="right" disabled>
        <p slot="refer" style="color: 12px">{{text}}</p>
        <xin-button fill color="error">右边</xin-button>
      </xin-popover>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      text: 'xinUI 是以 Vue 框架编写的轻量级 WEB 前端 UI 组件库，可以根据用户的设计风格，自定义生成适配主题。'
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
