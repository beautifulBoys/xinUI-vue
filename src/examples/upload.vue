<template>
  <div class="example-page example-upload">
    <div class="line">
      <xin-upload
        :data="{token}"
        :action="action"
        :file-list="val"
        multiple
        :limit="4"
        :before-upload="beforeUpload"
        :on-progress="onProgress"
        :on-success="onSuccess"
        :on-error="onError"
      ></xin-upload>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      val: [],
      action: 'https://upload.qbox.me/',
      token: 'CnTsfZDCSNMr0SOTj5bQQMW0W6imigErnVTlkLpK:WenXRuuFr12PnevchuijK4nSkaE=:eyJjYWxsYmFja0ZldGNoS2V5IjoxLCJjYWxsYmFja0JvZHlUeXBlIjoiYXBwbGljYXRpb24vanNvbiIsInNjb3BlIjoiaXNlc29sLXRlc3QiLCJjYWxsYmFja1VybCI6Imh0dHBzOi8vYXBpLmk1c2Vzb2wuY29tL3N1cHBvcnQvY2FsbGJhY2svcWluaXUvY29tbW9uIiwiZGVhZGxpbmUiOjE1OTQ3MDM2OTgsImNhbGxiYWNrQm9keSI6IntcImZuYW1lXCI6XCIke2ZuYW1lfVwiLFwiY2xpZW50Qml6RGF0YVwiOlwiJHt4OmJpekRhdGF9XCIsXCJjbGllbnRCaXpJZFwiOlwiJHt4OmJpeklkfVwiLFwiYXBwQ29kZVwiOlwiXCIsXCJidWNrZXRcIjpcIiR7YnVja2V0fVwiLFwiZnNpemVcIjpcIiR7ZnNpemV9XCIsXCJhcHBUeXBlXCI6XCJcIixcImFwcElkXCI6XCJhcHBTdG9yZVwiLFwiYml6SWRcIjpcIjJlYjQ0MjhkLTVmODQtNDdjNC04MTc3LTg2MjI4N2ZmNDQ0MVwiLFwia2V5XCI6XCIke2tleX1cIixcImhhc2hcIjpcIiR7aGFzaH1cIn0ifQ=='
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
