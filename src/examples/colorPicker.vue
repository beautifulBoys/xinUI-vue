<template>
  <div class="page">
    <div class="line">
      <xin-label width="80">基础组件</xin-label>
      <xin-color-picker v-model="val"></xin-color-picker>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      val: ''
    }
  },
  mounted () {
  },
  methods: {
    changeEvent (e) {
      this.$message.success('选择完毕')
      console.log('change事件', e)
    }
  }
}
</script>
