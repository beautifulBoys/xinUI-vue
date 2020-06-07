<template>
  <label
    :class="['xin-radio', {
      'xin-radio-selected': inputValue === label,
      'xin-radio-disabled': disabled
    }]"
    @click="defaultEvent"
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
      type: [Number, String, Boolean],
      default: false
    },
    label: {
      type: [Number, String, Boolean],
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
      this.inputValue = this.label
      this.$emit('input', this.inputValue)
      this.$emit('change', this.inputValue)
    }
  }
}
</script>
