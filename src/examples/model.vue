<template>
  <div class="page">
    <div class="line">
      <xin-button @click="alert()">alert 展示</xin-button>
      <xin-button @click="confirm()">confirm 展示</xin-button>
      <xin-button @click="prompt()">prompt 展示</xin-button>
    </div>
    <!-- <xin-model title="删除确认" :visible.sync="dialog1.show">
      您确认要删除当前选项吗？
    </xin-model> -->
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
        message: '上岛咖啡抗裂砂浆弗兰克斯艰苦奋斗发了多少副科级多斯拉克房间里肯定是非家里的事',
        closable: true,
        confirmLabel: '知道了'
      }).confirm(() => {
        this.$message.success('Alert 点击了 确定')
      })
    },
    confirm () {
      this.$confirm({
        title: '身份确认',
        message: '上岛咖啡抗裂砂浆弗兰克斯艰苦奋斗发了多少副科级多斯拉克房间里肯定是非家里的事',
        closable: true,
        confirmLabel: '搞定哈哈',
        cancelLabel: '取消嘿嘿',
        align: 'center'
      }).confirm(() => {
        this.$message.success('Confirm 点击了 确定')
      }).cancel(() => {
        this.$message.error('Confirm 点击了 取消')
      })
    },
    prompt () {
      // this.$prompt({
      //   title: '身份确认',
      //   message: '上岛咖啡抗裂砂浆弗兰克斯艰苦奋斗发了多少副科级多斯拉克房间里肯定是非家里的事',
      //   closable: true,
      //   confirmLabel: '搞定哈哈',
      //   cancelLabel: '取消嘿嘿',
      //   align: 'center'
      // }).confirm(res => {
      //   this.$message.success('prompt 点击了 确定')
      // }).cancel(err => {
      //   this.$message.success('prompt 点击了 取消')
      // })
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
.header {
  text-align: center;
  padding: 10px 20px;
  border-bottom: 1px solid transparentize(#0095ff, 0);
  position: relative;
  .xin-iconfont {
    width: 30px;
    height: 30px;
    cursor: pointer;
    text-align: center;
    line-height: 30px;
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 100%;
    background: #ff6666;
    color: #fff;
  }
}
.footer {
  text-align: center;
  padding: 20px;
  background: transparentize(#0095ff, 0.8);
}
</style>
