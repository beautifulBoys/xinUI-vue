var format = {
  // 获取年月日时分秒
  formatDateTime (date) {
    let cst = this.getCST(date)
    var num = [31, this.is_leap(cst.getFullYear()) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return {
      year: cst.getFullYear().toString(),
      month: this.paddNum(cst.getMonth() + 1),
      day: this.paddNum(cst.getDate()),
      hour: this.paddNum(cst.getHours()).toString(),
      minute: this.paddNum(cst.getMinutes()),
      second: this.paddNum(cst.getSeconds()).toString(),
      monthDays: num[cst.getMonth()],
      week: cst.getDay(),
      stamp: cst.getTime()
    }
  },
  // 格式化时间戳
  formatStamp (date) {
    let d = this.formatDateTime(date)
    return {
      stamp: d.stamp,
      dateStamp: this.formatDateTime(`${d.year}-${d.month}-${d.day}`).stamp
    }
  },
  add0 (n) {
    n = (n < 0 ? 0 : n)
    return (n < 10 ? '0' : '') + n
  },
  // 是否是闰年
  is_leap (year) {
    if (((year % 4) === 0) && ((year % 100) !== 0) || ((year % 400) === 0)) return 1
    else return 0
  },
  // 前面补零
  paddNum (num) {
    num += ''
    return num.replace(/^(\d)$/, '0$1')
  },
  // 格式化CST日期的字串
  formatCSTDate (strDate, format) {
    return this.formatDate(new Date(strDate), format)
  },
  // 格式化日期,
  formatDate (date, format) {
    date = this.getCST(date)
    // 指定格式字符
    var cfg = {
      yyyy: date.getFullYear(), // 年 : 4位
      yy: date.getFullYear().toString().substring(2), // 年 : 2位
      M: date.getMonth() + 1, // 月 : 如果1位的时候不补0
      MM: this.paddNum(date.getMonth() + 1), // 月 : 如果1位的时候补0
      d: date.getDate(), // 日 : 如果1位的时候不补0
      dd: this.paddNum(date.getDate()), // 日 : 如果1位的时候补0
      hh: date.getHours(), // 时
      mm: this.paddNum(date.getMinutes()), // 分
      ss: date.getSeconds() // 秒
    }
    format || (format = 'yyyy-MM-dd hh:mm:ss')
    return format.replace(/([a-z])(\1)*/ig, (m) => {
      return cfg[m]
    })
  },
  formatMoney (val) { // 格式化金额
    return Number(val).toFixed(2)
  },
  // 获取时间日期对象，兼容
  getCST (date) {
    if (!date) date = new Date()
    if (Object.prototype.toString.call(date) !== '[object Date]') {
      if (Object.prototype.toString.call(date) === '[object String]') {
        date = date.toString().replace(/-/g, '/')
      }
      date = new Date(date)
    }
    return date
  }
}
export default format
