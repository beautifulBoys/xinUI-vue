<template>
  <transition
    name="xin-tips"
    @after-leave="afterLeaveEvent()"
  >
    <div
      :class="['xin-tips', {
        'success': color === 'success',
        'warning': color === 'warning',
        'info': color === 'info',
        'error': color === 'error',
        'fill': fill
      }]"
      :style="{
        width: width.indexOf('px') > -1 ? width : width + 'px'
      }"
      v-if="visible"
    >
      <div class="xin-tips-icon">
        <i class="xin-iconfont" v-html="iconMap[color]"></i>
      </div>
      <div class="xin-tips-content">{{message}}</div>
      <div class="xin-tips-icon" v-if="closable">
        <span v-if="closeLabel" class="close-text" @click="close()">{{closeLabel}}</span>
        <i v-else class="xin-iconfont close" @click="close()">&#xe687;</i>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'xinTips',
  components: {
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
        info: '&#xe690;',
        success: '&#xe68d;',
        warning: '&#xe62e;',
        error: '&#xe68f;'
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
      this.$emit('close')
    }
  }
}
</script>
