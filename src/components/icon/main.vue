<template>
  <i :class="['xin-iconfont', name]"></i>
</template>

<script>
export default {
  name: 'xinIcon',
  components: {
  },
  props: {
    type: { // unicode, class
      type: String,
      default: 'unicode'
    },
    name: {
      type: String,
      default: ''
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
  }
}
</script>
