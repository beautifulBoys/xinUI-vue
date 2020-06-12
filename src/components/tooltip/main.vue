<template>
  <div
    :class="['xin-tooltip', {
      'xin-tooltip-top': position === 'top',
      'xin-tooltip-right': position === 'right',
      'xin-tooltip-bottom': position === 'bottom',
      'xin-tooltip-left': position === 'left'
    }]"
    @mouseover="toggle(true)"
    @mouseout="toggle(false)"
  >
    <transition :name="animate ? 'xin-tooltip-' + position : 'xin-tooltip'">
      <div class="xin-tooltip-content" v-show="show">
        <div class="xin-tooltip-content-box">
          <div class="xin-tooltip-content-text-box">
            <span :class="['xin-tooltip-content-text', {radius: radius}]">{{content}}</span>
          </div>
        </div>
      </div>
    </transition>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'xinTooltip',
  props: {
    position: {
      type: String,
      default: 'top'
    },
    content: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    animate: {
      type: Boolean,
      default: false
    },
    radius: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: false
    }
  },
  mounted () {
  },
  methods: {
    toggle (show) {
      if (this.disabled) return
      this.show = show
    }
  }
}
</script>
