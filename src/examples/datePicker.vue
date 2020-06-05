<template>
  <div class="page">
    <div class="line">
      <xin-label width="60">基础组件</xin-label>
      <xin-date-picker v-model="val"></xin-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      val: '',
      val1: [4, 2],
      val2: 3,
      val3: 4
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
