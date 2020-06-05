<template>
  <DatePicker
    class="xin-date-picker"
    v-bind="$attrs"
    v-on="$listeners"
    v-model="inputValue"
  >
  </DatePicker>
</template>

<script>
import { DatePicker } from 'element-ui'
export default {
  name: 'xinDatePicker',
  components: {
    DatePicker
  },
  props: {
    value: null
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
