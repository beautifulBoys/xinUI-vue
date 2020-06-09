<template>
  <div
    :class="['xin-tabs', color]"
  >
    <div class="xin-tabs-header">
      <div
        v-for="(item, index) in list"
        :key="index"
        :class="['xin-tabs-header-item', {
          'active': tabValue === item[itemValue]
        }]"
        @click="tabEvent(item)"
      >
        {{item[itemLabel]}}
      </div>
    </div>
    <div
      :class="['xin-tabs-content', {
        scroll: height
      }]"
      v-for="(item, index) in list"
      :key="index"
      :style="{height: height.indexOf('px') > -1 ? height : height + 'px'}"
      v-show="tabValue === item[itemValue]"
    >
      <slot :name="item[itemValue]"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xinTabs',
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
