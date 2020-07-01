<template>
  <div class="xin-viewer">
    <img
      class="xin-viewer-content"
      :style="{
        'transform': 'rotate(' + rotate + 'deg) scale(' + scale + ') translateX(' + translateX + 'px) translateY(' + translateY + 'px)'
      }"
      :src="image.url"
    />
    <xin-icon
      name="arrow-lift"
      class="viewer-icon xin-pre"
      @click.native="preEvent()"
    />
    <xin-icon
      name="arrow-right"
      class="viewer-icon xin-next"
      @click.native="nextEvent()"
    />
    <xin-icon
      name="reeor"
      class="xin-close"
      @click.native="close()"
    />
    <div class="xin-viewer-control">
      <xin-icon name="viewlarger" class="xin-btn px28" @click.native="scaleEvent('add')" />
      <xin-icon name="suoxiao" class="xin-btn px28" @click.native="scaleEvent('res')" />
      <xin-icon name="xuanzhuan" class="xin-btn" @click.native="rotateEvent('add')" />
      <xin-icon name="xuanzhuan1" class="xin-btn" @click.native="rotateEvent('res')" />
      <xin-icon name="download" class="xin-btn px25" @click.native="downloadEvent()" />
    </div>
  </div>
</template>

<script>
import Icon from '../icon'
export default {
  name: 'xinViewer',
  components: {
    'xin-icon': Icon
  },
  props: {
    color: { // white, black
      type: String,
      default: 'white'
    },
    images: {
      type: [Object, Array],
      default: () => []
    }
  },
  data () {
    return {
      rotate: 0,
      scale: 1,
      translateX: 0,
      translateY: 0,
      viewIndex: 0,
      visible: false
    }
  },
  created () {
  },
  computed: {
    image () {
      if (Array.isArray(this.images)) {
        return this.images[this.viewIndex]
      } else if (typeof this.images === 'object') {
        return this.images
      }
    }
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    preEvent () {
      if (this.viewIndex) this.viewIndex--
    },
    nextEvent () {
      if (this.viewIndex + 1 < this.images.length) this.viewIndex++
    },
    scaleEvent (type) {
      if (type === 'add') {
        this.scale += 0.2
      } else if (type === 'res') {
        this.scale -= 0.2
      }
    },
    rotateEvent (type) {
      if (type === 'add') {
        this.rotate += 90
      } else if (type === 'res') {
        this.rotate -= 90
      }
    },
    close () {},
    downloadEvent () {
    }
  }
}
</script>
