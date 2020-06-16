<template>
  <div
    :class="['xin-switch', color, {
      'active': inputValue,
      'disabled': disabled
    }]"
    @click="defaultEvent"
  >
    <div class="xin-switch-box">
      <div class="xin-switch-label left">{{openLabel}}</div>
      <div class="xin-switch-item"></div>
      <div class="xin-switch-label right">{{closeLabel}}</div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'xinSwitch',
  components: {
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    color: { // default, error, warning, success
      type: String,
      default: 'info'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    openLabel: {
      type: String,
      default: ''
    },
    openValue: {
      type: [String, Number, Boolean],
      default: true
    },
    closeLabel: {
      type: String,
      default: ''
    },
    closeValue: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data () {
    return {
      inputValue: false
    }
  },
  created () {
    this.changeValue()
  },
  watch: {
    value (n, o) {
      this.changeValue()
    }
  },
  mounted () {
  },
  methods: {
    changeValue () {
      if (this.value === this.openValue) {
        this.inputValue = true
      } else if (this.value === this.closeValue) {
        this.inputValue = false
      } else if (this.value) {
        this.inputValue = true
      } else if (!this.value) {
        this.inputValue = false
      }
    },
    defaultEvent () {
      if (this.disabled) return
      this.inputValue = !this.inputValue
      let val = this.inputValue ? this.openValue : this.closeValue
      this.$emit('input', val)
      this.$emit('change', val)
    }
  }
}
</script>
