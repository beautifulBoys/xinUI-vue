<template>
  <div class="example-page">
    <div class="line">
      <xin-label width="80">基础组件</xin-label>
      <xin-tag-input v-model="val"></xin-tag-input>
    </div>
    <div class="line">
      <xin-label width="80">宽度</xin-label>
      <xin-tag-input v-model="val1" width="300"></xin-tag-input>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      val: [],
      val1: ['奶茶', '豆汁', '冷饮']
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
