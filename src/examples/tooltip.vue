<template>
  <div class="page">
    <div class="line">
      <!-- <xin-tooltip position="top" content="工具条">
        <xin-button fill>上边</xin-button>
      </xin-tooltip> -->
      <!-- <xin-tooltip position="right" content="工具条">
        <xin-button>右边</xin-button>
      </xin-tooltip>
      <div style="height: 100px"></div> -->
      <!-- <xin-tooltip position="bottom" content="工具条">
        <xin-button>下边</xin-button>
      </xin-tooltip> -->
      <span style="margin-right: 100px"></span>
      <xin-tooltip position="left" content="工具条">
        <xin-button>左边</xin-button>
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
