<template>
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
</template>

<script>
export default {
  props: {
    table: Object,
    select: Object,
    range: Boolean,
    hover: Boolean,
    visible: Boolean
  },
  data () {
    return {
      table: {
        year: null,
        month: null,
        thead: ['日', '一', '二', '三', '四', '五', '六'],
        tbody: []
      },
    }
  },
  mounted () {
  },
  methods: {
    preMonth () {
      this.$parent.preMonth()
    },
    nextMonth () {
      this.$parent.nextMonth()
    },
    dateEvent (item) {
      this.$parent.dateEvent(item)
    }
  }
}
</script>
