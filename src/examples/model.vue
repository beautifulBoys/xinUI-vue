<template>
  <div class="example-page">
    <div class="line">
      <xin-button fill color="success" @click="alert()">alert 展示</xin-button>
      <xin-button fill color="warning" @click="confirm()">confirm 展示</xin-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      dialog1: {
        show: false
      }
    }
  },
  mounted () {
  },
  methods: {
    alert () {
      this.$alert({
        title: 'Alert 提示',
        message: '本组件库仅供学习交流，不可用于商业用途，谢谢！',
        closable: true,
        confirmLabel: '知道了'
      }).confirm(() => {
        this.$message.success('Alert 点击了 确定')
      }).close(() => {
        this.$message.warning('Alert 点击了 关闭')
      })
    },
    confirm () {
      this.$confirm({
        title: '身份确认',
        message: '您同意不将本组件库用于商业用途的约束吗？',
        closable: true,
        confirmLabel: '同意哈哈',
        cancelLabel: '拒绝嘿嘿',
        align: 'center'
      }).confirm(() => {
        this.$message.success('Confirm 点击了 确定')
      }).cancel(() => {
        this.$message.error('Confirm 点击了 取消')
      }).close(() => {
        this.$message.warning('Confirm 点击了 关闭')
      })
    }
  }
}
</script>
