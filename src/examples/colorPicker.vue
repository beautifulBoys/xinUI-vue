<template>
  <div class="example-page">
    <div class="line">
      <xin-label width="80">基础组件</xin-label>
      <xin-color-picker v-model="val"></xin-color-picker>
      <xin-color-picker v-model="val1"></xin-color-picker>
      <xin-color-picker v-model="val2"></xin-color-picker>
      <xin-color-picker v-model="val3"></xin-color-picker>
      <xin-color-picker v-model="val4"></xin-color-picker>
    </div>
    <div class="line">
      <xin-label width="80">事件</xin-label>
      <xin-color-picker v-model="val" @change="changeEvent"></xin-color-picker>
      <xin-color-picker v-model="val1" @change="changeEvent"></xin-color-picker>
      <xin-color-picker v-model="val2" @change="changeEvent"></xin-color-picker>
      <xin-color-picker v-model="val3" @change="changeEvent"></xin-color-picker>
      <xin-color-picker v-model="val4" @change="changeEvent"></xin-color-picker>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      val: '#7d7f82',
      val1: '#0095ff',
      val2: '#15bf81',
      val3: '#f7ab42',
      val4: '#ff6666'
    }
  },
  mounted () {
  },
  methods: {
    changeEvent (e) {
      this.$message.success('选择完毕: ' + e)
      console.log('change事件', e)
    }
  }
}
</script>
