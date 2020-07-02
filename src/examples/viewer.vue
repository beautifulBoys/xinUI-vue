<template>
  <div class="example-page">
    <div class="line">
      <xin-button fill color="info" @click="viewer()">打开预览</xin-button>
    </div>
    <!-- <xin-viewer :images="images"></xin-viewer> -->
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      list: [
        {name: '是打发', url: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'},
        {name: 'gas第三个', url: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'}
      ]
    }
  },
  mounted () {
  },
  methods: {
    viewer () {
      this.$viewer({ list: this.list })
    }
  }
}
</script>
