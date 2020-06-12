<template>
  <div
    :class="['xin-tooltip', {
      'xin-tooltip-top': position === 'top',
      'xin-tooltip-right': position === 'right',
      'xin-tooltip-bottom': position === 'bottom',
      'xin-tooltip-left': position === 'left'
    }]"
  >
    <div class="xin-tooltip-content">
      <div class="xin-tooltip-content-box">
        <span class="xin-tooltip-content-text">{{content}}</span>
      </div>
    </div>
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
