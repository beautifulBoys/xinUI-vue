<template>
  <div class="page">
    <div class="line">
      <xin-label width="100">基础展示</xin-label>
      <xin-tag message="红烧排骨"></xin-tag>
      <xin-tag color="info" message="鱼香肉丝"></xin-tag>
      <xin-tag color="success" message="酱香茄条"></xin-tag>
      <xin-tag color="warning" message="京酱肉丝"></xin-tag>
      <xin-tag color="error" message="糖醋鲤鱼"></xin-tag>
    </div>
    <div class="line">
      <xin-label width="100">填充色展示</xin-label>
      <xin-tag fill message="红烧排骨"></xin-tag>
      <xin-tag fill color="info" message="鱼香肉丝"></xin-tag>
      <xin-tag fill color="success" message="酱香茄条"></xin-tag>
      <xin-tag fill color="warning" message="京酱肉丝"></xin-tag>
      <xin-tag fill color="error" message="糖醋鲤鱼"></xin-tag>
    </div>
    <div class="line">
      <xin-label width="100">关闭及事件</xin-label>
      <xin-tag closable value="1" @close="closeEvent" message="红烧排骨"></xin-tag>
      <xin-tag closable value="2" @close="closeEvent" color="info" message="鱼香肉丝"></xin-tag>
      <xin-tag closable value="3" @close="closeEvent" color="success" message="酱香茄条"></xin-tag>
      <xin-tag fill closable @close="closeEvent" color="warning" message="京酱肉丝"></xin-tag>
      <xin-tag fill closable @close="closeEvent" color="error" message="糖醋鲤鱼"></xin-tag>
    </div>
    <div class="line">
      <xin-label width="100">小按钮</xin-label>
      <xin-tag small closable @close="closeEvent" message="红烧排骨"></xin-tag>
      <xin-tag small closable @close="closeEvent" color="info" message="鱼香肉丝"></xin-tag>
      <xin-tag small closable @close="closeEvent" color="success" message="酱香茄条"></xin-tag>
      <xin-tag small fill closable @close="closeEvent" color="warning" message="京酱肉丝"></xin-tag>
      <xin-tag small fill closable @close="closeEvent" color="error" message="糖醋鲤鱼"></xin-tag>
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

<style lang="scss" scoped>
@import "./index.scss";
// .xin-tag {
//   margin-bottom: 15px;
// }
</style>
