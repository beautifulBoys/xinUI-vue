<template>
  <div class="xin-leaf">
    <div class="xin-leaf-label" :style="{'padding-left': 20 * step + 'px'}">
      <div class="leaf-icon-box">
        <xin-icon
          :class="['leaf-icon', {'visible': visible}]"
          name="Group-3"
          v-if="item.childrens"
          @click.native="visible = !visible"
        />
      </div>
      <xin-checkbox v-model="selected">{{item[itemLabel]}}</xin-checkbox>
    </div>
    <template v-if="item.childrens">
      <xin-tree
        v-show="visible"
        :list="item.childrens"
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
      selected: false,
      visible: true
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
