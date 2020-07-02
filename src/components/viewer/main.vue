<template>
  <transition
    name="xin-fade-down"
    @after-leave="afterLeaveEvent()"
  >
    <div class="xin-viewer" v-if="visible && list.length">
      <img
        class="xin-viewer-content"
        :style="{
          'transform': 'rotate(' + rotate + 'deg) scale(' + scale + ') translateX(' + translateX + 'px) translateY(' + translateY + 'px)'
        }"
        :src="image.url"
      />
      <xin-icon
        name="arrow-lift"
        v-if="viewIndex"
        class="viewer-icon xin-pre"
        @click.native="preEvent()"
      />
      <xin-icon
        name="arrow-right"
        v-if="viewIndex < list.length - 1"
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
        <!-- <xin-icon name="download" class="xin-btn px25" @click.native="downloadEvent()" /> -->
      </div>
    </div>
  </transition>
</template>

<script>
import Icon from '../icon'
export default {
  name: 'xinViewer',
  components: {
    'xin-icon': Icon
  },
  props: {
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
      if (Array.isArray(this.list)) {
        return this.list[this.viewIndex]
      } else if (typeof this.list === 'object') {
        return this.list
      }
    }
  },
  watch: {
    list () {
      this.viewIndex = 0
    }
  },
  mounted () {
  },
  methods: {
    preEvent () {
      if (this.viewIndex) this.viewIndex--
    },
    nextEvent () {
      if (this.viewIndex + 1 < this.list.length) this.viewIndex++
    },
    scaleEvent (type) {
      if (type === 'add') {
        if (this.scale > 3) return
        this.scale += 0.3
      } else if (type === 'res') {
        if (this.scale < 0.3) return
        this.scale -= 0.3
      }
    },
    rotateEvent (type) {
      if (type === 'add') {
        this.rotate += 90
      } else if (type === 'res') {
        this.rotate -= 90
      }
    },
    downloadEvent () {
    },
    afterLeaveEvent () {
      console.log('离开')
      // this.$el.parentNode.removeChild(this.$el)
      // this.$destroy(true)
    },
    close () {
      this.visible = false
    }
  }
}
</script>
