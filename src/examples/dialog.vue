<template>
  <div class="page">
    <div class="line">
      <xin-label>基础展示（值：{{active}}）</xin-label>
      
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      active: 'haiJun',
      list: [
        {name: 'kongJun', title: '空军'},
        {name: 'luJun', title: '陆军'},
        {name: 'haiJun', title: '海军'},
        {name: 'huoJianJun', title: '火箭军'},
        {name: 'houQinJun', title: '后勤军'}
      ],
      active1: 2,
      list1: [
        {name: 1, title: '空军'},
        {name: 2, title: '陆军'}
      ]
    }
  },
  mounted () {
  },
  methods: {
    tabChange (val) {
      this.active = val
      console.log('tabChange 事件: ', val)
    },
    tabChange1 (val) {
      this.active1 = val
      console.log('tabChange 事件: ', val)
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
.line p {
  font-size: 14px;
  line-height: 20px;
  color: #888;
  text-indent: 30px;
}
</style>
