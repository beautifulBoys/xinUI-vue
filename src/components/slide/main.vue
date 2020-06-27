<template>
  <div
    :class="['xin-slide', {
      'round': round,
      'inside': inside,
      'info': color === 'info',
      'error': color === 'error',
      'warning': color === 'warning',
      'success': color === 'success'
    }]"
    :style="{
      width: width.indexOf('px') > -1 ? width : width + 'px'
    }"
  >
  </div>
</template>

<script>
export default {
  name: 'xinSlide',
  components: {
  },
  props: {
    value: {
      type: [Number, Object],
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: { // info, error, warning, success
      type: String,
      default: 'info'
    },
    // 条纹
    step: {
      type: Number,
      default: 1
    },
    inside: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: ''
    },
    range: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputValue: this.value
    }
  },
  watch: {
    value (n, o) {
      this.inputValue = n
    }
  },
  mounted () {
  },
  methods: {
    defaultEvent (index) {
      if (this.disabled) return
      this.inputValue = index + 1
      this.$emit('input', this.inputValue)
      this.$emit('change', this.inputValue)
    }
  }
}
</script>
