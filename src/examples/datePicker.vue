<template>
  <div class="page">
    <div class="line">
      <xin-label width="80">基础组件</xin-label>
      <xin-date-picker v-model="val"></xin-date-picker>
      <xin-date-picker v-model="val2" range></xin-date-picker>
    </div>
    <div class="line">
      <xin-label width="80">禁用</xin-label>
      <xin-date-picker v-model="val" disabled></xin-date-picker>
      <xin-date-picker v-model="val2" range disabled></xin-date-picker>
    </div>
    <div class="line">
      <xin-label width="80">清空</xin-label>
      <xin-date-picker v-model="val" clearable></xin-date-picker>
      <xin-date-picker v-model="val2" range clearable></xin-date-picker>
    </div>
    <div class="line">
      <xin-label width="80">格式化日期</xin-label>
    </div>
    <div class="line" style="padding-left: 100px">
      <xin-date-picker v-model="val4"></xin-date-picker>
      <xin-label>无格式化：{{val4}}</xin-label>
    </div>
    <div class="line" style="padding-left: 100px">
      <xin-date-picker v-model="val" format="yyyy/MM/dd"></xin-date-picker>
      <xin-label>值：{{val}}</xin-label>
    </div>
    <div class="line" style="padding-left: 100px">
      <xin-date-picker v-model="val2" range format="yyyy-MM-dd"></xin-date-picker>
      <xin-label>值：{{val2}}</xin-label>
    </div>
    <div class="line">
      <xin-label width="80">时间段选择</xin-label>
      <xin-date-picker v-model="val2" range></xin-date-picker>
    </div>
    <div class="line">
      <xin-label width="80">事件</xin-label>
      <xin-date-picker v-model="val2" range @change="changeEvent"></xin-date-picker>
    </div>
    <div class="line">
      <xin-label>禁用指定日期</xin-label>
    </div>
    <div class="line">
      <xin-label width="80">禁止今天之前</xin-label>
      <xin-date-picker v-model="val1" :disabledDate="disabledDateBefore"></xin-date-picker>
    </div>
    <div class="line">
      <xin-label width="80">禁止今天之后</xin-label>
      <xin-date-picker v-model="val1" :disabledDate="disabledDateAfter"></xin-date-picker>
    </div>
    <div class="line">
      <xin-label width="80">本月之内选择</xin-label>
      <xin-date-picker v-model="val3" range :disabledDate="disabledDate"></xin-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      val: '',
      val1: '',
      val2: {
        start: '2020-06-11',
        end: '2020-06-23'
      },
      val3: {},
      val4: ''
    }
  },
  mounted () {
  },
  methods: {
    changeEvent (e) {
      this.$message.success('选择完毕')
      console.log('change事件', e)
    },
    disabledDateBefore (date) {
      let today = new Date()
      return date < new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`)
    },
    disabledDateAfter (date) {
      let today = new Date()
      return date > new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`)
    },
    disabledDate (date) {
      let today = new Date()
      let thisMonth = new Date(`${today.getFullYear()}-${today.getMonth() + 1}-01`)
      let nextMonth = new Date(`${today.getFullYear()}-${today.getMonth() < 10 ? today.getMonth() + 2 : 1}-01`)
      return date >= nextMonth || date < thisMonth
    }
  }
}
</script>
