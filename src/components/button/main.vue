<template>
  <button
    :class="['xin-button', status, {
      'fill': fill && !inline,
      'inline': inline
    }]"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'xinButton',
  props: {
    status: { // default, success, error, warning, info
      type: String,
      default: ''
    },
    size: { // small, big
      type: String,
      default: 'normal'
    },
    width: {
      type: String,
      default: null
    },
    round: {
      type: Boolean,
      default: false
    },
    fill: {
      type: Boolean,
      default: false
    },
    inline: {
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
