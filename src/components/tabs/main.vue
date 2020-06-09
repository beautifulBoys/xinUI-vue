<template>
  <div class="xin-tabs">
    <div class="xin-tabs-header"></div>
    <div class="xin-tabs-content"></div>
  </div>
</template>

<script>
export default {
  name: 'xinTabs',
  components: {
  },
  props: {
    tbody: {
      type: Array,
      default: () => []
    },
    color: {
      type: String,
      default: ''
    },
    itemValue: {
      type: String,
      default: 'value'
    },
    tableIndex: {
      type: Boolean,
      default: false
    },
    tableCheckbox: {
      type: Boolean,
      default: false
    },
    tableRadio: {
      type: Boolean,
      default: false
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
    
  }
}
</script>
