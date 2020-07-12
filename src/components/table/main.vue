<template>
  <div class="xin-table">
    <table cellspacing="0" cellpadding="0" class="xin-table-content">
      <thead class="xin-table-thead">
        <tr class="xin-table-tr">
          <th v-if="tableIndex" class="xin-table-th" style="width: 50px">序号</th>
          <th v-if="tableRadio" class="xin-table-th" style="width: 50px"></th>
          <th v-if="tableCheckbox" class="xin-table-th" style="width: 50px">
            <xin-checkbox
              v-model="checkboxAllValue"
              hideLabel
              @change="checkboxAllChange($event)"
            ></xin-checkbox>
          </th>
          <th
            class="xin-table-th"
            v-for="(item, index) in thead"
            :key="index"
          >{{item}}</th>
        </tr>
      </thead>
      <tbody class="xin-table-tbody">
        <tr
          :class="['xin-table-tr', {
            'stripe': index % 2 !== 0
          }]"
          v-for="(item, index) in tbody"
          :key="index"
        >
          <td v-if="tableIndex" class="xin-table-td" style="width: 50px">{{index + 1}}</td>
          <td v-if="tableRadio" class="xin-table-td" style="width: 50px">
            <xin-radio :label="item[itemValue]" v-model="radioValue" @change="radioChange($event, item)"></xin-radio>
          </td>
          <td v-if="tableCheckbox" class="xin-table-td" style="width: 50px">
            <xin-checkbox
              :label="item[itemValue]"
              v-model="checkboxValue"
              hideLabel
              @change="checkboxChange($event)"
            ></xin-checkbox>
          </td>
          <slot :item="item" :index="index" class="xin-table-td"></slot>
        </tr>
      </tbody>
    </table>
    <div class="xin-table-null" v-if="!tbody.length">
      <xin-icon class="xin-table-null-iconfont" name="empty"/>
      <!-- <i class="xin-iconfont xin-table-null-iconfont">&#xe621;</i> -->
      <div class="xin-table-null-text">暂无数据</div>
    </div>
  </div>
</template>

<script>
import Icon from '../icon'
export default {
  name: 'xinTable',
  components: {
    'xin-icon': Icon
  },
  props: {
    tbody: {
      type: Array,
      default: () => []
    },
    thead: {
      type: Array,
      default: () => []
    },
    color: {
      type: String,
      default: 'info'
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
      radioValue: '',
      checkboxValue: [],
      checkboxAllValue: false
    }
  },
  created () {
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    checkboxAllChange () {
      let arr = []
      let list = []
      if (this.checkboxAllValue) {
        this.tbody.forEach(item => {
          arr.push(item[this.itemValue])
          list.push(item)
        })
      }
      this.checkboxValue = arr
      this.$emit('checkbox-change', this.checkboxValue, list)
    },
    checkboxChange () {
      let list = []
      this.checkboxValue.forEach(itemValue => {
        this.tbody.forEach(item => {
          if (itemValue === item[this.itemValue]) list.push(item)
        })
      })
      this.$emit('checkbox-change', this.checkboxValue, list)
    },
    radioChange (e, item) {
      this.$emit('radio-change', this.radioValue, item)
    },
    clear () {
      this.checkboxAllValue = false
      this.checkboxValue = []
      this.radioValue = ''
      this.$emit('radio-change', this.radioValue, null)
      this.$emit('checkbox-change', this.checkboxValue, [])
    },
    setValue (value) {
      if (this.tableRadio) {
        this.radioValue = value
        this.$emit('radio-change', this.radioValue, null)
      }
      if (this.tableCheckbox) {
        this.checkboxValue = value
        this.$emit('checkbox-change', this.checkboxValue, [])
      }
    },
    defaultEvent () {
      if (this.disabled) return
      this.inputValue = !this.inputValue
      let val = this.inputValue ? this.openValue : this.closeValue
      this.$emit('input', val)
      this.$emit('change', val)
    }
  }
}
</script>
