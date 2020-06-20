<template>
  <div class="xin-badge">
    <span
      v-if="!disabled"
      :class="['xin-badge-content', {
        'xin-badge-fill': fill,
        'xin-badge-round': round,
        'xin-badge-dot': dot,
        'xin-badge-success': color === 'success',
        'xin-badge-info': color === 'info',
        'xin-badge-warning': color === 'warning',
        'xin-badge-error': color === 'error'
      }]"
    >{{text}}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'xinBadge',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    color: { // success, error, warning, info
      type: String,
      default: 'error'
    },
    dot: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: true
    },
    fill: {
      type: Boolean,
      default: true
    },
    max: {
      type: Number,
      default: 0
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
  computed: {
    text () {
      let text = ''
      if (this.dot) return text
      if (this.max && typeof this.value === 'number' && this.value > this.max) {
        text = this.max + '+'
      } else {
        text = this.value
      }
      return text
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
