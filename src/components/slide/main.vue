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
      <div class="slide-content-dots">
        <div
          class="slide-dot"
          v-for="(item, index) in dots"
          :key="index"
          :style="{'left': item.percent + '%'}"
        ></div>
      </div>
      <xin-tooltip
        position="top"
        :content="start.value + unit"
        :stayShow="mouse === 'start'"
        class="content-handle start"
        :style="{'left': start.percent + '%'}"
        v-if="range"
        @mousedown="mousedown($event, 'start')"
      ></xin-tooltip>
      <div
        class="content-selected"
        :style="{
          'width': end.percent - start.percent + '%',
          'left': start.percent + '%'
        }"
      ></div>
      <xin-tooltip
        position="top"
        :content="end.value + unit"
        :stayShow="mouse === 'end'"
        class="content-handle end"
        :style="{'left': end.percent + '%'}"
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
      start: {
        value: 0,
        percent: 0
      },
      end: {
        value: 0,
        percent: 0
      },
      mouse: '',
      dots: []
    }
  },
  computed: {
    stepsValue () {
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
      this.createDots()
      if (this.range) {
        let start = value.start < this.min || value.start > this.max ? 0 : value.start
        this.start.percent = 100 * (start - this.min) / (this.max - this.min)
        let end = value.end < this.min || value.end > this.max ? 0 : value.end
        this.end.percent = 100 * (end - this.min) / (this.max - this.min)
      } else {
        this.end.percent = value < this.min || value > this.max ? 0 : value
      }
    },
    createDots () {
      let nums = (this.max - this.min) / this.step
      let arr = []
      for (let i = 0; i <= nums; i++) {
        arr.push({
          value: i * this.step + this.min,
          percent: i * 100 / nums,
          start: (i * 100 / nums) - (0.5 * 100 / nums),
          end: (i * 100 / nums) + (0.5 * 100 / nums)
        })
      }
      this.dots = arr
    },
    mousedown (e, direction) {
      console.log(direction)
      this.mouse = direction
    },
    mousemove (e) {
      if (!this.mouse) return
      let value = (100 * (e.pageX - this.$refs.slide.offsetLeft) / this.$refs.slide.clientWidth)
      this.dots.forEach(item => {
        if (value > item.start && value < item.end) {
          this[this.mouse].value = item.value
          this[this.mouse].percent = item.percent
        }
      })
      if (this.start.percent > this.end.percent) {
        this.start.percent = this.start.percent + this.end.percent
        this.end.percent = this.start.percent - this.end.percent
        this.start.percent = this.start.percent - this.end.percent
        
        this.start.value = this.start.value + this.end.value
        this.end.value = this.start.value - this.end.value
        this.start.value = this.start.value - this.end.value
      }
    },
    mouseup (e) {
      this.mouse = ''
    }
  }
}
</script>
