<template>
  <div class="example-page">
    <div class="line">
      <xin-label width="60">Bar 展示</xin-label>
      <xin-button @click="start()">开始加载</xin-button>
      <xin-button color="success" @click="success()">加载成功</xin-button>
      <xin-button color="error" @click="error()">加载失败</xin-button>
    </div>
    <div class="line">
      <!-- <xin-loading
        mode="bar"
        :status="status"
      >
      </xin-loading> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      status: '',
      height: '50%'
    }
  },
  mounted () {
  },
  methods: {
    start () {
      this.$loading.start()
    },
    success () {
      this.$loading.success()
    },
    error () {
      this.$loading.error()
    }
  }
}
</script>
