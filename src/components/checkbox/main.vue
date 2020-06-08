<template>
  <Checkbox
    :class="['xin-checkbox', {
      'hide-label': hideLabel
    }]"
    v-bind="$attrs"
    v-on="$listeners"
    v-model="inputValue"
  >
      <slot></slot>
  </Checkbox>
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
    hideLabel: {
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
      this.inputValue.push(this.label)
      this.$emit('input', this.inputValue)
      this.$emit('change', this.inputValue)
    }
  }
}
</script>
