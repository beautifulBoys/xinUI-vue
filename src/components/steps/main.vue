<template>
  <div class="xin-steps">
    <div class="xin-steps-box">
      <div
        :class="['xin-steps-item', {
          'xin-steps-active': inputValue === index + 1 && status !== 'error',
          'xin-steps-success': inputValue > index + 1,
          'xin-steps-error': inputValue === index + 1 && status === 'error'
        }]"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="xin-steps-item-left">
          <xin-icon name="shijian" v-if="inputValue < index + 1" />
          <xin-icon name="bofang" v-if="inputValue === index + 1 && status !== 'error'" />
          <xin-icon name="gou" v-if="inputValue > index + 1" />
          <xin-icon name="shanchu1" v-if="inputValue === index + 1 && status === 'error'" />
        </div>
        <div class="xin-steps-item-right">
          <div class="xin-steps-item-line">
            <div class="xin-steps-title">{{createTitleFunc(item, index)}}</div>
            <div class="xin-steps-space"></div>
          </div>
          <div class="xin-steps-item-line">
            <div class="xin-steps-desc">{{createDescFunc(item, index)}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../icon'
export default {
  name: 'xinSteps',
  components: {
    'xin-icon': Icon
  },
  props: {
    value: {
      type: Number,
      default: 1
    },
    status: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'star'
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
    createTitleFunc (item, index) {
      let title = ''
      if (this.inputValue < index + 1) { // wait
        title = item.title || ''
      } else if (this.inputValue === index + 1 && this.status !== 'error') { // active
        title = item.activeTitle || item.title || ''
      } else if (this.inputValue > index + 1) { // success
        title = item.successTitle || item.title || ''
      } else if (this.inputValue === index + 1 && this.status === 'error') { // error
        title = item.errorTitle || item.title || ''
      }
      return title
    },
    createDescFunc (item, index) {
      let desc = ''
      if (this.inputValue < index + 1) { // wait
        desc = item.desc || ''
      } else if (this.inputValue === index + 1 && this.status !== 'error') { // active
        desc = item.activeDesc || item.desc || ''
        
      } else if (this.inputValue > index + 1) { // success
        desc = item.successDesc || item.desc || ''
        
      } else if (this.inputValue === index + 1 && this.status === 'error') { // error
        desc = item.errorDesc || item.desc || ''
        
      }
      return desc
    },
    defaultEvent (index) {
      if (this.disabled) return
      this.inputValue = index + 1
      this.$emit('input', this.inputValue)
      this.$emit('change', this.inputValue)
    }
  }
}
</script>
