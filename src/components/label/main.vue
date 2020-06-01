<template>
  <label class="li-label">
    <slot></slot>
  </label>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: 'left'
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
