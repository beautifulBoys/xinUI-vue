<template>
  <div class="page">
    <div class="line">
      <xin-label width="100">基础及间隔</xin-label>
      <xin-row :gutter="10">
        <xin-col :span="24" v-for="(item, index) in 1" :key="index">模块</xin-col>
      </xin-row>
      <xin-row :gutter="10">
        <xin-col :span="12" v-for="(item, index) in 2" :key="index">模块</xin-col>
      </xin-row>
      <xin-row :gutter="10">
        <xin-col :span="8" v-for="(item, index) in 3" :key="index">模块</xin-col>
      </xin-row>
      <xin-row :gutter="10">
        <xin-col :span="6" v-for="(item, index) in 4" :key="index">模块</xin-col>
      </xin-row>
      <xin-row :gutter="10">
        <xin-col :span="4" v-for="(item, index) in 6" :key="index">模块</xin-col>
      </xin-row>
      <xin-row :gutter="10">
        <xin-col :span="3" v-for="(item, index) in 8" :key="index">模块</xin-col>
      </xin-row>
      <xin-row :gutter="10">
        <xin-col :span="2" v-for="(item, index) in 12" :key="index">模块</xin-col>
      </xin-row>
    </div>
    <div class="line">
      <xin-label width="100">offset</xin-label>
      <xin-row>
        <xin-col :span="6">模块</xin-col>
        <xin-col :span="6" :offset="12">模块</xin-col>
      </xin-row>
      <xin-row>
        <xin-col :span="8">模块</xin-col>
        <xin-col :span="4" :offset="4">模块</xin-col>
        <xin-col :span="4" :offset="4">模块</xin-col>
      </xin-row>
      <xin-row>
        <xin-col :span="3">模块</xin-col>
        <xin-col :span="3" :offset="3">模块</xin-col>
        <xin-col :span="6" :offset="3">模块</xin-col>
        <xin-col :span="3" :offset="3">模块</xin-col>
      </xin-row>
    </div>
    <div class="line">
      <xin-label width="100">flex排版</xin-label>
      <xin-row :gutter="10" :align="align" :justify="justify">
        <xin-col :span="4" style="height: 50px">模块</xin-col>
        <xin-col :span="4" style="height: 30px">模块</xin-col>
        <xin-col :span="4" style="height: 65px">模块</xin-col>
        <xin-col :span="4" style="height: 45px">模块</xin-col>
      </xin-row>
      <div style="margin: 10px 0">
        <xin-button @click="align = 'start'">align start</xin-button>
        <xin-button @click="align = 'center'">align center</xin-button>
        <xin-button @click="align = 'end'">align end</xin-button>
      </div>
      <div style="margin: 10px 0">
        <xin-button @click="justify = 'start'">justify start</xin-button>
        <xin-button @click="justify = 'center'">justify center</xin-button>
        <xin-button @click="justify = 'end'">justify end</xin-button>
        <xin-button @click="justify = 'space-around'">justify space-around</xin-button>
        <xin-button @click="justify = 'space-between'">justify space-between</xin-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      align: 'start',
      justify: 'start'
    }
  },
  mounted () {
  },
  methods: {
    closeEvent (val) {
      this.$message.info('点击了关闭按钮: ' + val)
    }
  }
}
</script>
