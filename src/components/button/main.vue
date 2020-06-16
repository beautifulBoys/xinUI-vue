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
    <!-- <i class="xin-iconfont" v-if="icon && iconMap[icon]" v-html="iconMap[icon]"></i> -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'xinButton',
  props: {
    color: { // default, info, success, warning, error
      type: String,
      default: 'default'
    },
    // size: { // small, big
    //   type: String,
    //   default: 'normal'
    // },
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
  }
}
</script>
