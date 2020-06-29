<template>
  <div class="page">
    <div class="line">
      <xin-checkbox :label="1" v-model="val">清华大学</xin-checkbox>
      <xin-checkbox :label="2" v-model="val">北京大学</xin-checkbox>
      <xin-checkbox :label="3" v-model="val">复旦大学</xin-checkbox>
      <xin-checkbox :label="4" v-model="val">浙江大学</xin-checkbox>
      <xin-checkbox :label="5" v-model="val">西安大学</xin-checkbox>
      <xin-checkbox :label="6" v-model="val">东北大学</xin-checkbox>
    </div>
    <!-- <div class="line">
      <xin-checkbox :label="1" v-model="val" disabled>清华大学</xin-checkbox>
      <xin-checkbox :label="2" v-model="val" disabled>北京大学</xin-checkbox>
      <xin-checkbox :label="3" v-model="val" disabled>复旦大学</xin-checkbox>
      <xin-checkbox :label="4" v-model="val" disabled>浙江大学</xin-checkbox>
      <xin-checkbox :label="5" v-model="val" disabled>西安大学</xin-checkbox>
      <xin-checkbox :label="6" v-model="val" disabled>东北大学</xin-checkbox>
    </div>
    <div class="line" style="background: #0095ff">
      <xin-checkbox :label="1" v-model="val" white>清华大学</xin-checkbox>
      <xin-checkbox :label="2" v-model="val" white>北京大学</xin-checkbox>
    </div> -->
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      list: [
        { id: 1, name: '清华大学' },
        { id: 2, name: '北京大学' },
        { id: 3, name: '复旦大学' },
        { id: 4, name: '浙江大学' },
        { id: 5, name: '西安大学' },
        { id: 6, name: '东北大学' }
      ],
      val: [4]
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
