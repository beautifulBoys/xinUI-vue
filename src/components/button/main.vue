<template>
  <button
    :class="['xin-button', 'xin-button-' + color, {
      'fill': fill && !inline,
      'inline': inline,
      'round': round,
      'disabled': disabled
    }]"
    :style="{
      'width': width.indexOf('px') > -1 ? width : width + 'px'
    }"
    @click="clickEvent($event)"
    :disabled="disabled"
  >
    <xin-icon :name="icon" v-if="icon" />
    <slot></slot>
  </button>
</template>

<script>
import xinIcon from '../icon'
export default {
  name: 'xinButton',
  components: {
    'xin-icon': xinIcon
  },
  props: {
    color: { // default, info, success, warning, error
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    round: {
      type: Boolean,
      default: false
    },
    fill: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    clickEvent (e) {
      if (this.disabled) return
      this.$emit('click', e)
    }
  }
}
</script>
