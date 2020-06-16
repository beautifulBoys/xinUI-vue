<template>
  <label
    :class="['xin-radio', {
      'info': !white,
      'white': white,
      'selected': inputValue === label,
      'disabled': disabled
    }]"
    @click="defaultEvent()"
  >
    <div class="xin-radio-icon"></div>
    <div class="xin-radio-label">
      <slot></slot>
    </div>
  </label>
</template>

<script>
export default {
  name: 'xinRadio',
  props: {
    value: {
      type: [Object, Number, String, Boolean],
      default: false
    },
    label: {
      type: [Number, String, Boolean],
      default: false
    },
    white: {
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
    defaultEvent (e) {
      if (this.disabled) return
      this.inputValue = this.label
      this.$emit('input', this.inputValue)
      this.$emit('change', this.inputValue)
    }
  }
}
</script>
