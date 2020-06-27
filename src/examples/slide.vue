<template>
  <div class="page">
    <div class="line">
      <xin-label width="100">颜色及条纹</xin-label>
      <xin-slide v-model="value"></xin-slide>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      value: 60
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
