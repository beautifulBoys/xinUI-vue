<template>
  <div
    :class="['xin-upload']"
  >
    <div class="upload-area upload-item" v-for="(item, index) in fileList" :key="index">
      <xin-icon name="shanchu1" @click.native="remove(item, index)"/>
      <img class="upload-item-img" :src="item[itemValue]" :title="item[itemLabel]" />
    </div>
    <div class="upload-area upload-add" v-if="fileList.length < limit">
      <div class="xin-upload-box">
        <xin-icon name="add" />
        <div class="xin-upload-progress" :style="{height: progress + '%'}" v-show="progress">{{progress}}%</div>
      </div>
      <input
        class="xin-upload-input"
        type="file"
        :name="name"
        @change="changeEvent($event)"
        :multiple="multiple"
        :accept="accept"
      />
    </div>
  </div>
</template>

<script>
import Icon from '../../components/icon'
import request from './request'
export default {
  name: 'xinUpload',
  components: {
    'xin-icon': Icon
  },
  props: {
    name: {
      type: String,
      default: 'file'
    },
    action: {
      type: String,
      default: ''
    },
    accept: {
      type: String,
      default: ''
    },
    headers: {
      type: Object,
      default: () => ({})
    },
    multiple: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => ({})
    },
    itemLabel: {
      type: String,
      default: 'name'
    },
    itemValue: {
      type: String,
      default: 'url'
    },
    fileList: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 100000000
    },
    closable: {
      type: Boolean,
      default: false
    },
    beforeUpload: {
      type: Function,
      default: () => {}
    },
    beforeRemove: {
      type: Function,
      default: () => {}
    },
    onSuccess: {
      type: Function,
      default: () => {}
    },
    onRemove: {
      type: Function,
      default: () => {}
    },
    onProgress: {
      type: Function,
      default: () => {}
    },
    onError: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      progress: 0
    }
  },
  created () {
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    changeEvent (e) {
      console.log(e.target.files)
      let files = e.target.files
      for (let i = 0; i < files.length; i++) {
        this.uploadEvent(files[i])
      }
    },
    uploadEvent (file) {
      let _this = this
      request({
        action: this.action,
        name: this.name,
        file,
        headers: this.headers,
        data: this.data,
        onerror (e) {
          _this.onError && _this.onError(e)
        },
        onsuccess (e) {
          _this.progress = 0
          _this.onSuccess && _this.onSuccess(e)
        },
        onprogress (e) {
          _this.progress = e.percent.toFixed(2)
          _this.onProgress && _this.onProgress(e)
        }
      })
    },
    remove (item, index) {
      if (this.beforeRemove && this.beforeRemove()) return
      let arr = []
      let del = null
      this.fileList.forEach((file, idx) => {
        if (idx === index) del = file
        else arr.push(file)
      })
      this.onRemove && this.onRemove(del)
    },
  }
}
</script>
