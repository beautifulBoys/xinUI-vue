<template>
  <div class="example-page">
    <div class="line">
      <xin-label width="60">单选</xin-label>
      <xin-select :list="list" itemValue="id" itemLabel="name" v-model="val"></xin-select>
    </div>
    <div class="line">
      <xin-label width="60">多选</xin-label>
      <xin-select :list="list" multiple itemValue="id" itemLabel="name" v-model="val1" placeholder="请多选"></xin-select>
    </div>
    <div class="line">
      <xin-label width="60">图标</xin-label>
      <xin-select :list="list" itemValue="id" icon="smile" itemLabel="name" v-model="val2"></xin-select>
    </div>
    <div class="line">
      <xin-label width="60">禁用</xin-label>
      <xin-select :list="list" itemValue="id" icon="smile" disabled itemLabel="name" v-model="val2"></xin-select>
    </div>
    <div class="line">
      <xin-label width="60">单选清空</xin-label>
      <xin-select :list="list" itemValue="id" clearable itemLabel="name" v-model="val3"></xin-select>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      list: [
        { id: 1, name: '清华大学' },
        { id: 2, name: '北京大学' },
        { id: 3, name: '复旦大学' },
        { id: 4, name: '浙江大学' },
        { id: 5, name: '西安大学' },
        { id: 6, name: '东北大学' }
      ],
      val: 2,
      val1: [4, 2],
      val2: 3,
      val3: 4
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
