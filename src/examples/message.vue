<template>
  <div class="page">
    <div class="line">
      <xin-button @click="message1()">基础展示</xin-button>
      <xin-button @click="message2()">表单展示</xin-button>
      <xin-button @click="message3()">自定义展示</xin-button>
    </div>
    <xin-message
      :show.sync="show"
      type="success"
      message="这是一条成功消息！"
    ></xin-message>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      show: false
    }
  },
  mounted () {
  },
  methods: {
    message1 () {
      this.show = true
    },
    message2 () {
    },
    message3 () {
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
