<template>
  <div class="example-page">
    <div class="line">
      <xin-label width="60">单选</xin-label>
      <xin-select :list="list" itemValue="code" itemLabel="name" v-model="val"></xin-select>
    </div>
    <div class="line">
      <xin-label width="60">多选</xin-label>
      <xin-select :list="list" multiple itemValue="code" itemLabel="name" v-model="val1" placeholder="请多选"></xin-select>
    </div>
    <div class="line">
      <xin-label width="60">图标</xin-label>
      <xin-select :list="list" itemValue="code" icon="smile" itemLabel="name" v-model="val2"></xin-select>
    </div>
    <div class="line">
      <xin-label width="60">禁用</xin-label>
      <xin-select :list="list" itemValue="code" icon="smile" disabled itemLabel="name" v-model="val2"></xin-select>
    </div>
    <div class="line">
      <xin-label width="60">单选清空</xin-label>
      <xin-select :list="list" itemValue="code" clearable itemLabel="name" v-model="val3"></xin-select>
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
      list: mapJson,
      val: '31',
      val1: ['31', '23'],
      val2: '31',
      val3: '23'
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
