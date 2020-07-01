<template>
  <div :class="['xin-color-picker', {
  }]">
    <div
      :class="['xin-color-picker-input']"
      @click="visible = true"
    >
      <span class="color-picker-color" :style="{'background': 'red'}"></span>
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
          <div
            class="content-picker"
            @mousedown="mousedown($event)"
            @mousemove="mousemove($event)"
            @mouseup="mouseup($event)"
            @mouseleave="mouseleave($event)"
          >
            <div class="position colors"></div>
            <div class="position whites"></div>
            <div class="position blanks"></div>
            <div class="pickers" :style="{
              top: pickers.top + 'px',
              left: pickers.left + 'px'
            }">
              <div :class="['pickers-box', {
                'down': pickers.status
              }]"></div>
            </div>
            <div class="pickers-cover"></div>
          </div>
          <div class="content-line"></div>
          <div class="content-bottom">
            <!-- <div class="colors" :style="{'background': 'red'}"></div> -->
            <xin-input class="input"></xin-input>
            <xin-button inline>取消</xin-button>
            <xin-button fill color="info">确定</xin-button>
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
      pickers: {
        status: false,
        top: 0,
        left: 0
      }
    }
  },
  computed: {
  },
  watch: {
    value (n, o) {
      // this.init(n)
    }
  },
  created () {
  },
  methods: {
    mousedown (e) {
      // console.log('进入', e.offsetX, e.offsetY)
      this.pickers.status = true
      this.pickers.top = e.offsetY
      this.pickers.left = e.offsetX
    },
    conversion16 (value) {
      value = Number(value)
      return value.toString(16)
    },
    conversion10 (value) {
      value = String(value)
      return parseInt(value, 16) 
    },
    mousemove (e) {
      if (!this.pickers.status) return
      this.pickers.top = e.offsetY < 0 ? 0 : e.offsetY > 180 ? 180 : e.offsetY
      this.pickers.left = e.offsetX < 0 ? 0 : e.offsetX > 280 ? 280 : e.offsetX
    },
    changeColor () {
      let x = this.pickers.left
      let y = this.pickers.top
    },
    mouseup (e) {
      this.pickers.status = false
    },
    mouseleave (e) {
      this.pickers.status = false
    },
    coverEvent () {
      this.visible = false
    }
  }
}
</script>
