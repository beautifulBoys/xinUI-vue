<template>
  <label 
    :class="['xin-label', {
      'xin-label-align-left': align === 'left',
      'xin-label-align-center': align === 'center',
      'xin-label-align-right': align === 'right',
      'xin-label-required': required
    }]"
    :style="{
      width: width.indexOf('px') > -1 ? width : width + 'px'
    }"
  >
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'xinLabel',
  props: {
    width: {
      type: String,
      default: 'auto'
    },
    align: {
      type: String,
      default: 'left'
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
