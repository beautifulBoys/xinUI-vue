<template>
  <div class="xin-leaf">
    <div class="xin-leaf-label" :style="{'padding-left': 20 * step + 'px'}">
      <div class="leaf-icon-box">
        <xin-icon
          :class="['leaf-icon', {'visible': visible}]"
          name="arrow-right"
          v-if="item.childrens"
          @click.native="visible = !visible"
        />
      </div>
      <xin-checkbox
        v-model="item.selected"
        @input="changeEvent($event)"
      >{{item[itemLabel]}}</xin-checkbox>
    </div>
    <template v-if="item.childrens">
      <xin-tree
        v-show="visible"
        :list="item.childrens"
        :parent="item"
        :step="step + 1"
        :itemValue="itemValue"
        :itemLabel="itemLabel"
      ></xin-tree>
    </template>
  </div>
</template>

<script>
import Checkbox from '../checkbox'
import Icon from '../icon'
export default {
  name: 'xinLeaf',
  components: {
    'xin-checkbox': Checkbox,
    'xin-icon': Icon
  },
  props: {
    item: {
      type: Object,
      default: {}
    },
    step: {
      type: Number,
      default: 0
    },
    parent: {
      type: Object,
      default: () => ([])
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
      visible: false
    }
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    changeEvent (val) {
      console.log(this.item.name)
      this.mapFunc(this.item, val)
    },
    mapFunc (item, val) {
      if (item.childrens) {
        item.childrens.forEach(child => {
          this.mapFunc(child, val)
        })
        this.$set(item, 'selected', val)
      } else {
        this.$set(item, 'selected', val)
      }
      this.$parent.mapFunc && this.$parent.mapFunc()
    }
  }
}
</script>
