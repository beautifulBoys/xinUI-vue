<template>
  <div class="page">
    <div class="line">
      <xin-label width="100">宽度200像素</xin-label>
      <xin-input type="text"></xin-input>
    </div>
    <div class="line">
      <xin-label width="100" align="left">左对齐</xin-label>
      <xin-input type="text"></xin-input>
    </div>
    <div class="line">
      <xin-label width="100" align="center">居中对齐</xin-label>
      <xin-input type="text"></xin-input>
    </div>
    <div class="line">
      <xin-label width="100" align="right">右对齐</xin-label>
      <xin-input type="text"></xin-input>
    </div>
    <div class="line">
      <xin-label width="100" required>必须字段</xin-label>
      <xin-input type="text"></xin-input>
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
