<template>
  <div
    :class="['xin-option', {
      'selected': true
    }]"
    v-for="(item, index) in list"
    :key="index"
    @click.stop="optionEvent(item)"
  >{{item[itemLabel]}}</div>
</template>

<script>
export default {
  name: 'xinOption',
  components: {
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: 'auto'
    }
  },
  data () {
    return {
    }
  },
  watch: {
  },
  created () {
  },
  methods: {
    selectEvent () {
      this.visible = true
    },
    coverEvent () {
      this.visible = false
    },
    optionEvent (item) {
      if (this.multiple) {
        this.$emit('input', [...this.inputValue, item[this.itemValue]])
      } else {
        this.$emit('input', item[this.itemValue])
        this.coverEvent()
      }
    }
  }
}
</script>
