<template>
  <div
    :class="['xin-tag', {
      'xin-tag-default': color === 'default',
      'xin-tag-success': color === 'success',
      'xin-tag-warning': color === 'warning',
      'xin-tag-info': color === 'info',
      'xin-tag-error': color === 'error',
      'fill': fill,
      'small': small
    }]"
  >
    <span class="xin-tag-content">{{message}}</span>
    <i class="xin-iconfont" v-if="closable" @click.stop="close()">&#xe687;</i>
  </div>
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
    }
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    close () {
      this.$emit('close', this.message)
    }
  }
}
</script>
