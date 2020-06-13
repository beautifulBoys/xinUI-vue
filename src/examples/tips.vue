<template>
  <div class="page">
    <div class="line">
      <xin-label width="80">颜色及宽度</xin-label>
      <xin-tips color="info" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
      <xin-tips color="success" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
      <xin-tips color="warning" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
      <xin-tips color="error" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
    </div>
    <div class="line">
      <xin-label width="80">填充色</xin-label>
      <xin-tips fill closable color="info" width="500" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
      <xin-tips fill closable color="success" width="500" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
      <xin-tips fill closable color="warning" width="500" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
      <xin-tips fill closable color="error" width="500" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
    </div>
    <div class="line">
      <xin-label width="80">关闭及其自定义</xin-label>
      <xin-tips fill closable color="info" @close="closeEvent" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
      <xin-tips fill closable color="success" @close="closeEvent" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
      <xin-tips fill closable color="warning" @close="closeEvent" closeLabel="知道了" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
      <xin-tips fill closable color="error" @close="closeEvent" closeLabel="知道了" message="注意，此组件库仅供学习交流使用，切勿商用！"></xin-tips>
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
    closeEvent () {
      this.$message.info('点击了关闭按钮')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
// .xin-tips {
//   margin-bottom: 15px;
// }
</style>
