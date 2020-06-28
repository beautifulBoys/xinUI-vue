<template>
  <xin-popover
    class="xin-tooltip"
    :position="position"
    trigger="hover"
    minWidth="0"
    minHeight="20"
    :color="color || 'dark'"
    :disabled="disabled"
    :animate="animate"
    :radius="radius"
    v-on="$listeners"
    :stayShow="stayShow"
  >
    <template slot="refer">{{content}}</template>
    <slot></slot>
  </xin-popover>
</template>

<script>
import Popover from '../popover'
export default {
  name: 'xinTooltip',
  components: {
    'xin-popover': Popover
  },
  props: {
    position: {
      type: String,
      default: 'top'
    },
    content: {
      type: String,
      default: ''
    },
    color: { // dark, white, info, success, warning, error
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
    },
    stayShow: {
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
