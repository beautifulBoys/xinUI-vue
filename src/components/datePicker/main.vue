<template>
  <div class="xin-date-picker">
    <div @click="selectEvent()" @mouseover="mouseover($event)" @mouseleave="mouseleave($event)">
      <div class="xin-date-picker-icon icon-left" v-if="icon">
        <xin-icon class="icon" :name="icon"/>
      </div>
      <div class="xin-date-picker-icon icon-right" v-if="clearable && hover">
        <xin-icon
          :class="['icon']"
          name="Group-6"
          @click.native="rightIconEvent($event)"
        />
      </div>
      <div
        :class="['xin-date-picker-input', {
          'xin-date-picker-default': color === 'default',
          'placeholder': multiple ? !tags.length : !inputValue,
          'has-left-icon': icon,
          'has-right-icon': visible,
          'multiple': multiple,
          'focus': visible
        }]"
      >
        <span>{{placeholder}}</span>
      </div>
    </div>
    <div
      class="xin-date-picker-cover"
      v-show="visible"
      @click.stop="coverEvent()"
    ></div>
    <div class="xin-date-picker-options" v-show="visible">
      <div class="date-picker-content">
        <div class="content-header">
          <div class="xin-date-picker-icon icon-left">
            <xin-icon class="icon" name="Group-19"/>
          </div>
          <div class="content-header-text">2018年12月23日</div>
          <div class="xin-date-picker-icon icon-right">
            <xin-icon class="icon" name="Group-20"/>
          </div>
        </div>
        <div class="content-body">
          <table cellspacing="0" cellpadding="0" class="date-picker-content-body">
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formatDate from '@/utils/format-date'
export default {
  name: 'xinDatePicker',
  components: {
  },
  props: {
    value: {
      type: [String, Number, Array],
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    },
    width: {
      type: String,
      default: 'auto'
    },
    color: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: 'Group-'
    },
    itemValue: {
      type: String,
      default: ''
    },
    itemLabel: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    startPlaceholder: {
      type: String,
      default: ''
    },
    endPlaceholder: {
      type: String,
      default: ''
    },
    format: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      visible: false,
      inputValue: this.value,
      hover: false
    }
  },
  computed: {
  },
  watch: {
    value (n, o) {
      this.inputValue = n
    },
    inputValue (n, o) {
      // this.createTable(n)
    }
  },
  created () {
    this.createTable(2020, 7)
  },
  methods: {
    createTable (year, month) {
      let date = []
      let res = formatDate.formatDateTime(`${year}-${month}-01`)
      console.log(res)
      for (let i = 0; i < 6; i++) {
        let line = []
      }
    },
    mouseover (e) {
      this.hover = true
    },
    mouseleave (e) {
      this.hover = false
    },
    rightIconEvent (e) {
    },
    selectEvent () {
      this.visible = true
    },
    coverEvent () {
      this.visible = false
    },
    optionEvent (isSelected, item) {
      if (this.multiple) {
        let arr = []
        if (isSelected) {
          this.inputValue.forEach(val => {
            if (item[this.itemValue] !== val) {
              arr.push(val)
            }
          })
        } else {
          arr = [...this.inputValue, item[this.itemValue]]
        }
        this.$emit('input', arr)
      } else {
        this.$emit('input', item[this.itemValue])
        this.coverEvent()
      }
    }
  }
}
</script>
