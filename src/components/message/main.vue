<template>
  <transition name="xin-message">
    <div :class="['xin-message', {
      'xin-message-success': type === 'success',
      'xin-message-warning': type === 'warning',
      'xin-message-info': type === 'info',
      'xin-message-error': type === 'error'
    }]" v-show="show">
      <div class="xin-message-icon">
        <i class="xin-iconfont" v-html="iconMap[type]"></i>
      </div>
      <div class="xin-message-content">{{message}}</div>
      <div class="xin-message-icon">
        <i class="xin-iconfont" @click="hide()">&#xe67a;</i>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'xinMessage',
  components: {
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'info'
    },
    message: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      iconMap: {
        info: '&#xe626;',
        success: '&#xe604;',
        warning: '&#xe62e;',
        error: '&#xe605;'
      }
    }
  },
  created () {
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    hide () {
      this.$emit('update:show', false)
    }
  }
}
</script>
