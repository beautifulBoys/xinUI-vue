<template>
  <div class="page">
    <div class="line">
      <xin-label width="60">基础组件</xin-label>
      <xin-date-picker v-model="val"></xin-date-picker>
    </div>
    <div class="line">
      <xin-label width="60">禁用</xin-label>
      <xin-date-picker v-model="val1" disabled></xin-date-picker>
    </div>
    <div class="line">
      <xin-label width="60">清空</xin-label>
      <xin-date-picker v-model="val1" clearable></xin-date-picker>
    </div>
    <div class="line">
      <xin-label width="60">时间段选择</xin-label>
      <xin-date-picker v-model="val1" range></xin-date-picker>
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
      val1: '',
      val2: ['2020-05-12', '2020-05-16'],
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
