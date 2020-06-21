<template>
  <div class="page">
    <div class="line">
      <xin-label width="60">颜色展示</xin-label>
    </div>
    <div class="line">
      <xin-label width="60">默认</xin-label>
      <xin-rate v-model="val"></xin-rate>
    </div>
    <div class="line">
      <xin-label width="60">绿色</xin-label>
      <xin-rate v-model="val1" :size="7" color="success"></xin-rate>
    </div>
    <div class="line">
      <xin-label width="60">红色</xin-label>
      <xin-rate v-model="val2" :size="10" color="error"></xin-rate>
    </div>
    <div class="line">
      <xin-label width="60">黄色</xin-label>
      <xin-rate v-model="val3" :size="10" color="warning"></xin-rate>
    </div>
    <div class="line">
      <xin-label width="60">禁用展示</xin-label>
      <xin-rate v-model="val4" :size="10" disabled></xin-rate>
    </div>
    <div class="line">
      <xin-label width="60">事件展示</xin-label>
      <xin-rate v-model="val4" :size="10" color="success" @change="changeEvent"></xin-rate>
    </div>
    <div class="line">
      <xin-label width="60">图标展示</xin-label>
    </div>
    <div class="line">
      <xin-label width="60">星</xin-label>
      <xin-rate v-model="val" color="warning"></xin-rate>
    </div>
    <div class="line">
      <xin-label width="60">心</xin-label>
      <xin-rate v-model="val" color="error" type="heart"></xin-rate>
    </div>
    <div class="line">
      <xin-label width="60">皇冠</xin-label>
      <xin-rate v-model="val" color="warning" type="crown"></xin-rate>
    </div>
    <div class="line">
      <xin-label width="60">钻</xin-label>
      <xin-rate v-model="val" type="diamond"></xin-rate>
    </div>
    <div class="line">
      <xin-label width="60">笑脸</xin-label>
      <xin-rate v-model="val" color="success" type="face"></xin-rate>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      val: 2,
      val1: 3,
      val2: 6,
      val3: 8,
      val4: 4,
      val5: 9
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
