<template>
  <div class="example-page">
    <div class="line">
      <xin-button fill color="success" @click="alert()">alert 展示</xin-button>
      <xin-button fill color="warning" @click="confirm()">confirm 展示</xin-button>
      <xin-button fill color="info" @click="prompt()">prompt 展示</xin-button>
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
      }).close(() => {
        this.$message.warning('Alert 点击了 关闭')
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
      }).close(() => {
        this.$message.warning('Confirm 点击了 关闭')
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
