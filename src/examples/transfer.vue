<template>
  <div class="page">
    <div class="line">
      <xin-label width="60">颜色展示</xin-label>
      <xin-transfer
        :data="list"
        itemText="label"
        itemValue="id"
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
export default {
  components: {
  },
  data () {
    return {
      list: [],
      value: [4, 6, 14],
      disabled: [6, 7, 8],
      checked: [1, 2, 4, 6]
    }
  },
  mounted () {
    setTimeout(() => {
      this.list = [
        {id: 1, label: '中华人民1'},
        {id: 2, label: '中华人民2'},
        {id: 3, label: '中华人民3'},
        {id: 4, label: '中华人民4'},
        {id: 5, label: '中华人民5'},
        {id: 6, label: '中华人民6'},
        {id: 7, label: '中华人民7'},
        {id: 8, label: '中华人民8'},
        {id: 9, label: '中华人民9'},
        {id: 10, label: '中华人民10'},
        {id: 11, label: '中华人民11'},
        {id: 12, label: '中华人民12'},
        {id: 13, label: '中华人民13'},
        {id: 14, label: '中华人民14'}
      ]
    }, 4000)
  },
  methods: {
    changeEvent (v) {
      console.log('change事件', v)
    }
  }
}
</script>
