<template>
  <transition
    name="xin-tips"
    @after-leave="afterLeaveEvent()"
  >
    <div
      :class="['xin-tips', {
        'xin-tips-success': color === 'success',
        'xin-tips-warning': color === 'warning',
        'xin-tips-info': color === 'info',
        'xin-tips-error': color === 'error',
        'fill': fill
      }]"
      :style="{
        width: width.indexOf('px') > -1 ? width : width + 'px'
      }"
      v-if="visible"
    >
      <div class="xin-tips-icon">
        <xin-icon :name="iconMap[color]" />
      </div>
      <div class="xin-tips-content">{{message}}</div>
      <div class="xin-tips-icon" v-if="closable">
        <span v-if="closeLabel" class="close-text" @click="close()">{{closeLabel}}</span>
        <xin-icon v-else class="close" name="close" @click.native="close()" />
      </div>
    </div>
  </transition>
</template>

<script>
import Icon from '../icon'
export default {
  name: 'xinTips',
  components: {
    'xin-icon': Icon
  },
  props: {
    message: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    color: { // info, error, warning, success
      type: String,
      default: 'info'
    },
    value: {
      type: [String, Number, Boolean, Object],
      default: ''
    },
    fill: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    closeLabel: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      iconMap: {
        info: 'prompt-fill',
        success: 'success-fill',
        warning: 'warning',
        error: 'reeor-fill'
      },
      visible: true
    }
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    afterLeaveEvent () {},
    close () {
      this.visible = false
      this.$emit('close', this.value || this.message)
    }
  }
}
</script>
