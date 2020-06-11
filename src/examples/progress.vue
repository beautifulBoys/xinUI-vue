<template>
  <div class="page">
    <div class="line">
      <xin-label width="60">颜色 及 条纹动态</xin-label>
    </div>
    <div class="line">
      <xin-progress v-model="percent"></xin-progress>
      <xin-progress v-model="percent" color="success"></xin-progress>
      <xin-progress v-model="percent" stripe color="warning"></xin-progress>
      <xin-progress v-model="percent" stripe color="error"></xin-progress>
    </div>
    <div class="line">
      <xin-label width="60">文字在内部</xin-label>
    </div>
    <div class="line">
      <xin-progress v-model="percent" inside></xin-progress>
      <xin-progress v-model="percent" inside color="success"></xin-progress>
      <xin-progress v-model="percent" inside stripe color="warning"></xin-progress>
      <xin-progress v-model="percent" inside stripe color="error"></xin-progress>
    </div>
    <div class="line">
      <xin-label width="60">圆角 及 宽度</xin-label>
    </div>
    <div class="line">
      <xin-progress v-model="percent" round width="500"></xin-progress>
      <xin-progress v-model="percent" inside round width="500" color="success"></xin-progress>
      <xin-progress v-model="percent" inside round stripe color="warning"></xin-progress>
      <xin-progress v-model="percent" round color="error"></xin-progress>
    </div>
    <div class="line">
      <xin-label>动态修改（value: {{percent}}%）</xin-label>
    </div>
    <div class="line">
      <xin-button fill color="active" @click="percent -= 10">- 10%</xin-button>
      <xin-button fill color="success" @click="percent += 10">+ 10%</xin-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      percent: 60
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
</style>
