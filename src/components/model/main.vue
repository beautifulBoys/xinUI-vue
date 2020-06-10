<template>
  <xin-dialog
    :title="title"
    :closable="true"
    width="500"
    class="xin-model"
    :visible.sync="visible"
  >
    <div
      :class="['xin-model-body', {
        'align-center': align === 'center',
        'align-right': align === 'right'
      }]"
    >
      {{message}}
    </div>
    <div class="xin-model-footer" slot="footer">
      <xin-button
        color="info"
        fill
        v-if="type === 'confirm' || type === 'prompt'"
        @click="confirmEvent()"
      >{{confirmLabel}}</xin-button>
      <xin-button
        color="warning"
        fill
        @click="cancelEvent()"
      >{{type === 'alert' ? confirmLabel : type === 'confirm' ? cancelLabel : type === 'prompt' ? cancelLabel : '无'}}</xin-button>
    </div>
  </xin-dialog>
</template>

<script>
export default {
  name: 'xinModel',
  components: {
  },
  props: {
  },
  data () {
    return {
      visible: false
    }
  },
  created () {
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    confirmEvent () {
      this.visible = false
      this.confirmCallback && this.confirmCallback()
    },
    cancelEvent () {
      this.visible = false
      if (this.type === 'alert') {
        this.confirmCallback && this.confirmCallback()
      } else {
        this.cancelCallback && this.cancelCallback()
      }
    },
    confirm (callback) {
      this.confirmCallback = callback
      return this
    },
    cancel (callback) {
      this.cancelCallback = callback
      return this
    },
    close (callback) {
      this.closeCallback = callback
      return this
    }
  }
}
</script>
