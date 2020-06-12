<template>
  <div
    :class="['xin-split', {
      'vertical': mode === 'vertical',
      'horizontal': mode === 'horizontal'
    }]"
    ref="split"
  >
    <div
      :class="['xin-split-area', {
      }]"
      :style="{
        width: mode === 'horizontal' && inputValue,
        height: mode === 'vertical' && inputValue
      }"
    >
      <slot :name="mode === 'horizontal' ? 'left' : 'top'"></slot>
    </div>
    <div class="xin-split-split">
      <div
        class="xin-split-box"
        ref="line"
        @mousedown="mousedown"
      >
        <i class="xin-split-split-line" v-for="(item, index) in 10" :key="index"></i>
      </div>
    </div>
    <div
      :class="['xin-split-area', 'flex', {
      }]"
    >
      <slot :name="mode === 'horizontal' ? 'right' : 'bottom'"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xinSplit',
  components: {
  },
  props: {
    value: {
      type: String,
      default: '50%'
    },
    mode: { // horizontal, vertical
      type: String,
      default: 'horizontal'
    },
    min: {
      type: Number,
      default: 50
    }
  },
  data () {
    return {
      inputValue: this.value,
      width: 0,
      height: 0,
      mouseStatus: false,
      splitLineWidth: 6
    }
  },
  watch: {
    value (n, o) {
      this.inputValue = n
    }
  },
  mounted () {
    this.initEvent()
  },
  methods: {
    initEvent () {
      this.width = this.$refs.split.clientWidth
      this.height = this.$refs.split.clientHeight
      document.addEventListener('mousemove', this.mousemove, false)
      document.addEventListener('mouseup', this.mouseup, false)
    },
    mousedown (e) {
      this.mouseStatus = true
    },
    mousemove (e) {
      if (!this.mouseStatus) return
      if (this.mode === 'horizontal') {
        let width = e.pageX - this.$refs.split.offsetLeft - (this.splitLineWidth / 2)
        if (width >= this.min && width <= this.width - this.min - this.splitLineWidth) {
          this.$emit('input', width + 'px')
          this.$emit('change', width + 'px')
        }
      } else if (this.mode === 'vertical') {
        let height = e.pageY - this.$refs.split.offsetTop - (this.splitLineWidth / 2)
        if (height >= this.min && height <= this.height - this.min - this.splitLineWidth) {
          this.$emit('input', height + 'px')
          this.$emit('change', height + 'px')
        }
      }
    },
    mouseup (e) {
      this.mouseStatus = false
    },
  }
}
</script>
