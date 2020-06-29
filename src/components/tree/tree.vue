<template>
  <div
    :class="['xin-tree']"
  >
    <template v-for="(item, index) in list">
      <xin-leaf
        :key="index"
        :item="item"
        :parent="parent"
        :itemLabel="itemLabel"
        :itemValue="itemValue"
        :step="step"
      ></xin-leaf>
    </template>
  </div>
</template>

<script>
export default {
  name: 'xinTree',
  components: {
  },
  props: {
    step: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default: () => []
    },
    parent: {
      type: Object,
      default: () => ({})
    },
    itemValue: {
      type: String,
      default: ''
    },
    itemLabel: {
      type: String,
      default: ''
    },
    model: {
      type: String,
      default: ''
    },
    readonly: {
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
  created () {
  },
  methods: {
    getValue (type) {
      let value
      if (!type) {
        value = this.list
      } else if (type === 'selected') {

      }
    },
    mapFunc () {
      if (!this.parent.childrens) return
      let selected = this.parent.childrens.every(child => child.selected)
      this.$set(this.parent, 'selected', selected)
    }
  }
}
</script>
