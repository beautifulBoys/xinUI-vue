<template>
  <div
    :class="['xin-progress', {
      'round': round,
      'inside': inside,
      'xin-progress-info': color === 'info',
      'xin-progress-error': color === 'error',
      'xin-progress-warning': color === 'warning',
      'xin-progress-success': color === 'success'
    }]"
    :style="{
      width: width.indexOf('px') > -1 ? width : width + 'px'
    }"
  >
    <div class="xin-progress-body">
      <div
        :class="['xin-progress-gress', {
          'stripe': stripe
        }]"
        :style="{
          width: (inputValue > 100 ? 100 : inputValue < 0 ? 0 : inputValue) + '%'
        }"
      >
        <span style="padding: 0 10px" v-if="inside">{{inputValue > 100 ? 100 : inputValue < 0 ? 0 : inputValue}}%</span>
      </div>
    </div>
    <div class="xin-progress-title">{{inputValue > 100 ? 100 : inputValue < 0 ? 0 : inputValue}}%</div>
  </div>
</template>

<script>
export default {
  name: 'xinProgress',
  components: {
  },
  props: {
    value: {
      type: Number,
      default: 0
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
    stripe: {
      type: Boolean,
      default: false
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
