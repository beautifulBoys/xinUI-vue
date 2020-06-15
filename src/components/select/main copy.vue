<template>
  <Select
    class="xin-select"
    :style="{
      width: width.indexOf('px') > -1 ? width : width + 'px'
    }"
    v-bind="$attrs"
    v-on="$listeners"
    v-model="inputValue"
    :popper-append-to-body="popperAppendToBody"
  >
    <Option
      class="ise-option"
      v-for="(item, index) in list"
      :key="index"
      :value="itemValue ? item[itemValue] : item"
      :label="itemLabel ? item[itemLabel] : item"
    >
      {{itemLabel ? item[itemLabel] : item}}
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
    width: {
      type: String,
      default: 'auto'
    },
    itemValue: {
      type: String,
      default: ''
    },
    itemLabel: {
      type: String,
      default: ''
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
  }
}
</script>
