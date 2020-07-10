<template>
  <div
    v-if="src"
    :class="['xin-crop']"
    :style="{
      width: width.indexOf('px') > -1 ? width : width + 'px',
      height: height.indexOf('px') > -1 ? height : height + 'px'
    }"
  >
    <img ref="image" :src="src" class="xin-crop-img" />
  </div>
</template>

<script>
import Icon from '../../components/icon'
import Cropper from 'cropperjs'
export default {
  name: 'xinCrop',
  components: {
    'xin-icon': Icon
  },
  props: {
    src: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '500'
    },
    height: {
      type: String,
      default: '350'
    },
    viewMode: {
      type: Number,
      default: 1
    },
    aspectRatio: {
      type: Number,
      default: NaN
    },
    background:  {
      type: String,
      default: '#fff'
    },
    imgType: {
      type: String,
      default: 'png'
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
        viewMode: this.viewMode,
        aspectRatio: this.aspectRatio,
        background: this.background,
        crop (e) {
          // console.log(e)
        }
      })
    },
    reset () {
      this.cropper.reset()
    },
    anticlockwise () {
      this.cropper.rotate(-45)
    },
    clockwise () {
      this.cropper.rotate(45)
    },
    enlarge () {
      this.cropper.relativeZoom(0.1)
    },
    narrow () {
      this.cropper.relativeZoom(-0.1)
    },
    getImage () {
    }
  }
}
</script>
