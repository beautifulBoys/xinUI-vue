<template>
  <div class="xin-table">
    <table cellspacing="0" cellpadding="0" class="xin-table-content">
      <thead class="xin-table-thead">
        <tr class="xin-table-tr">
          <th v-if="tableIndex" style="width: 50px">序号</th>
          <th v-if="tableRadio" style="width: 50px"></th>
          <th v-if="tableCheckbox" style="width: 50px">
            <xin-checkbox v-model="checkboxAllValue"></xin-checkbox>
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
          <td v-if="tableIndex" style="width: 50px">{{index + 1}}</td>
          <td v-if="tableRadio" style="width: 50px">
            <xin-radio></xin-radio>
          </td>
          <td v-if="tableCheckbox" style="width: 50px">
            <xin-checkbox :label="item[itemValue]" v-model="checkboxValue"></xin-checkbox>
          </td>
          <slot :item="item" :index="index" class="xin-table-td"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'xinTable',
  components: {
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
      radioValue: [],
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
