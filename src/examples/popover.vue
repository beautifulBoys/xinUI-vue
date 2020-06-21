<template>
  <div class="page">
    <div class="line">
      <xin-label width="60">基础展示</xin-label>
      <xin-popover position="left">
        <p slot="refer" style="color: 12px">北京地处中国北部、华北平原北部，东与天津毗连，其余均与河北相邻，中心位置东经116°20′、北纬39°56′，是世界著名古都和现代化国际城市，也是中国共产党中央委员会、中华人民共和国中央人民政府和全国人民代表大会常务委员会的办公所在地。</p>
        <xin-button fill>左边</xin-button>
      </xin-popover>
      <xin-popover position="top">
        <p slot="refer" style="color: 12px">北京地处中国北部、华北平原北部，东与天津毗连，其余均与河北相邻，中心位置东经116°20′、北纬39°56′，是世界著名古都和现代化国际城市，也是中国共产党中央委员会、中华人民共和国中央人民政府和全国人民代表大会常务委员会的办公所在地。</p>
        <xin-button fill>上边</xin-button>
      </xin-popover>
      <xin-popover position="bottom">
        <div slot="refer">
          <p style="color: 12px">北京地处中国北部、华北平原北部，东与天津毗连，其余均与河北相邻，中心位置东经116°20′、北纬39°56′，是世界著名古都和现代化国际城市，也是中国共产党中央委员会、中华人民共和国中央人民政府和全国人民代表大会常务委员会的办公所在地。</p>
          <xin-button>按钮</xin-button>
          <xin-button>按钮</xin-button>
        </div>
        <xin-button fill>下边</xin-button>
      </xin-popover>
      <xin-popover position="right">
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill>右边</xin-button>
      </xin-popover>
    </div>
    <div class="line">
      <xin-label width="60">动画展示</xin-label>
      <xin-popover position="left" animate>
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="success">左边</xin-button>
      </xin-popover>
      <xin-popover position="top" animate>
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="success">上边</xin-button>
      </xin-popover>
      <xin-popover position="bottom" animate>
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="success">下边</xin-button>
      </xin-popover>
      <xin-popover position="right" animate>
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="success">右边</xin-button>
      </xin-popover>
    </div>
    <div class="line">
      <xin-label width="60">trigger</xin-label>
      <xin-popover position="left" trigger="click">
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="warning">左边</xin-button>
      </xin-popover>
      <xin-popover position="top" trigger="hover">
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="warning">上边</xin-button>
      </xin-popover>
      <xin-popover position="bottom" trigger="click">
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="warning">下边</xin-button>
      </xin-popover>
      <xin-popover position="right" trigger="hover">
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="warning">右边</xin-button>
      </xin-popover>
    </div>
    <div class="line">
      <xin-label width="60">颜色展示</xin-label>
      <xin-popover position="left">
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill>左边</xin-button>
      </xin-popover>
      <xin-popover position="top" color="dark">
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill>上边</xin-button>
      </xin-popover>
      <xin-popover position="bottom" color="info">
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill>下边</xin-button>
      </xin-popover>
      <xin-popover position="right" color="success">
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill>右边</xin-button>
      </xin-popover>
      <xin-popover position="top" color="warning">
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill>上边</xin-button>
      </xin-popover>
      <xin-popover position="top" color="error">
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill>上边</xin-button>
      </xin-popover>
    </div>
    <div class="line">
      <xin-label width="60">弧角展示</xin-label>
      <xin-popover position="left" radius>
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="warning">左边</xin-button>
      </xin-popover>
      <xin-popover position="top" radius>
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="warning">上边</xin-button>
      </xin-popover>
      <xin-popover position="bottom" radius>
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="warning">下边</xin-button>
      </xin-popover>
      <xin-popover position="right" radius>
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="warning">右边</xin-button>
      </xin-popover>
    </div>
    <div class="line">
      <xin-label width="60">禁用展示</xin-label>
      <xin-popover position="left" disabled>
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="error">左边</xin-button>
      </xin-popover>
      <xin-popover position="top" disabled>
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="error">上边</xin-button>
      </xin-popover>
      <xin-popover position="bottom" disabled>
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="error">下边</xin-button>
      </xin-popover>
      <xin-popover position="right" disabled>
        <p slot="refer" style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
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
