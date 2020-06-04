<template>
  <div class="page">
    <div class="line">
      <xin-label width="60">展示</xin-label>
      <xin-switch v-model="val"></xin-switch>
      <xin-switch v-model="val" color="success"></xin-switch>
      <xin-switch v-model="val" color="error"></xin-switch>
      <xin-switch v-model="val" color="warning"></xin-switch>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      val: true
    }
  },
  mounted () {
  },
  methods: {
    changeEvent () {
      console.log('change事件')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
