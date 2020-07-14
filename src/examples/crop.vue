<template>
  <div class="example-page example-crop">
    <div class="line">
      <xin-label width="80">完整示例</xin-label>
      <xin-crop
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594728077943&di=5bab7d36d032daaf02152c9aa873fcb7&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F6%2F537ea15ed93fa.jpg"
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
