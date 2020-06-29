<template>
  <div :class="['xin-date-picker', {
    'disabled': disabled,
    'range': range
  }]">
    <div @click="selectEvent()" @mouseover="mouseover($event)" @mouseleave="mouseleave($event)">
      <div class="xin-date-picker-icon icon-left" v-if="icon">
        <xin-icon class="icon" :name="icon"/>
      </div>
      <div class="xin-date-picker-icon icon-right" v-if="clearable && hover && (inputValue.start || inputValue.end)">
        <xin-icon class="icon" name="Group-6" @click.native="rightIconEvent($event)"/>
      </div>
      <div
        :class="['xin-date-picker-input', {
          'xin-date-picker-default': color === 'default',
          'has-left-icon': icon,
          'has-right-icon': true,
          'focus': visible
        }]"
      >
          <div :class="['input-text', {'placeholder': !inputValue.start}]">{{inputValue.start || (range ? startPlaceholder : placeholder)}}</div>
          <template v-if="range">
            <div class="space">至</div>
            <div :class="['input-text', {'placeholder': !inputValue.end}]">{{inputValue.end || endPlaceholder}}</div>
          </template>
      </div>
    </div>
    <div
      class="xin-date-picker-cover"
      v-show="visible"
      @click.stop="coverEvent()"
    ></div>
    <transition name="xin-date-picker">
      <div class="xin-date-picker-options" v-show="visible">
        <div :class="['date-picker-content', {'range': range}]">
          <div class="calendar">
            <div class="content-header">
              <div class="xin-date-picker-icon icon-left">
                <xin-icon class="icon" name="Group-19" @click.native="toPreMonth()" />
              </div>
              <div class="content-header-text">{{table.year}} 年 {{table.month}} 月</div>
              <div class="xin-date-picker-icon icon-right">
                <xin-icon class="icon" name="Group-20" @click.native="toNextMonth()" />
              </div>
            </div>
            <div class="content-body">
              <table cellspacing="0" cellpadding="0" class="date-picker-content-body">
                <thead class="thead">
                  <tr class="tr">
                    <th v-for="(item, index) in table.thead" :key="index" class="th">{{item}}</th>
                  </tr>
                </thead>
                <tbody class="tbody" @mouseleave="tdMouseleave()">
                  <tr v-for="(line, lineIndex) in table.tbody" :key="lineIndex" class="tr">
                    <td
                      :class="['td', {
                      }]"
                      v-for="(item, index) in line"
                      :key="index"
                      @mouseover="tdMouseover(item)"
                    >
                      <div :class="['day-box', {'section': (range && item.month === table.month && startSelect && endSelect && ((item.stamp > startSelect && item.stamp < endSelect) || (item.stamp < startSelect && item.stamp > endSelect)))}]">
                        <div
                          :class="['day', {
                            'pre-month': table.month === 1 ? item.month  === 12 : item.month === table.month - 1,
                            'current-month': item.month === table.month,
                            'next-month': table.month === 12 ? item.month  === 1 : item.month === table.month + 1,
                            'today': today.stamp === item.stamp,
                            'selected': (item.month === table.month && !disabledDate(item.date)) && (startSelect === item.stamp || endSelect === item.stamp),
                            'disabled': item.month !== table.month || disabledDate(item.date)
                          }]"
                          @click="dateEvent(item, (item.month !== table.month || disabledDate(item.date)))"
                        >{{item.day}}</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div :class="['calendar', {'border': range}]" v-if="range">
            <div class="content-header">
              <div class="content-header-text">{{nextYear || ''}} 年 {{nextMonth || ''}} 月</div>
            </div>
            <div class="content-body">
              <table cellspacing="0" cellpadding="0" class="date-picker-content-body">
                <thead class="thead">
                  <tr class="tr">
                    <th v-for="(item, index) in table.thead" :key="index" class="th">{{item}}</th>
                  </tr>
                </thead>
                <tbody class="tbody" @mouseleave="tdMouseleave()">
                  <tr v-for="(line, lineIndex) in table.nextTbody" :key="lineIndex" class="tr">
                    <td
                      :class="['td', {
                      }]"
                      v-for="(item, index) in line"
                      :key="index"
                      @mouseover="tdMouseover(item)"
                    >
                      <div :class="['day-box', {'section': (range && item.month === nextMonth && startSelect && endSelect && ((item.stamp > startSelect && item.stamp < endSelect) || (item.stamp < startSelect && item.stamp > endSelect)))}]">
                        <div
                          :class="['day', {
                            'pre-month': nextMonth === 1 ? item.month  === 12 : item.month === nextMonth - 1,
                            'current-month': item.month === nextMonth,
                            'next-month': nextMonth === 12 ? item.month  === 1 : item.month === nextMonth + 1,
                            'today': today.stamp === item.stamp,
                            'selected': (item.month === nextMonth && !disabledDate(item.date)) && (startSelect === item.stamp || endSelect === item.stamp),
                            'disabled': item.month !== nextMonth || disabledDate(item.date)
                          }]"
                          @click="dateEvent(item, (item.month !== nextMonth || disabledDate(item.date)))"
                        >{{item.day}}</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import formatDate from '../../utils/format-date'
export default {
  name: 'xinDatePicker',
  components: {
  },
  props: {
    value: {
      type: [String, Date, Object],
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
    },
    disabledDate: {
      type: Function,
      default: () => false
    }
  },
  data () {
    return {
      visible: false,
      hover: false,
      formatText: 'yyyy-MM-dd',
      // 显示的值
      inputValue: {
        start: '',
        end: ''
      },
      table: {
        year: null,
        month: null,
        thead: ['日', '一', '二', '三', '四', '五', '六'],
        tbody: [],
        nextTbody: []
      },
      startSelect: 0,
      endSelect: 0,
      today: {
        year: null,
        month: null,
        day: null,
        stamp: 0
      },
      touchNum: 0
    }
  },
  computed: {
    nextYear () {
      if (this.table.year && this.table.month) {
        return this.table.month > 11 ? this.table.year + 1 : this.table.year
      } else {
        return null
      }
    },
    nextMonth () {
      if (this.table.year && this.table.month) {
        return this.table.month > 11 ? 1 : this.table.month + 1
      } else {
        return null
      }
    }
  },
  watch: {
    value (n, o) {
      this.init(n)
    }
  },
  created () {
    let info = formatDate.formatDateTime(formatDate.formatStamp().dateStamp)
    this.today = {
      year: Number(info.year),
      month: Number(info.month),
      day: Number(info.day),
      stamp: info.stamp
    }
    this.init(this.value)
  },
  methods: {
    init (value) {
      value = this.range ? {start: value && value.start || 0, end: value && value.end || 0} : (value || '')
      this.inputValueChange(value)
      if (this.range) {
        this.startSelect = value.start ? formatDate.formatDateTime(formatDate.formatStamp(value.start).dateStamp).stamp : 0
        this.endSelect = value.end ? formatDate.formatDateTime(formatDate.formatStamp(value.end).dateStamp).stamp : 0
        let startSelect = formatDate.formatDateTime(this.startSelect)
        this.table.year = this.startSelect ? Number(startSelect.year) : this.today.year
        this.table.month = this.startSelect ? Number(startSelect.month) : this.today.month
        this.table.tbody = this.createTable(this.table.year, this.table.month)
        this.table.nextTbody = this.createTable(this.nextYear, this.nextMonth)
      } else {
        this.startSelect = value ? formatDate.formatDateTime(value).stamp : 0
        let startSelect = formatDate.formatDateTime(this.startSelect)
        this.table.year = this.startSelect ? Number(startSelect.year) : this.today.year
        this.table.month = this.startSelect ? Number(startSelect.month) : this.today.month
        this.table.tbody = this.createTable(this.table.year, this.table.month)
      }
    },
    inputValueChange (value) {
      if (this.range) {
        if (value.start) {
          this.inputValue.start = formatDate.formatDate(value.start, this.format || this.formatText)
        } else {
          this.inputValue.start = ''
        }
        if (value.end) {
          this.inputValue.end = formatDate.formatDate(value.end, this.format || this.formatText)
        } else {
          this.inputValue.end = ''
        }
      } else {
        if (value) {
          this.inputValue.start = formatDate.formatDate(value, this.format || this.formatText)
        } else {
          this.inputValue.start = ''
        }
      }
    },
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
            day: Number(day.day),
            date: day.date,
            stamp: day.stamp
          })
        }
        days.push(week)
      }
      return days
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
    toPreMonth () {
      this.table.year = this.table.month === 1 ? this.table.year - 1 : this.table.year
      this.table.month = this.table.month === 1 ? 12 : this.table.month - 1
      this.table.tbody = this.createTable(this.table.year, this.table.month)
      if (this.range) this.table.nextTbody = this.createTable(this.nextYear, this.nextMonth)
    },
    toNextMonth () {
      this.table.year = this.table.month === 12 ? this.table.year + 1 : this.table.year
      this.table.month = this.table.month === 12 ? 1 : this.table.month + 1
      this.table.tbody = this.createTable(this.table.year, this.table.month)
      if (this.range) this.table.nextTbody = this.createTable(this.nextYear, this.nextMonth)
    },
    dateEvent (item, disabled) {
      if (disabled) return
      this.touchNum += 1
      if (this.range) {
        if (this.touchNum === 1) {
          this.startSelect = item.stamp
          this.endSelect = 0
        } else if (this.touchNum === 2) {
          this.endSelect = item.stamp
          this.emit()
          this.coverEvent()
        }
      } else {
        this.startSelect = item.stamp
        this.emit()
        this.coverEvent()
      }
    },
    tdMouseover (item) {
      if (!this.range) return
      if (!this.touchNum) return
      this.endSelect = item.stamp
    },
    tdMouseleave () {
      if (!this.range) return
      if (this.touchNum === 0 || this.touchNum === 2) return
      this.endSelect = 0
    },
    mouseover (e) {
      this.hover = true
    },
    mouseleave (e) {
      this.hover = false
    },
    rightIconEvent (e) {
      e.stopPropagation()
      this.startSelect = 0
      this.endSelect = 0
      this.emit()
    },
    selectEvent () {
      if (this.disabled) return
      this.visible = true
      this.touchNum = 0
    },
    coverEvent () {
      this.visible = false
    },
    emit () {
      if (this.range) {
        let min = Math.min(this.startSelect, this.endSelect)
        let max = Math.max(this.startSelect, this.endSelect)
        let data = {
          start: this.format ? (min ? formatDate.formatDate(min, this.format) : '') : (min ? formatDate.getCST(min) : ''),
          end: this.format ? (max ? formatDate.formatDate(max, this.format) : '') : (max ? formatDate.getCST(max) : '')
        }
        this.$emit('input', data)
        this.$emit('change', data)
      } else {
        let min = this.startSelect
        let data = this.format ? (min ? formatDate.formatDate(min, this.format) : '') : (min ? formatDate.getCST(min) : '')
        this.$emit('input', data)
        this.$emit('change', data)
      }
    }
  }
}
</script>
