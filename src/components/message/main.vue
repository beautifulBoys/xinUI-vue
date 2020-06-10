<template>
  <transition name="xin-message"  @after-leave="afterLeaveEvent()">
    <div
      :class="['xin-message', {
        'success': type === 'success',
        'warning': type === 'warning',
        'info': type === 'info',
        'error': type === 'error'
      }]"
      :style="{
        top: offsetTop + 'px'
      }"
      v-show="visible"
    >
      <div class="xin-message-icon">
        <i class="xin-iconfont" v-html="iconMap[type]"></i>
      </div>
      <div class="xin-message-content">{{message}}</div>
      <div class="xin-message-icon" v-if="closable">
        <i class="xin-iconfont close" @click="close()">&#xe687;</i>
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
  },
  data () {
    return {
      visible: false,
      iconMap: {
        info: '&#xe690;',
        success: '&#xe68d;',
        warning: '&#xe62e;',
        error: '&#xe68f;'
      }
    }
  },
  created () {
  },
  watch: {
  },
  mounted () {
    if (!this.closable) {
      this.startTimer()
    }
  },
  methods: {
    afterLeaveEvent () {
      this.timer && clearTimeout(this.timer)
      this.$el.parentNode.removeChild(this.$el)
      this.closeById(this.id)
      this.$destroy(true)
    },
    startTimer () {
      if (this.duration < 0) return
      this.timer = setTimeout(() => {
        this.close()
      }, this.duration)
    },
    close () {
      this.visible = false
    }
  }
}
</script>
