<template>
  <div :class="['xin-date-picker', {
    'disabled': disabled,
    'range': range
  }]">
    <div @click="selectEvent()" @mouseover="mouseover($event)" @mouseleave="mouseleave($event)">
      <div class="xin-date-picker-icon icon-left" v-if="icon">
        <xin-icon class="icon" :name="icon"/>
      </div>
      <div class="xin-date-picker-icon icon-right" v-if="clearable && hover && (inputValue.startText || inputValue.endText)">
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
          <div :class="['input-text', {'placeholder': !inputValue.startText}]">{{inputValue.startText || (range ? startPlaceholder : placeholder)}}</div>
          <template v-if="range">
            <div class="space">至</div>
            <div :class="['input-text', {'placeholder': !inputValue.endText}]">{{inputValue.endText || endPlaceholder}}</div>
          </template>
      </div>
    </div>
    <div
      class="xin-date-picker-cover"
      v-show="visible"
      @click.stop="coverEvent()"
    ></div>
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
                        'selected': (startSelect.year === item.year && startSelect.month === item.month && startSelect.day === item.day) || (endSelect.year === item.year && endSelect.month === item.month && endSelect.day === item.day)
                      }]"
                      @click="dateEvent(item, item.month !== table.month)"
                    >{{item.day}}</div>
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
              <tbody class="tbody">
                <tr v-for="(line, lineIndex) in table.nextTbody" :key="lineIndex" class="tr">
                  <td
                    :class="['td', {
                    }]"
                    v-for="(item, index) in line"
                    :key="index"
                  >
                    <div
                      :class="['day', {
                        'pre-month-day': nextMonth === 1 ? item.month  === 12 : item.month === nextMonth - 1,
                        'current-month-day': item.month === nextMonth,
                        'next-month-day': nextMonth === 12 ? item.month  === 1 : item.month === nextMonth + 1,
                        'disabled': item.month !== nextMonth,
                        'today': today.month === item.month && today.day === item.day,
                        'selected': (startSelect.year === item.year && startSelect.month === item.month && startSelect.day === item.day) || (endSelect.year === item.year && endSelect.month === item.month && endSelect.day === item.day)
                      }]"
                      @click="dateEvent(item, item.month !== nextMonth)"
                    >{{item.day}}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
    }
  },
  data () {
    return {
      visible: false,
      hover: false,
      inputValue: {
        start: null,
        startText: '',
        end: null,
        endText: ''
      },
      table: {
        year: null,
        month: null,
        thead: ['日', '一', '二', '三', '四', '五', '六'],
        tbody: [],
        nextTbody: []
      },
      startSelect: {
        year: null,
        month: null,
        day: null
      },
      endSelect: {
        year: null,
        month: null,
        day: null
      },
      today: {
        year: null,
        month: null,
        day: null
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
    },
  },
  watch: {
    value (n, o) {
      this.init(n)
    },
    'inputValue.start' (n) {
      if (n) {
        let info = formatDate.formatDateTime(n)
        this.inputValue.startText = `${info.year}-${info.month}-${info.day}`
        this.startSelect = {
          year: Number(info.year),
          month: Number(info.month),
          day: Number(info.day)
        }
      } else {
        this.inputValue.startText = ''
        this.startSelect = {
          year: null,
          month: null,
          day: null
        }
      }
    },
    'inputValue.end' (n) {
      if (n) {
        let info = formatDate.formatDateTime(n)
        this.inputValue.endText = `${info.year}-${info.month}-${info.day}`
        this.endSelect = {
          year: Number(info.year),
          month: Number(info.month),
          day: Number(info.day)
        }
      } else {
        this.inputValue.endText = ''
        this.endSelect = {
          year: null,
          month: null,
          day: null
        }
      }
    }
  },
  created () {
    let day = formatDate.formatDateTime()
    this.today.year = Number(day.year)
    this.today.month = Number(day.month)
    this.today.day = Number(day.day)
    this.init(this.value)
  },
  methods: {
    init (value) {
      if (this.range) {
        this.inputValue.start = value.start ? formatDate.getCST(value.start) : null
        this.inputValue.end = value.end ? formatDate.getCST(value.end) : null
        let startSelect = formatDate.formatDateTime(this.inputValue.start)
        this.table.year = this.inputValue.start ? Number(startSelect.year) : this.today.year
        this.table.month = this.inputValue.start ? Number(startSelect.month) : this.today.month
        this.table.tbody = this.createTable(this.table.year, this.table.month)
        this.table.nextTbody = this.createTable(this.nextYear, this.nextMonth)
      } else {
        this.inputValue.start = value ? formatDate.getCST(value) : null
        let startSelect = formatDate.formatDateTime(this.inputValue.start)
        this.table.year = this.inputValue.start ? Number(startSelect.year) : this.today.year
        this.table.month = this.inputValue.start ? Number(startSelect.month) : this.today.month
        this.table.tbody = this.createTable(this.table.year, this.table.month)
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
            day: Number(day.day)
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
          this.inputValue.start = `${item.year}-${item.month}-${item.day}`
          this.inputValue.end = null
        } else if (this.touchNum === 2) {
          this.inputValue.end = `${item.year}-${item.month}-${item.day}`
          this.coverEvent()
        }
      } else {
        if (item.month === this.table.month) {
          this.emit(`${item.year}-${item.month}-${item.day}`)
          this.coverEvent()
        }
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
      this.touchNum = 0
    },
    coverEvent () {
      this.visible = false
    },
    emit (date) {
      if (this.range) {

      } else {
        if (this.format) {
          this.$emit('input', date ? formatDate.formatDate(date, this.format) : '')
        } else {
          this.$emit('input', date ? formatDate.getCST(date) : '')
        }
      }
    }
  }
}
</script>
