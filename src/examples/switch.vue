<template>
  <div class="example-page">
    <div class="line">
      <xin-label width="80">展示</xin-label>
      <xin-switch v-model="val"></xin-switch>
      <xin-switch v-model="val" color="success"></xin-switch>
      <xin-switch v-model="val" color="error"></xin-switch>
      <xin-switch v-model="val" color="warning"></xin-switch>
    </div>
    <div class="line">
      <xin-label width="80">状态显示</xin-label>
      <xin-switch v-model="val1" color="success" openLabel="开" closeLabel="闭"></xin-switch>
      <xin-switch v-model="val1" color="error" openLabel="打开" closeLabel="关闭"></xin-switch>
    </div>
    <div class="line">
      <xin-label width="80">状态值显示</xin-label>
      <xin-switch v-model="val2" color="success" :openValue="true" :closeValue="false"></xin-switch>
      <xin-label>{{val2}}</xin-label>
      <xin-switch v-model="val3" color="error" :openValue="1" :closeValue="0"></xin-switch>
      <xin-label>{{val3}}</xin-label>
      <xin-switch v-model="val4" color="warning" openValue="打开" closeValue="关闭"></xin-switch>
      <xin-label>{{val4}}</xin-label>
    </div>
    <div class="line">
      <xin-label width="80">超长文字显示</xin-label>
      <xin-switch v-model="val5" color="success" openLabel="第三十二届东京奥运会开幕" closeLabel="第三十二届东京奥运会闭幕"></xin-switch>
    </div>
    <div class="line">
      <xin-label width="80">事件</xin-label>
      <xin-switch v-model="val5" color="success" openLabel="开幕" closeLabel="闭幕" @change="changeEvent"></xin-switch>
    </div>
    <div class="line">
      <xin-label width="80">禁用</xin-label>
      <xin-switch v-model="val1" disabled></xin-switch>
      <xin-switch v-model="val1" disabled color="success"></xin-switch>
      <xin-switch v-model="val1" disabled color="error"></xin-switch>
      <xin-switch v-model="val1" disabled color="warning"></xin-switch>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      val: true,
      val1: true,
      val2: true,
      val3: 0,
      val4: '打开',
      val5: true,
      val6: true
    }
  },
  mounted () {
  },
  methods: {
    changeEvent (v) {
      this.$message.info(String(v))
      console.log('change事件', v)
    }
  }
}
</script>
