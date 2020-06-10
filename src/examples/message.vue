<template>
  <div class="page">
    <div class="line">
      <xin-label width="80px">基础展示</xin-label>
      <xin-button @click="message1('info')" fill color="info">信息</xin-button>
      <xin-button @click="message1('success')" fill color="success">成功</xin-button>
      <xin-button @click="message1('warning')" fill color="warning">警告</xin-button>
      <xin-button @click="message1('error')" fill color="error">错误</xin-button>
    </div>
    <div class="line">
      <xin-label width="80px">方法弹出方式</xin-label>
      <xin-button @click="message2('info')" fill color="info">信息</xin-button>
      <xin-button @click="message2('success')" fill color="success">成功</xin-button>
      <xin-button @click="message2('warning')" fill color="warning">警告</xin-button>
      <xin-button @click="message2('error')" fill color="error">错误</xin-button>
    </div>
    <div class="line">
      <xin-label width="80px">手动关闭</xin-label>
      <xin-button @click="message3('info')" fill color="info">信息</xin-button>
      <xin-button @click="message3('success')" fill color="success">成功</xin-button>
      <xin-button @click="message3('warning')" fill color="warning">警告</xin-button>
      <xin-button @click="message3('error')" fill color="error">错误</xin-button>
    </div>
    <div class="line">
      <xin-label width="80px">关闭所有</xin-label>
      <xin-button @click="message4()" fill color="info">关闭所有提示</xin-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    message1 (type) {
      this.$message({ type, message: '这是一条弹出信息！' })
    },
    message2 (type) {
      this.$message[type]('这是一条弹出信息！水利局开始了讲故事老规矩拉斯苦尽甘来收款结果辽阔的攻击力看过了后端开发水电费考虑哈速度快的首付款几十块了')
    },
    message3 (type) {
      this.$message({ type, message: '这是一条弹出信息！', closable: true })
    },
    message4 (type) {
      this.$message.closeAll()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
.line p {
  font-size: 14px;
  line-height: 20px;
  color: #888;
  text-indent: 30px;
}
</style>
