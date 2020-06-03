<template>
  <label 
    :class="['xin-label', {
      'align-left': align === 'left',
      'align-center': align === 'center',
      'align-right': align === 'right',
      'required': required
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
