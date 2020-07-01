<template>
  <div class="xin-rate">
    <xin-icon
      v-for="(item, index) in size"
      :key="index"
      :class="['xin-rate-item', 'xin-rate-' + color, {
        'xin-rate-active': index < value,
        'xin-rate-disabled': disabled
      }]"
      :name="icon"
      @click.native="defaultEvent(index)"
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
      let val = index + 1
      this.$emit('input', val)
      this.$emit('change', val)
    }
  }
}
</script>
