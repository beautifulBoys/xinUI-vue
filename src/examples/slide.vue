<template>
  <div class="page">
    <div class="line">
      <xin-label width="100">基础展示</xin-label>
      <xin-slide v-model="value"></xin-slide>
    </div>
    <div class="line">
      <xin-label width="100">步长</xin-label>
      <xin-slide v-model="value1" :step="10"></xin-slide>
    </div>
    <div class="line">
      <xin-label width="100">禁用</xin-label>
      <xin-slide v-model="value"></xin-slide>
    </div>
    <div class="line">
      <xin-label width="100">只读</xin-label>
      <xin-slide v-model="value"></xin-slide>
    </div>
    <div class="line">
      <xin-label width="100">区间选择</xin-label>
      <xin-slide v-model="value" range></xin-slide>
    </div>
    <div class="line">
      <xin-label width="100">范围内选择</xin-label>
      <xin-slide v-model="value" :min="35" :max="42" ></xin-slide>
      <xin-slide v-model="value4" range :min="35" :max="42" ></xin-slide>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      value: 0,
      value1: 30,
      value2: 60,
      value3: 100,
      value4: {
        start: 30,
        end: 70
      }
    }
  },
  mounted () {
  },
  methods: {
    changeEvent (v) {
      console.log('change事件', v)
    }
  }
}
</script>
