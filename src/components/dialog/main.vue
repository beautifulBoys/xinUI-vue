<template>
  <transition name="xin-fade">
    <div :class="['xin-dialog']" v-show="visible">
      <transition name="xin-down">
        <div
          :class="['xin-dialog-box']"
          :style="{
            width: width.indexOf('px') > -1 ? width : width + 'px'
          }"
          v-show="visible"
        >
          <div class="xin-dialog-header">
            <slot name="header" v-if="$slots.header"></slot>
            <div class="xin-dialog-header-default" v-else>
              <span>{{title}}</span>
              <i class="xin-iconfont" @click="close()" v-if="closable">&#xe687;</i>
            </div>
          </div>
          <div
            :class="['xin-dialog-body', {
              'padding': !noPadding
            }]"
          >
            <slot></slot>
          </div>
          <div class="xin-dialog-footer">
            <slot name="footer" v-if="$slots.footer"></slot>
            <div class="xin-dialog-footer-default" v-else>
              <xin-button
                color="info"
                fill
                v-if="confirmVisible"
                @click="confirm()"
              >{{confirmLabel}}</xin-button>
              <xin-button
                color="warning"
                fill
                v-if="cancelVisible"
                @click="cancel()"
              >{{cancelLabel}}</xin-button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'xinDialog',
  components: {
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: ''
    },
    noPadding: {
      type: Boolean,
      default: false
    },
    confirmVisible: {
      type: Boolean,
      default: true
    },
    cancelVisible: {
      type: Boolean,
      default: true
    },
    confirmLabel: {
      type: String,
      default: '确 认'
    },
    cancelLabel: {
      type: String,
      default: '取 消'
    },
    closable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    show () {
      this.$emit('update:visible', true)
    },
    hide () {
      this.$emit('update:visible', false)
    },
    confirm () {
      this.$emit('confirm')
    },
    cancel () {
      this.hide()
      this.$emit('cancel')
    },
    close () {
      this.hide()
      this.$emit('close')
    }
  }
}
</script>
