<template>
  <div class="example-page example-crop">
    <div class="line">
      <xin-label width="80">完整示例</xin-label>
      <xin-crop
      ></xin-crop>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    beforeUpload (e) {
      console.log('beforeUpload', e)
    },
    onProgress (e) {
      console.log('onProgress', e)
    },
    onSuccess (e) {
      console.log('onSuccess', e)
      this.val.push({
        name: e.fname,
        url: e.downloadUrl
      })
    },
    onError (e) {
      console.log('onError', e)
    },
  }
}
</script>
