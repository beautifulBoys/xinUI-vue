<template>
  <button
    :class="['xin-button', color, {
      'fill': fill && !inline,
      'inline': inline,
      'round': round,
      'disabled': disabled
    }]"
    v-on="$listeners"
    v-bind="$attrs"
    :disabled="disabled"
  >
    <!-- <i class="iconfont" v-if="icon && iconMap[icon]" v-html="iconMap[icon]"></i> -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'xinButton',
  props: {
    color: { // default, success, error, warning, info
      type: String,
      default: ''
    },
    size: { // small, big
      type: String,
      default: 'normal'
    },
    // icon: { // more, time, smile, play, info, cry, help, compass, setting, error, success
    //   type: String,
    //   default: ''
    // },
    width: {
      type: String,
      default: null
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
        info: '&#xe622;',
        cry: '&#xe61e;',
        help: '&#xe61b;',
        compass: '&#xe625;',
        setting: '&#xe619;',
        error: '&#xe618;',
        success: '&#xe617;'
      }
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
