<template>
  <div
    ref="slide"
    :class="['xin-slide', {
      'round': round,
      'inside': inside,
      'info': color === 'info',
      'error': color === 'error',
      'warning': color === 'warning',
      'success': color === 'success'
    }]"
  >
    <div class="slide-content">
      <xin-tooltip
        position="top"
        :content="start.value + unit"
        class="content-handle"
        :style="{'left': start.value + '%'}"
        v-if="range"
        @mousedown="mousedown($event, 'start')"
      ></xin-tooltip>
      <div
        class="content-selected"
        :style="{
          'width': end.value - start.value + '%',
          'left': start.value + '%'
        }"
      ></div>
      <xin-tooltip
        position="top"
        :content="end.value + unit"
        class="content-handle"
        :style="{'left': end.value + '%'}"
        @mousedown="mousedown($event, 'end')"
      ></xin-tooltip>
    </div>
  </div>
</template>

<script>
import Tooltip from '../tooltip'
export default {
  name: 'xinSlide',
  components: {
    'xin-tooltip': Tooltip
  },
  props: {
    value: {
      type: [Number, Object],
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: { // info, error, warning, success
      type: String,
      default: 'info'
    },
    inside: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    range: {
      type: Boolean,
      default: false
    },
    unit: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      innerValue: {
        start: 0,
        end: 0
      },
      start: {
        value: 0,
        status: false
      },
      end: {
        value: 0,
        status: false
      },
      mouse: ''
    }
  },
  computed: {
    stepValue () {
      return (this.max - this.min) / this.step
    }
  },
  watch: {
    value (n, o) {
      this.init(n)
    }
  },
  mounted () {
    this.init(this.value)
    window.lixin = this.$refs.slide
    document.addEventListener('mousemove', this.mousemove, false)
    document.addEventListener('mouseup', this.mouseup, false)
  },
  methods: {
    init (value) {
      if (this.range) {
        // let start = value >= this.min ? value : value <= this.max ? value : 0
        // let end = value >= this.min ? value : value <= this.max ? value : 0
        // this.innerValue.start = start / this.step
        // this.innerValue.end = end / this.step
      } else {
        let end = value >= this.min ? value : value <= this.max ? value : 0
        this.end.value = end
      }
    },
    mousedown (e, direction) {
      this.mouse = direction
    },
    mousemove (e) {
      if (!this.mouse) return
      let value = (100 * (e.pageX - this.$refs.slide.offsetLeft) / this.$refs.slide.clientWidth).toFixed(0)
      this[this.mouse].value = Math.abs(value > 100 ? 100 : value < 0 ? 0 : value)
    },
    mouseup (e) {
      this.mouse = ''
    },
    defaultEvent (index) {
      if (this.disabled) return
      this.innerValue = index + 1
      this.$emit('input', this.innerValue)
      this.$emit('change', this.innerValue)
    }
  }
}
</script>
