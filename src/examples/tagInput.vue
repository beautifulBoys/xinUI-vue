<template>
  <div class="page">
    <div class="line">
      <xin-label width="80">基础组件</xin-label>
      <xin-tag-input v-model="val"></xin-tag-input>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      val: ['陆军', '东风快递', '火箭军']
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
