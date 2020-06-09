<template>
  <div class="page">
    <div class="line">
      <xin-label>基础展示</xin-label>
      <xin-tabs
      >
      </xin-tabs>
    </div>
    <div class="line">
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      tbody: [
        {id: 1, title: '空军'},
        {id: 2, title: '陆军'},
        {id: 3, title: '海军'},
        {id: 4, title: '导弹军'},
        {id: 5, title: '后勤军'},
        {id: 6, title: '指挥军'}
      ]
    }
  },
  mounted () {
  },
  methods: {
    checkboxChange (val, list) {
      this.checkboxValue = val
      console.log('checkbox chage 事件: ', val, list)
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
</style>
