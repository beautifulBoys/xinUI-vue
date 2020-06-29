<template>
  <div class="example-page">
    <div class="line">
      <xin-label width="80">颜色展示</xin-label>
      <xin-input type="text" v-model="val" placeholder="请输入姓名"></xin-input>
      <xin-input type="text" v-model="val" color="info" placeholder="请输入姓名"></xin-input>
      <xin-input type="text" v-model="val" color="success" placeholder="请输入姓名"></xin-input>
      <xin-input type="text" v-model="val" color="warning" placeholder="请输入姓名"></xin-input>
      <xin-input type="text" v-model="val" color="error" placeholder="请输入姓名"></xin-input>
    </div>
    <div class="line">
      <xin-label width="80">圆角</xin-label>
      <xin-input type="text" round v-model="val1"></xin-input>
    </div>
    <div class="line">
      <xin-label width="80">图标</xin-label>
      <xin-input type="text" leftIcon="shijian" rightIcon="Group-6" v-model="val1"></xin-input>
    </div>
    <div class="line">
      <xin-label width="80">禁用</xin-label>
      <xin-input type="text" disabled v-model="val2"></xin-input>
    </div>
    <div class="line">
      <xin-label width="80">密码输入</xin-label>
      <xin-input type="password" v-model="val2"></xin-input>
    </div>
    <div class="line">
      <xin-label width="80">输入正确</xin-label>
      <xin-input type="text" color="success" v-model="val2"></xin-input>
    </div>
    <div class="line">
      <xin-label width="80">输入错误</xin-label>
      <xin-input type="text" color="error" v-model="val2"></xin-input>
    </div>
    <div class="line">
      <xin-label width="80">最大长度</xin-label>
      <xin-input type="text" v-model="val3" :maxLength="6"></xin-input>
    </div>
    <div class="line">
      <xin-label width="80">整数</xin-label>
      <xin-input type="text" v-model="val4" rule="int"></xin-input>
    </div>
    <div class="line">
      <xin-label width="80">正数</xin-label>
      <xin-input type="text" v-model="val5" rule="positive"></xin-input>
    </div>
    <div class="line">
      <xin-label width="80">浮点数</xin-label>
      <xin-input type="text" v-model="val6" rule="float"></xin-input>
    </div>
    <div class="line">
      <xin-label width="80">非中文</xin-label>
      <xin-input type="text" v-model="val7" rule="noChinese"></xin-input>
    </div>
    <div class="line">
      <xin-label width="80">正则校验</xin-label>
      <xin-input type="text" v-model="val8" :rule="/^[0-9a-zA-Z]*$/g"></xin-input>
    </div>
    <div class="line">
      <xin-label width="80">输入区域</xin-label>
      <xin-input type="text" textarea round v-model="val9" placeholder="请输入"></xin-input>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      val: '',
      val1: '',
      val2: '中户人民共和国',
      val3: '',
      val4: '',
      val5: '',
      val6: '',
      val7: '',
      val8: '',
      val9: '',
      val10: ''
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
