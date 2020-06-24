<template>
  <div
    :class="['xin-tree']"
  >
    <template v-for="(item, index) in list">
      <xin-leaf
        :key="index"
        :item="item"
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
    itemValue: {
      type: String,
      default: ''
    },
    itemLabel: {
      type: String,
      default: ''
    },
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
