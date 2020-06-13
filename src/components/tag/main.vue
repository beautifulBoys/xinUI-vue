<template>
  <transition
    name="xin-tips"
    @after-leave="afterLeaveEvent()"
  >
    <div
      :class="['xin-tag', {
        'default': color === 'default',
        'success': color === 'success',
        'warning': color === 'warning',
        'info': color === 'info',
        'error': color === 'error',
        'fill': fill,
        'small': small
      }]"
      v-if="visible"
    >
      <span class="xin-tag-content">{{message}}</span>
      <i class="xin-iconfont" v-if="closable" @click="close()">&#xe687;</i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'xinTag',
  components: {
  },
  props: {
    message: {
      type: String,
      default: ''
    },
    small: {
      type: Boolean,
      default: false
    },
    color: { // default, info, error, warning, success
      type: String,
      default: 'default'
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
      this.$emit('close', this.value || this.message)
    }
  }
}
</script>
