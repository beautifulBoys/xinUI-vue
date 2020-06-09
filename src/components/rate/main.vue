<template>
  <div class="xin-rate">
    <i
      :class="['xin-rate-item', 'xin-iconfont', color, {
        'xin-rate-active': index < value,
        'xin-rate-disabled': disabled
      }]"
      v-for="(item, index) in size"
      :key="index"
      v-html="iconMap[type]"
      @click="defaultEvent(index)"
    ></i>
  </div>
</template>

<script>
export default {
  name: 'xinRate',
  components: {
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
      default: 'default'
    },
    type: {
      type: String,
      default: 'star'
    }
  },
  data () {
    return {
      iconMap: {
        star: '&#xe6b0;',
        heart: '&#xe64e;',
        crown: '&#xe642;',
        diamond: '&#xe64a;',
        face: '&#xe7d7;'
      },
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
