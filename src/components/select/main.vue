<template>
  <Select
    class="xin-select"
    v-bind="$attrs"
    v-on="$listeners"
    v-model="inputValue"
    :popper-append-to-body="popperAppendToBody"
  >
    <Option
      class="ise-option"
      v-for="(item, index) in list"
      :key="index"
      :value="item[itemValue]"
      :label="item[itemLabel]"
    >
      {{item[itemLabel]}}
    </Option>
  </Select>
</template>

<script>
import { Select, Option } from 'element-ui'
export default {
  name: 'xinSelect',
  components: {
    Select,
    Option
  },
  props: {
    value: null,
    list: {
      type: Array,
      default: () => []
    },
    itemValue: {
      type: String,
      default: 'value'
    },
    itemLabel: {
      type: String,
      default: 'label'
    },
    popperAppendToBody: {
      type: Boolean,
      default: false
    },
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
