<template>
  <div
    :class="['xin-upload']"
  >
    
  </div>
</template>

<script>
export default {
  name: 'xinUpload',
  components: {
  },
  props: {
    value: {
      type: [Number, String],
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    },
    color: { // blue
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: 'auto'
    },
    itemValue: {
      type: String,
      default: 'name'
    },
    itemLabel: {
      type: String,
      default: 'title'
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tabValue: this.value
    }
  },
  created () {

  },
  watch: {
    value (n) {
      this.tabValue = n
    }
  },
  mounted () {
  },
  methods: {
    tabEvent (item) {
      this.tabValue = item[this.itemValue]
      this.$emit('tab-change', this.tabValue)
    },
    getValue (item) {
      return this.itemValue ? item[this.itemValue] : item
    },
  }
}
</script>
