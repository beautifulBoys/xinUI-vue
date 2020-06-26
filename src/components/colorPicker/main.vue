<template>
  <div :class="['xin-color-picker', {
  }]">
    <div
      :class="['xin-color-picker-input']"
      @click="visible = true"
    >
      <span class="color-picker-color" :style="{'background': 'red'}"></span>
      <div class="color-picker-icon">
        <xin-icon class="icon" name="Group-4"/>
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
          >
            <div class="position colors"></div>
            <div class="position whites"></div>
            <div class="position blanks"></div>
            <div class="pickers" :style="{
              top: pickers.top + 'px',
              left: pickers.left + 'px'
            }">
              <div class="pickers-box"></div>
            </div>
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
export default {
  name: 'xinColorPicker',
  components: {
  },
  props: {
    value: {
      type: [String, Date, Object],
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: 'Group-'
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
    range: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    startPlaceholder: {
      type: String,
      default: '开始时间'
    },
    endPlaceholder: {
      type: String,
      default: '结束时间'
    },
    format: {
      type: String,
      default: ''
    },
    disabledDate: {
      type: Function,
      default: () => false
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
      this.pickers.status = true
      this.pickers.top = e.offsetY
      this.pickers.left = e.offsetX
      console.log(e.offsetX, e.offsetY)
    },
    mousemove (e) {
      if (!this.pickers.status) return
      // console.log(e.offsetX, e.offsetY)
      // if (e.offsetX < 0 || e.offsetY < 0) return
      // this.pickers.top = e.offsetY
      // this.pickers.left = e.offsetX
    },
    mouseup (e) {
      this.pickers.status = false
    },
    coverEvent () {
      this.visible = false
    }
  }
}
</script>
