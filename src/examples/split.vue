<template>
  <div class="page">
    <div class="line">
      <xin-label width="60">横向展示</xin-label>
      <xin-split
        style="width: 100%;height: 150px;border: 1px solid #eee"
        v-model="width"
      >
        <div slot="left" class="p">死神镰刀空格键了的时间里</div>
        <div slot="right" class="p">了范德萨苦尽甘来个框架</div>
      </xin-split>
    </div>
    <div class="line">
      <xin-label width="60">纵向展示</xin-label>
      <xin-split
        style="width: 100%;height: 300px;border: 1px solid #eee"
        v-model="height"
        mode="vertical"
      >
        <div slot="top" class="p">死神镰刀空格键了的时间里</div>
        <div slot="bottom" class="p">了范德萨苦尽甘来个框架</div>
      </xin-split>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      width: '50%',
      height: '50%'
    }
  },
  mounted () {
  },
  methods: {
    changeEvent (v) {
      console.log('change事件', v)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
.p {
  width: 100%;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
}
</style>
