<template>
  <div class="xin-transfer">
    <div class="xin-transfer-side">
      <div class="xin-transfer-head">
        <xin-checkbox v-model="left.all" @change="allCheckboxChange(true, $event)">{{leftTitle}}</xin-checkbox>
        <span class="xin-transfer-desc">{{left.checkedSum}}/{{leftLength}}</span>
      </div>
      <div class="xin-transfer-body">
        <div class="xin-transfer-item" v-for="(item, index) in list" :key="index">
          <template v-if="item.aside">
            <xin-checkbox v-model="item.checked" :disabled="item.disabled" @change="calculate()">{{item.text}}</xin-checkbox>
          </template>
        </div>
      </div>
    </div>
    <div class="xin-transfer-control">
      <xin-icon
        :class="['cont-btn', {active: left.checkedSum}]"
        @click.native="event(true)"
        name="arrow-right"
      />
      <xin-icon
        :class="['cont-btn', {active: right.checkedSum}]"
        @click.native="event(false)"
        name="arrow-lift"
      />
    </div>
    <div class="xin-transfer-side">
      <div class="xin-transfer-head">
        <xin-checkbox v-model="right.all" @change="allCheckboxChange(false, $event)">{{rightTitle}}</xin-checkbox>
        <span class="xin-transfer-desc">{{right.checkedSum}}/{{rightLength}}</span>
      </div>
      <div class="xin-transfer-body">
        <div class="xin-transfer-item" v-for="(item, index) in list" :key="index">
          <template v-if="!item.aside">
            <xin-checkbox v-model="item.checked" :disabled="item.disabled" @change="calculate()">{{item.text}}</xin-checkbox>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../icon'
export default {
  name: 'xinTransfer',
  components: {
    'xin-icon': Icon
  },
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    },
    data: {
      type: Array,
      default () {
        return []
      }
    },
    disabled: {
      type: Array,
      default () {
        return []
      }
    },
    checked: {
      type: Array,
      default () {
        return []
      }
    },
    direction: {
      type: String,
      default: 'left'
    },
    leftTitle: {
      type: String,
      default: '左侧列表'
    },
    rightTitle: {
      type: String,
      default: '右侧列表'
    },
    itemValue: {
      type: String,
      default: ''
    },
    itemText: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      list: [],
      left: {
        all: false,
        checkedSum: 0
      },
      right: {
        all: false,
        checkedSum: 0
      },
      selectedList: []
    }
  },
  watch: {
    data (n) {
      this.formatData()
    }
  },
  mounted () {
    this.formatData()
  },
  computed: {
    leftLength () {
      return this.list.length ? this.list.length - this.value.length : 0
    },
    rightLength () {
      return this.list.length ? this.value.length : 0
    }
  },
  methods: {
    formatData () {
      let arr = []
      this.data.forEach(item => {
        arr.push({
          text: item[this.itemText],
          value: item[this.itemValue],
          checked: false,
          aside: true,
          disabled: false
        })
      })
      arr.forEach(item => {
        this.value.forEach(val => {
          if (val === item.value) {
            item.aside = false
          }
        })
        this.checked.forEach(val => {
          if (val === item.value) {
            item.checked = true
          }
        })
        this.disabled.forEach(val => {
          if (val === item.value) {
            item.disabled = true
            item.checked = false
          }
        })
      })
      this.list = arr
      this.list.length && this.calculate()
    },
    calculate (event) {
      let leftChecked = 0
      let rightChecked = 0
      let value = []
      this.list.forEach(item => {
        if (item.aside) {
          if (item.checked) {
            leftChecked++
          }
        } else {
          if (item.checked) {
            rightChecked++
          }
          value.push(item.value)
        }
      })
      this.left.checkedSum = leftChecked
      this.right.checkedSum = rightChecked
      this.$emit('input', value)
      event && this.$emit('change', value)
    },
    event (type) {
      if (type && !this.left.checkedSum) return
      if (!type && !this.right.checkedSum) return
      this.list.forEach(item => {
        if (item.aside === type && item.checked && !item.disabled) {
          item.checked = false
          item.aside = !type
        }
      })
      this.calculate(true)
    },
    allCheckboxChange (type, status) {
      this.list.forEach(item => {
        if (item.aside === type && !item.disabled) {
          item.checked = status
        }
      })
      this.calculate()
    }
  }
}
</script>
