<template>
  <transition
    name="xin-message"
    @after-leave="afterLeaveEvent()"
  >
    <div
      :class="['xin-message', {
        'xin-message-success': type === 'success',
        'xin-message-warning': type === 'warning',
        'xin-message-info': type === 'info',
        'xin-message-error': type === 'error'
      }]"
      :style="{
        top: top + 'px'
      }"
      ref="message"
      v-show="visible"
    >
      <div class="xin-message-icon">
        <xin-icon class="icon" :name="iconMap[type]" />
      </div>
      <div class="xin-message-content">{{messageText}}</div>
      <div class="xin-message-icon" v-if="closable">
        <xin-icon class="close" name="close" @click.native="close()" />
      </div>
    </div>
  </transition>
</template>

<script>
import Icon from '../icon'
export default {
  name: 'xinMessage',
  components: {
    'xin-icon': Icon
  },
  props: {
  },
  data () {
    return {
      visible: false,
      contentHeight: 0,
      iconMap: {
        info: 'prompt-fill',
        success: 'success-fill',
        warning: 'warning',
        error: 'reeor-fill'
      }
    }
  },
  computed: {
    messageText () {
      return this.message.length > 200 ? this.message.substr(0, 200) : this.message
    }
  },
  watch: {
    visible (n) {
      setTimeout(() => {
        this.contentHeight = this.$el.offsetHeight
      })
    }
  },
  created () {
  },
  mounted () {
    if (!this.closable) {
      this.startTimer()
    }
  },
  methods: {
    getNextTop () {
      // this.nextTop = this.$refs.message.offsetHeight + this.offsetHeight + 15
    },
    beforeEnterEvent () {
      console.log('before-appear', this.$el.offsetHeight)
      this.contentHeight = this.$el.offsetHeight
    },
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
