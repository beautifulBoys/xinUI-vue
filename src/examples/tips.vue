<template>
  <div class="page">
    <div class="line">
      <xin-label width="100">基础展示</xin-label>
      <xin-tips color="info" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
      <xin-tips color="success" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
      <xin-tips color="warning" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
      <xin-tips color="error" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
    </div>
    <div class="line">
      <xin-label width="100">填充色及宽度</xin-label>
      <xin-tips fill color="info" width="500" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
      <xin-tips fill color="success" width="500" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
      <xin-tips fill color="warning" width="500" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
      <xin-tips fill color="error" width="500" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
    </div>
    <div class="line">
      <xin-label width="100">关闭及其自定义</xin-label>
      <xin-tips fill closable value="12" color="info" @close="closeEvent" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
      <xin-tips fill closable value="13" color="success" @close="closeEvent" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
      <xin-tips fill closable value="15" color="warning" @close="closeEvent" closeLabel="知道了" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
      <xin-tips fill closable value="18" color="error" @close="closeEvent" closeLabel="知道了" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
    </div>
    
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      val: 2
    }
  },
  mounted () {
  },
  methods: {
    closeEvent (val) {
      this.$message.info('点击了关闭按钮: ' + val)
    }
  }
}
</script>
