<template>
  <div
    :class="['xin-switch', color, {
      active: inputValue
    }]"
    @click="defaultEvent"
  >
    <div class="box">
      <div class="label"></div>
      <div class="item"></div>
      <div class="label"></div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'xinSwitch',
  components: {
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    color: { // default, error, warning, success
      type: String,
      default: 'default'
    },
    openLabel: {
      type: String,
      default: '开'
    },
    closeLabel: {
      type: String,
      default: '关'
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
    defaultEvent () {
      this.inputValue = !this.inputValue
      this.$emit('input', this.inputValue)
      this.$emit('change', this.inputValue)
    }
  }
}
</script>
