<template>
  <div :class="['xin-color-picker', {
  }]">
    <div :class="['xin-color-picker-input']" @click="visible = true">
      <span class="color-picker-color" :style="{'background': this.innerValue}"></span>
      <div class="color-picker-icon">
        <xin-icon :class="{'rotate': visible}" name="arrow-down"/>
      </div>
    </div>
    <div
      class="xin-color-picker-cover"
      v-show="visible"
      @click.stop="coverEvent()"
    ></div>
    <transition name="xin-date-picker">
      <div class="xin-color-picker-options" v-show="visible">
        <div class="color-picker-options-content">
          <div class="content-picker" @mousedown="mousedown($event, 'box')">
            <canvas ref="box" :width="boxInfo.width" :height="boxInfo.height"></canvas>
            <div class="box-pickers" :style="{
              top: boxPickers.top + 'px',
              left: boxPickers.left + 'px'
            }">
              <div class="pickers-box">
                <div class="dot"></div>
                <div
                  v-show="boxPickers.status"
                  class="dot-border"
                  :style="{'border-color': boxPickers.color}"
                ></div>
              </div>
            </div>
          </div>
          <div class="content-picker content-line">
            <canvas ref="bar" :width="barInfo.width" :height="barInfo.height"></canvas>
            <div
              class="bar-pickers" :style="{
                left: barPickers.left + 'px'
              }"
              @mousedown="mousedown($event, 'bar')"
            ></div>
          </div>
          <div class="content-bottom">
            <div class="colors" :style="{'background': boxPickers.color}"></div>
            <xin-input class="input" v-model="boxPickers.color"></xin-input>
            <xin-button inline @click="cancel()">取消</xin-button>
            <xin-button fill color="info" @click="sure()">确定</xin-button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Icon from '../icon'
export default {
  name: 'xinColorPicker',
  components: {
    'xin-icon': Icon
  },
  props: {
    value: {
      type: [String, Date, Object],
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    model: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      visible: false,
      innerValue: '',
      boxInfo: {
        width: 280,
        height: 180,
        el: null,
        ctx: null,
        color: 'red'
      },
      barInfo: {
        width: 280,
        height: 10,
        el: null,
        ctx: null
      },
      boxPickers: {
        status: false,
        top: 0,
        left: 0,
        color: '#ffffff'
      },
      barPickers: {
        status: false,
        left: 0
      },
      curentPickers: ''
    }
  },
  computed: {
  },
  watch: {
    value (n, o) {
      this.innerValue = n
      this.boxPickers.color = n
    }
  },
  mounted () {
    this.innerValue = this.value
    this.boxPickers.color = this.value
    this.init()
    this.renderBox(this.boxInfo.color)
    this.renderBar()
  },
  methods: {
    init () {
      this.boxInfo.el = this.$refs.box
      this.boxInfo.ctx = this.boxInfo.el.getContext('2d')
      this.barInfo.el = this.$refs.bar
      this.barInfo.ctx = this.barInfo.el.getContext('2d')
      document.addEventListener('mousemove', this.mousemove, false)
      document.addEventListener('mouseup', this.mouseup, false)
    },
    renderBox (color) {
      let gradient_color = this.boxInfo.ctx.createLinearGradient(0, 0, this.boxInfo.width, 0)
      gradient_color.addColorStop(0, 'white')
      gradient_color.addColorStop(1, this.boxInfo.color)
      this.boxInfo.ctx.fillStyle = gradient_color
      this.boxInfo.ctx.fillRect(0, 0, this.boxInfo.width, this.boxInfo.height)

      let gradient_black = this.boxInfo.ctx.createLinearGradient(0, 0, 0, this.boxInfo.height)
      gradient_black.addColorStop(0, 'rgba(0, 0, 0, 0)')
      gradient_black.addColorStop(1, 'black')
      this.boxInfo.ctx.fillStyle = gradient_black
      this.boxInfo.ctx.fillRect(0, 0, this.boxInfo.width, this.boxInfo.height)
      let rgb = this.getPointColor({x: this.boxPickers.left, y: this.boxPickers.top}, 'box')
      this.boxPickers.color = '#' + this.conversion16(rgb.r) + this.conversion16(rgb.g) + this.conversion16(rgb.b)
    },
    renderBar () {
      let gradient = this.barInfo.ctx.createLinearGradient(0, 0, this.barInfo.width, 0)
      gradient.addColorStop(0 / 6, '#f00')
      gradient.addColorStop(1 / 6, '#f0f')
      gradient.addColorStop(2 / 6, '#00f')
      gradient.addColorStop(3 / 6, '#0ff')
      gradient.addColorStop(4 / 6, '#0f0')
      gradient.addColorStop(5 / 6, '#ff0')
      gradient.addColorStop(6 / 6, '#f00')
      this.barInfo.ctx.fillStyle = gradient
      this.barInfo.ctx.fillRect(0, 0, this.barInfo.width, this.barInfo.height)
    },
    mousedown (e, type) {
      this.curentPickers = type
      if (type === 'box') {
        let pos = this.$refs.box.getBoundingClientRect()
        this.boxPickers.status = true
        this.boxPickers.top = e.clientY - pos.top
        this.boxPickers.left = e.clientX - pos.left
      } else {
        let pos = this.$refs.bar.getBoundingClientRect()
        this.barPickers.status = true
        this.barPickers.left = e.clientX - pos.left
      }
    },
    mousemove (e) {
      if (this.curentPickers && this.boxPickers.status) {
        if (!this.boxPickers.status) return
        let pos = this.$refs.box.getBoundingClientRect()
        let left = parseInt(e.clientX - pos.left)
        let top = parseInt(e.clientY - pos.top)
        this.boxPickers.top = Math.abs(top < 0 ? 0 : top > this.boxInfo.height - 1 ? this.boxInfo.height - 1 : top)
        this.boxPickers.left = Math.abs(left < 0 ? 0 : left > this.boxInfo.width - 1 ? this.boxInfo.width - 1 : left)
        let rgb = this.getPointColor({x: this.boxPickers.left, y: this.boxPickers.top}, 'box')
        this.boxPickers.color = '#' + this.conversion16(rgb.r) + this.conversion16(rgb.g) + this.conversion16(rgb.b)
      } else if (this.curentPickers && this.barPickers.status) {
        if (!this.barPickers.status) return
        let pos = this.$refs.box.getBoundingClientRect()
        let left = parseInt(e.clientX - pos.left)
        this.barPickers.left = Math.abs(left < 0 ? 0 : left > this.barInfo.width - 1 ? this.barInfo.width - 1 : left)
        let rgb = this.getPointColor({x: this.barPickers.left, y: 5}, 'bar')
        this.boxInfo.color = '#' + this.conversion16(rgb.r) + this.conversion16(rgb.g) + this.conversion16(rgb.b)
        this.renderBox()
      }
    },
    getPointColor (pos, type) {
      let imgData = null
      if (type === 'box') {
        imgData = this.boxInfo.ctx.getImageData(0, 0, this.boxInfo.width, this.boxInfo.height)
      } else if (type === 'bar') {
        imgData = this.barInfo.ctx.getImageData(0, 0, this.barInfo.width, this.barInfo.height)
      }
      let data = imgData.data
      let index = (imgData.width * pos.y + pos.x) * 4
      return {
        r: data[index + 0],
        g: data[index + 1],
        b: data[index + 2],
        a: data[index + 3]
      }
    },
    changeColor () {
      let x = this.boxPickers.left
      let y = this.boxPickers.top
    },
    mouseup (e) {
      this.boxPickers.status = false
      this.barPickers.status = false
      this.curentPickers = ''
    },
    conversion16 (value) {
      value = Number(value)
      value = value.toString(16)
      return value.length > 1 ? value : ('0' + value)
    },
    conversion10 (value) {
      value = String(value)
      return parseInt(value, 16) 
    },
    coverEvent () {
      this.visible = false
    },
    cancel () {
      this.coverEvent()
    },
    sure () {
      this.coverEvent()
      this.$emit('input', this.boxPickers.color)
      this.$emit('change', this.boxPickers.color)
    }
  }
}
</script>
