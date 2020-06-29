<template>
  <div class="example-page">
    <div class="line">
      <xin-label width="100">基础展示</xin-label>
      <xin-slide v-model="value"></xin-slide>
    </div>
    <div class="line">
      <xin-label width="100">步长</xin-label>
      <xin-slide v-model="value1" :step="10"></xin-slide>
    </div>
    <div class="line">
      <xin-label width="100">间断点</xin-label>
      <xin-slide v-model="value1" :step="10" dot></xin-slide>
    </div>
    <div class="line">
      <xin-label width="100">单位</xin-label>
      <xin-slide v-model="value2" :min="35" :max="42" :step="0.5" unit="℃"></xin-slide>
    </div>
    <div class="line">
      <xin-label width="100">禁用</xin-label>
      <xin-slide v-model="value" disabled></xin-slide>
    </div>
    <div class="line">
      <xin-label width="100">只读</xin-label>
      <xin-slide v-model="value" readonly></xin-slide>
    </div>
    <div class="line">
      <xin-label width="100">区间选择</xin-label>
      <xin-slide v-model="value5" range></xin-slide>
    </div>
    <div class="line">
      <xin-label width="100">范围内选择</xin-label>
      <xin-slide v-model="value2" :min="35" :max="42" :step="0.5"></xin-slide>
      <xin-slide v-model="value4" range :min="35" :max="42"></xin-slide>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      value: 40,
      value1: 30,
      value2: 39,
      value3: 100,
      value4: {
        start: 37,
        end: 40
      },
      value5: {
        start: 20,
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
