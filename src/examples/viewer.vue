<template>
  <div class="example-page">
    <div class="line">
      <xin-button fill color="info" @click="prompt()">prompt 展示</xin-button>
    </div>
    <xin-viewer :images="images"></xin-viewer>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      images: [
        {name: '是打发', url: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'},
        {name: 'gas第三个', url: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'}
      ]
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
