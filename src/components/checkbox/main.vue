<template>
  <label
    :class="['xin-checkbox', {
      'xin-checkbox-info': !white,
      'xin-checkbox-white': white,
      'selected': isSelected,
      'disabled': disabled
    }]"
    @click="defaultEvent()"
  >
    <div class="xin-checkbox-icon"></div>
    <div class="xin-checkbox-label">
      <slot></slot>
    </div>
  </label>
</template>

<script>
import { Checkbox } from 'element-ui'
export default {
  name: 'xinCheckbox',
  components: {
    Checkbox
  },
  props: {
    value: {
      type: [Array, Boolean],
      default: false
    },
    white: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number],
      default: ''
    },
    trueLabel: {
      type: [String, Number, Boolean],
      default: true
    },
    falseLabel: {
      type: [String, Number, Boolean],
      default: false
    },
    hideLabel: {
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
      innerValue: this.value
    }
  },
  computed: {
    isSelected () {
      return this.innerValue.includes(this.label)
    }
  },
  watch: {
    value (n, o) {
      this.innerValue = n
    }
  },
  mounted () {
  },
  methods: {
    defaultEvent (e) {
      // this.innerValue.push(this.label)
      let arr = []
      if (this.isSelected) {
        this.innerValue.forEach(item => {
          if (this.label !== item) arr.push(item)
        })
      } else {
        arr = [...this.innerValue, this.label]
      }
      this.$emit('input', arr)
      this.$emit('change', arr)
    }
  }
}
</script>
