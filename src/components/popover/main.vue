<template>
  <div
    :class="['xin-popover', {
      'xin-popover-top': position === 'top',
      'xin-popover-right': position === 'right',
      'xin-popover-bottom': position === 'bottom',
      'xin-popover-left': position === 'left'
    }]"
    v-on="$listeners"
    @mouseover="toggle(true)"
    @mouseout="toggle(false)"
    @click="click(!visible)"
  >
    <slot></slot>
    <div
      class="xin-popover-cover"
      v-show="visible && trigger === 'click'"
      @click="click(!visible, $event)"
    ></div>
    <transition :name="animate ? 'xin-popover-' + position : 'xin-popover'">
      <div class="xin-popover-content" v-show="visible" v-if="!disabled">
        <div class="xin-popover-content-box">
          <div class="xin-popover-content-text-box">
            <div
              :class="['xin-popover-content-text', {
                'radius': radius,
                'dark': color === 'dark',
                'white': color === 'white',
                'info': color === 'info',
                'success': color === 'success',
                'warning': color === 'warning',
                'error': color === 'error',
              }]"
              :style="{
                'min-width': minWidth.indexOf('px') > -1 ? minWidth : minWidth + 'px',
                'min-height': minHeight.indexOf('px') > -1 ? minHeight : minHeight + 'px'
              }"
            >
              <slot name="refer"></slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'xinPopover',
  props: {
    position: {
      type: String,
      default: 'top'
    },
    trigger: {
      type: String,
      default: 'hover'
    },
    minWidth: {
      type: String,
      default: '200'
    },
    minHeight: {
      type: String,
      default: '70'
    },
    color: { // dark, white, info, success, warning, error
      type: String,
      default: 'white'
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
      visible: false
    }
  },
  mounted () {
  },
  methods: {
    toggle (visible) {
      if (this.disabled) return
      if (this.trigger === 'click') return
      this.visible = visible
    },
    click (visible, e) {
      if (this.disabled) return
      if (this.trigger === 'hover') return
      e && e.stopPropagation()
      this.visible = visible
    }
  }
}
</script>
