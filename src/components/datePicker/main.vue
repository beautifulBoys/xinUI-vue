<template>
  <div :class="['xin-date-picker', {
    'disabled': disabled,
    'range': range
  }]">
    <div @click="selectEvent()" @mouseover="mouseover($event)" @mouseleave="mouseleave($event)">
      <div class="xin-date-picker-icon icon-left" v-if="icon">
        <xin-icon class="icon" :name="icon"/>
      </div>
      <div class="xin-date-picker-icon icon-right" v-if="clearable && hover && inputText">
        <xin-icon class="icon" name="Group-6" @click.native="rightIconEvent($event)"/>
      </div>
      <div
        :class="['xin-date-picker-input', {
          'xin-date-picker-default': color === 'default',
          'placeholder': !inputText,
          'has-left-icon': icon,
          'has-right-icon': true,
          'focus': visible
        }]"
      >
        <template v-if="range">
          <div class="input-text">{{inputText || startPlaceholder || placeholder}}</div>
          <div class="space">至</div>
          <div class="input-text">{{inputText || endPlaceholder || placeholder}}</div>
        </template>
        <template v-else>
          <div class="input-text">{{inputText || placeholder}}</div>
        </template>
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
            <xin-icon class="icon" name="Group-19" @click.native="preMonth()" />
          </div>
          <div class="content-header-text">{{table.year}} 年 {{table.month}} 月</div>
          <div class="xin-date-picker-icon icon-right">
            <xin-icon class="icon" name="Group-20" @click.native="nextMonth()" />
          </div>
        </div>
        <div class="content-body">
          <table cellspacing="0" cellpadding="0" class="date-picker-content-body">
            <thead class="thead">
              <tr class="tr">
                <th v-for="(item, index) in table.thead" :key="index" class="th">{{item}}</th>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr v-for="(line, lineIndex) in table.tbody" :key="lineIndex" class="tr">
                <td
                  :class="['td', {
                  }]"
                  v-for="(item, index) in line"
                  :key="index"
                >
                  <div
                    :class="['day', {
                      'pre-month-day': table.month === 1 ? item.month  === 12 : item.month === table.month - 1,
                      'current-month-day': item.month === table.month,
                      'next-month-day': table.month === 12 ? item.month  === 1 : item.month === table.month + 1,
                      'disabled': item.month !== table.month,
                      'today': today.month === item.month && today.day === item.day,
                      'selected': select.year === item.year && select.month === item.month && select.day === item.day
                    }]"
                    @click="dateEvent(item)"
                  >{{item.day}}</div>
                </td>
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
      type: [String, Date, Array],
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: 'Group-'
    },
    readonly: {
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
    range: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    startPlaceholder: {
      type: String,
      default: '开始时间'
    },
    endPlaceholder: {
      type: String,
      default: '结束时间'
    },
    format: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      visible: false,
      inputValue: this.value ? new Date(this.value) : this.value,
      inputText: '',
      hover: false,
      table: {
        year: null,
        month: null,
        thead: ['日', '一', '二', '三', '四', '五', '六'],
        tbody: []
      },
      today: {
        year: null,
        month: null,
        day: null
      },
      select: {
        year: null,
        month: null,
        day: null
      }
    }
  },
  computed: {
  },
  watch: {
    value (n, o) {
      this.inputValue = n ? new Date(n) : n
      if (n) {
        let select = formatDate.formatDateTime(n)
        this.select.year = Number(select.year)
        this.select.month = Number(select.month)
        this.select.day = Number(select.day)
        this.table.year = Number(select.year)
        this.table.month = Number(select.month)
        this.createTable(this.table.year, this.table.month)
      } else {
        this.select = { year: null, month: null, day: null }
        let current = formatDate.formatDateTime(n)
        this.table.year = Number(current.year)
        this.table.month = Number(current.month)
      }
    },
    inputValue (n) {
      if (n) {
        let info = formatDate.formatDateTime(n)
        this.inputText = `${info.year}-${info.month}-${info.day}`
      } else {
        this.inputText = ''
      }
    }
  },
  created () {
    let day = formatDate.formatDateTime()
    this.today.year = Number(day.year)
    this.today.month = Number(day.month)
    this.today.day = Number(day.day)
    if (this.inputValue) {
      let select = formatDate.formatDateTime(this.inputValue)
      this.table.year = select.year
      this.table.month = select.month
    } else {
      this.table.year = this.today.year
      this.table.month = this.today.month
    }
    
    this.createTable(this.table.year, this.table.month)
  },
  methods: {
    createTable (year, month) {
      let current = formatDate.formatDateTime(`${year}-${month}-01`)
      let date = [
        ...this.preMonthDays(year, month, current),
        ...this.currentMonthDays(year, month, current),
        ...this.nextMonthDays(year, month, current)
      ]
      let days = []
      for (let i = 0; i < 6; i++) {
        let week = []
        for (let j = 0; j < 7; j++) {
          let day = date[i * 7 + j]
          week.push({
            year: Number(day.year),
            month: Number(day.month),
            day: Number(day.day)
          })
        }
        days.push(week)
      }
      this.table.tbody = days
    },
    preMonthDays (year, month, current) {
      let preYear = month > 1 ? year : year - 1
      let preMonth = month > 1 ? month - 1 : 12
      let pre = formatDate.formatDateTime(`${preYear}-${preMonth}-01`)
      let arr = []
      for (let i = 0; i < current.week; i++) {
        arr.push(
          formatDate.formatDateTime(`${preYear}-${preMonth}-${pre.monthDays - current.week + 1 + i}`)
        )
      }
      return arr
    },
    currentMonthDays (year, month, current) {
      let arr = []
      for (let i = 0; i < current.monthDays; i++) {
        arr.push(
          formatDate.formatDateTime(`${year}-${month}-${i + 1}`)
        )
      }
      return arr
    },
    nextMonthDays (year, month, current) {
      let nextYear = month > 11 ? year + 1 : year
      let nextMonth = month > 11 ? 1 : month + 1
      let days = 42 - current.monthDays - current.week
      let arr = []
      for (let i = 0; i < days; i++) {
        arr.push(
          formatDate.formatDateTime(`${nextYear}-${nextMonth}-${i + 1}`)
        )
      }
      return arr
    },
    preMonth () {
      this.table.year = this.table.month === 1 ? this.table.year - 1 : this.table.year
      this.table.month = this.table.month === 1 ? 12 : this.table.month - 1
      this.createTable(this.table.year, this.table.month)
    },
    nextMonth () {
      this.table.year = this.table.month === 12 ? this.table.year + 1 : this.table.year
      this.table.month = this.table.month === 12 ? 1 : this.table.month + 1
      this.createTable(this.table.year, this.table.month)
    },
    dateEvent (item) {
      if (item.month === this.table.month) {
        this.emit(`${item.year}-${item.month}-${item.day}`)
        this.visible = false
      }
    },
    mouseover (e) {
      this.hover = true
    },
    mouseleave (e) {
      this.hover = false
    },
    rightIconEvent (e) {
      e.stopPropagation()
      this.emit()
    },
    selectEvent () {
      if (this.disabled) return
      this.visible = true
    },
    coverEvent () {
      this.visible = false
    },
    emit (date) {
      if (this.format) {
        this.$emit('input', date ? formatDate.formatDate(date, this.format) : '')
      } else {
        this.$emit('input', date ? formatDate.getCST(date) : '')
      }
    }
  }
}
</script>
