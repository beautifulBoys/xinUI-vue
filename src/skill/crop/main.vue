<template>
  <div
    :class="['xin-crop']"
    :style="{
      width: width.indexOf('px') > -1 ? width : width + 'px',
      height: height.indexOf('px') > -1 ? height : height + 'px'
    }"
  >
    <img ref="image" src="https://cdn.i5sesol.com/isesol_mall/VX4AAADnGu7LqBcW-f8de876f-caee-42f7-a324-d41a9a2586a7" class="xin-crop-img" />
  </div>
</template>

<script>
import Icon from '../../components/icon'
import Cropper from 'cropperjs'
export default {
  name: 'xinCrop',
  components: {
    'xin-icon': Icon,
    'vue-cropper': Cropper
  },
  props: {
    width: {
      type: String,
      default: '500'
    },
    height: {
      type: String,
      default: '350'
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
    beforeUpload: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      progress: 0
    }
  },
  watch: {
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      if (!this.$refs.image) {
        return
      }
      this.cropper = new Cropper(this.$refs.image, {
        viewMode: 1,
        crop (e) {
          console.log(e)
        }
      })
    }
  }
}
</script>
