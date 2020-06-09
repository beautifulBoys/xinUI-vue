<template>
  <div class="page">
    <div class="line">
      <xin-label>基础展示</xin-label>
      <xin-button @click="dialog.show = true">弹出</xin-button>
    </div>
    <xin-dialog title="信息登记" :visible.sync="dialog.show">
      <div class="content">
        <div class="line">
          <xin-label>姓名：</xin-label>
          <xin-input></xin-input>
        </div>
        <div class="line">
          <xin-label>性别：</xin-label>
          <xin-input></xin-input>
        </div>
      </div>
    </xin-dialog>
    <xin-dialog title="信息登记1" :visible.sync="dialog1.show">
      <div class="content">
        <div class="line">
          <xin-label>姓名：</xin-label>
          <xin-input></xin-input>
        </div>
      </div>
    </xin-dialog>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      dialog: {
        show: false
      },
      dialog1: {
        show: false
      }
    }
  },
  mounted () {
  },
  methods: {
    tabChange (val) {
      this.active = val
      console.log('tabChange 事件: ', val)
    },
    tabChange1 (val) {
      this.active1 = val
      console.log('tabChange 事件: ', val)
    },
    radioChange (val, item) {
      this.radioValue = val
      console.log('radio chage 事件: ', val, item)
    },
    changeEvent (v) {
      console.log('change事件', v)
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
