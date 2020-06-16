<template>
  <button
    :class="['xin-button', color, {
      'fill': fill && !inline,
      'inline': inline,
      'round': round,
      'disabled': disabled
    }]"
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
      iconMap: {
        more: '&#xe637;',
        time: '&#xe629;',
        smile: '&#xe624;',
        play: '&#xe623;',
        info: '&#xe68e;',
        cry: '&#xe61e;',
        help: '&#xe689;',
        compass: '&#xe625;',
        setting: '&#xe619;',
        error: '&#xe68c;',
        success: '&#xe68b;'
      }
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
