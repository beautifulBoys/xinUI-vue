<template>
  <div
    :class="['xin-option', {
      'selected': isSelected
    }]"
    @click.stop="optionEvent()"
  >{{item[itemLabel]}}</div>
</template>

<script>
export default {
  name: 'xinOption',
  components: {
  },
  props: {
    value: {
      type: [String, Number, Boolean, Array],
      default: ''
    },
    item: {
      type: Object,
      default: () => ({})
    },
    itemValue: {
      type: String,
      default: ''
    },
    itemLabel: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputValue: this.value
    }
  },
  computed: {
    isSelected () {
      if (this.multiple) {
        return this.inputValue.indexOf(this.item[this.itemValue]) > -1
      } else {
        return this.inputValue === this.item[this.itemValue]
      }
    }
  },
  watch: {
    value (n) {
      this.inputValue = n
    }
  },
  created () {
  },
  methods: {
    optionEvent () {
      this.$emit('option-event', this.isSelected)
    }
  }
}
</script>
