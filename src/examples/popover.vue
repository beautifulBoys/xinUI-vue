<template>
  <div class="page">
    <div class="line">
      <xin-label width="60">基础展示</xin-label>
      <xin-popover position="left">
        <p style="color: 12px">北京地处中国北部、华北平原北部，东与天津毗连，其余均与河北相邻，中心位置东经116°20′、北纬39°56′，是世界著名古都和现代化国际城市，也是中国共产党中央委员会、中华人民共和国中央人民政府和全国人民代表大会常务委员会的办公所在地。</p>
        <xin-button fill slot="refer">左边</xin-button>
      </xin-popover>
      <xin-popover position="top">
        <p style="color: 12px">沈阳，旧称盛京。</p>
        <xin-button fill slot="refer">上边</xin-button>
      </xin-popover>
      <xin-popover position="bottom">
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。但是由于河北和山西的存在，北京的用水多少能得到兄弟省份的支持。</p>
        <xin-button>按钮</xin-button>
        <xin-button>按钮</xin-button>
        <xin-button fill slot="refer">下边</xin-button>
      </xin-popover>
      <xin-popover position="right">
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill slot="refer">右边</xin-button>
      </xin-popover>
    </div>
    <div class="line">
      <xin-label width="60">动画展示</xin-label>
      <xin-popover position="left" animate>
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="success" slot="refer">左边</xin-button>
      </xin-popover>
      <xin-popover position="top" animate>
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="success" slot="refer">上边</xin-button>
      </xin-popover>
      <xin-popover position="bottom" animate>
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="success" slot="refer">下边</xin-button>
      </xin-popover>
      <xin-popover position="right" animate>
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="success" slot="refer">右边</xin-button>
      </xin-popover>
    </div>
    <div class="line">
      <xin-label width="60">trigger</xin-label>
      <xin-popover position="left" trigger="click">
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="warning" slot="refer">左边</xin-button>
      </xin-popover>
      <xin-popover position="top" trigger="hover">
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="warning" slot="refer">上边</xin-button>
      </xin-popover>
      <xin-popover position="bottom" trigger="click">
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="warning" slot="refer">下边</xin-button>
      </xin-popover>
      <xin-popover position="right" trigger="hover">
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="warning" slot="refer">右边</xin-button>
      </xin-popover>
    </div>
    <div class="line">
      <xin-label width="60">颜色展示</xin-label>
      <xin-popover position="left">
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill slot="refer">左边</xin-button>
      </xin-popover>
      <xin-popover position="top" color="dark">
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill slot="refer">上边</xin-button>
      </xin-popover>
      <xin-popover position="bottom" color="info">
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill slot="refer">下边</xin-button>
      </xin-popover>
      <xin-popover position="right" color="success">
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill slot="refer">右边</xin-button>
      </xin-popover>
      <xin-popover position="top" color="warning">
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill slot="refer">上边</xin-button>
      </xin-popover>
      <xin-popover position="top" color="error">
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill slot="refer">上边</xin-button>
      </xin-popover>
    </div>
    <div class="line">
      <xin-label width="60">弧角展示</xin-label>
      <xin-popover position="left" radius>
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="warning" slot="refer">左边</xin-button>
      </xin-popover>
      <xin-popover position="top" radius>
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="warning" slot="refer">上边</xin-button>
      </xin-popover>
      <xin-popover position="bottom" radius>
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="warning" slot="refer">下边</xin-button>
      </xin-popover>
      <xin-popover position="right" radius>
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="warning" slot="refer">右边</xin-button>
      </xin-popover>
    </div>
    <div class="line">
      <xin-label width="60">禁用展示</xin-label>
      <xin-popover position="left" disabled>
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="error" slot="refer">左边</xin-button>
      </xin-popover>
      <xin-popover position="top" disabled>
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="error" slot="refer">上边</xin-button>
      </xin-popover>
      <xin-popover position="bottom" disabled>
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="error" slot="refer">下边</xin-button>
      </xin-popover>
      <xin-popover position="right" disabled>
        <p style="color: 12px">北京位于华北平原，本就是缺水城市，在人口快速增加后更是缺水。</p>
        <xin-button fill color="error" slot="refer">右边</xin-button>
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

<style lang="scss" scoped>
@import "./index.scss";
p {
  margin: 5px 0;
  line-height: 16px;
}
</style>
