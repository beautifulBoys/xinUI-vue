<template>
  <div class="example-page">
    <div class="line">
      <xin-label width="60">颜色展示</xin-label>
      <xin-transfer
        :list="list"
        itemText="name"
        itemValue="code"
        v-model="value"
        :disabled="disabled"
        :checked="checked"
        @change="changeEvent"
      ></xin-transfer>
    </div>
    <div class="line">
      <xin-label width="60">默认</xin-label>
    </div>
  </div>
</template>

<script>
import mapJson from './map'
export default {
  components: {
  },
  data () {
    return {
      list: [],
      value: ['23', '41', '46'],
      disabled: ['20', '46', '52'],
      checked: ['41', '25', '23', '31']
    }
  },
  mounted () {
    setTimeout(() => {
      this.list = mapJson
    }, 3000)
  },
  methods: {
    changeEvent (v) {
      console.log('change事件', v)
    }
  }
}
</script>
