<template>
  <div class="xin-rate">
    <xin-icon
      :class="['xin-rate-item', 'xin-rate-' + color, {
        'xin-rate-active': index < value,
        'xin-rate-disabled': disabled
      }]"
      v-for="(item, index) in size"
      :key="index"
      :name="icon"
      @click="defaultEvent(index)"
    />
  </div>
</template>

<script>
import Icon from '../icon'
export default {
  name: 'xinRate',
  components: {
    'xin-icon': Icon
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 5
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: { // default, error, warning, success
      type: String,
      default: 'info'
    },
    icon: {
      type: String,
      default: 'collection-fill'
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
    defaultEvent (index) {
      if (this.disabled) return
      this.inputValue = index + 1
      this.$emit('input', this.inputValue)
      this.$emit('change', this.inputValue)
    }
  }
}
</script>
