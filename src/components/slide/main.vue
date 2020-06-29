<template>
  <div
    ref="slide"
    :class="['xin-slide', {
      'info': color === 'info',
      'disabled': disabled
    }]"
  >
    <div class="slide-content">
      <div class="slide-content-dots" v-if="dot">
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
        class="content-handle"
        :style="{'left': start.percent + '%'}"
        v-if="range"
        :disabled="disabled"
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
        class="content-handle"
        :style="{'left': end.percent + '%'}"
        :disabled="disabled"
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
    readonly: {
      type: Boolean,
      default: false
    },
    color: { // info, error, warning, success
      type: String,
      default: 'info'
    },
    dot: {
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
  },
  watch: {
    value (n, o) {
      this.init(n)
    }
  },
  mounted () {
    this.init(this.value)
    if (this.disabled) return
    document.addEventListener('mousemove', this.mousemove, false)
    document.addEventListener('mouseup', this.mouseup, false)
  },
  methods: {
    init (value) {
      if (this.range) {
        let start = value.start < this.min || value.start > this.max ? 0 : value.start
        this.start.percent = 100 * (start - this.min) / (this.max - this.min)
        let end = value.end < this.min || value.end > this.max ? 0 : value.end
        this.end.percent = 100 * (end - this.min) / (this.max - this.min)
      } else {
        let end = value < this.min || value > this.max ? 0 : value
        this.end.percent = 100 * (end - this.min) / (this.max - this.min)
      }
      this.createDots()
      this.createValues()
    },
    createValues () {
      this.end.value = this.min + (this.end.percent * 0.01 * (this.max - this.min))
      if (this.range) {
        this.start.value = this.min + (this.start.percent * 0.01 * (this.max - this.min))
      }
    },
    createDots () {
      let nums = (this.max - this.min) / this.step
      let arr = []
      for (let i = 0; i <= nums; i++) {
        let percent = (100 / nums).toFixed(2)
        arr.push({
          value: i * this.step + this.min,
          percent: i * percent,
          start: (i * percent) - (0.5 * percent),
          end: (i * percent) + (0.5 * percent)
        })
      }
      this.dots = arr
    },
    mousedown (e, direction) {
      if (this.disabled) return
      if (this.readonly) return
      this.mouse = direction
    },
    mousemove (e) {
      if (this.disabled) return
      if (this.readonly) return
      if (!this.mouse) return
      let value = (100 * (e.pageX - this.$refs.slide.offsetLeft) / this.$refs.slide.clientWidth)

      for (let i = 0; i < this.dots.length; i++) {
        if (value > this.dots[i].start && value < this.dots[i].end) {
          this[this.mouse].value = this.dots[i].value
          this[this.mouse].percent = this.dots[i].percent
          break
        }
      }
      if (this.start.percent > this.end.percent) {
        [this.start.percent, this.end.percent] = [this.end.percent, this.start.percent]
      }
    },
    mouseup (e) {
      if (this.disabled) return
      if (this.readonly) return
      this.mouse = ''
      this.emit()
    },
    emit () {
      let val
      if (this.range) {
        val = {
          start: this.start.value,
          end: this.end.value
        }
      } else {
        val = this.end.value
      }
      console.log('input: ', val)
      this.$emit('input', val)
      this.$emit('change', val)
    }
  }
}
</script>
