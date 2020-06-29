<template>
  <div class="example-page">
    <div class="line">
      <xin-label width="80">基础展示</xin-label>
      <xin-radio label="1" v-model="val" @change="changeEvent">清华大学</xin-radio>
      <xin-radio label="2" v-model="val">北京大学</xin-radio>
      <xin-radio label="3" v-model="val">复旦大学</xin-radio>
      <xin-radio label="4" v-model="val">浙江大学</xin-radio>
      <xin-radio label="5" v-model="val">西安大学</xin-radio>
      <xin-radio label="6" v-model="val">东北大学</xin-radio>
    </div>
    <div class="line">
      <xin-label width="80">禁用</xin-label>
      <xin-radio label="1" v-model="val" disabled>清华大学</xin-radio>
      <xin-radio label="2" v-model="val" disabled>北京大学</xin-radio>
      <xin-radio label="3" v-model="val" disabled>复旦大学</xin-radio>
      <xin-radio label="4" v-model="val" disabled>浙江大学</xin-radio>
      <xin-radio label="5" v-model="val" disabled>西安大学</xin-radio>
      <xin-radio label="6" v-model="val" disabled>东北大学</xin-radio>
    </div>
    <div class="line" style="background: #0095ff">
      <xin-label width="80">白色</xin-label>
      <xin-radio label="1" v-model="val" white>清华大学</xin-radio>
      <xin-radio label="2" v-model="val" white>北京大学</xin-radio>
      <xin-radio label="3" v-model="val" white disabled>复旦大学</xin-radio>
      <xin-radio label="4" v-model="val" white disabled>浙江大学</xin-radio>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      val: '3'
    }
  },
  mounted () {
  },
  methods: {
    changeEvent () {
      console.log('change事件')
    }
  }
}
</script>
