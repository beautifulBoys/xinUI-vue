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
    <xin-icon name="reeor" v-if="closable" @click.native="close($event)" />
  </div>
</template>

<script>
import Icon from '../icon'
export default {
  name: 'xinTag',
  components: {
    'xin-icon': Icon
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
    close (e) {
      e.stopPropagation()
      this.$emit('close', this.message)
    }
  }
}
</script>
