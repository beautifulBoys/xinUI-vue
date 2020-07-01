<template>
  <div :class="['xin-page', {
    'xin-page-align-left': align === 'left',
    'xin-page-align-center': align === 'center',
    'xin-page-align-right': align === 'right'
  }]">
    <div class="xin-page-item" v-if="layout.indexOf('info') > -1">
      显示 {{info.start}} 到 {{info.end}} 条，共 {{totalValue}} 条记录
    </div>
    <div class="xin-page-item" v-if="layout.indexOf('sizes') > -1">
      <xin-select
        width="70"
        :list="sizeList"
        itemValue="id"
        itemLabel="name"
        v-model="sizeValue"
        @change="sizeChange"
        class="xin-page-select"
      ></xin-select>
    </div>
    <div
      :class="['xin-page-item', 'padding', 'bg', {
        'disabled': !hasPrev,
        'cursor': hasPrev
      }]"
      v-if="layout.indexOf('first') > -1"
      @click="first"
    >{{firstText}}</div>
    <div
      :class="['xin-page-item', 'padding', 'bg', {
        'disabled': !hasPrev,
        'cursor': hasPrev
      }]"
      v-if="layout.indexOf('prev') > -1"
      @click="prev(pageValue)"
    >{{prevText}}</div>
    <template v-if="layout.indexOf('pages') > -1">
      <div
        :class="['xin-page-item', 'padding', 'width', 'bg', {
          'cursor': item.type === 'item',
          'active': pageValue === item.text
        }]"
        v-for="(item, index) in renderList"
        :key="index"
        @click="itemEvent(item)"
      >
        <span v-if="item.type === 'left-ellipsis'">···</span>
        <span v-if="item.type === 'item'">{{item.text}}</span>
        <span v-if="item.type === 'right-ellipsis'">···</span>
      </div>
    </template>
    <div
      :class="['xin-page-item', 'padding', 'bg', {
        'disabled': !hasNext,
        'cursor': hasNext
      }]"
      v-if="layout.indexOf('next') > -1"
      @click="next(pageValue)"
    >{{nextText}}</div>
    <div
      :class="['xin-page-item', 'padding', 'bg', {
        'disabled': !hasNext,
        'cursor': hasNext
      }]"
      v-if="layout.indexOf('last') > -1"
      @click="last"
    >{{lastText}}</div>
    <div class="xin-page-item" v-if="layout.indexOf('jump') > -1">
      <xin-input
        class="xin-page-input"
        :rule="/^[0-9]*$/g"
        v-model="jumpValue"
        @keyup.enter="jump()"
        placeholder="跳转到"
        width="70"
        center
      ></xin-input>
    </div>
  </div>
</template>

<script>
import Select from '../select'
import Input from '../input'
export default {
  name: 'xinPage',
  components: {
    'xin-select': Select,
    'xin-input': Input
  },
  props: {
    layout: { // info, sizes, first, prev, pages, next, last, jump
      type: Array,
      default: () => ['prev', 'pages', 'next']
    },
    page: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    },
    pagerCount: {
      type: Number,
      default: 7
    },
    sizes: {
      type: Array,
      default: () => [10, 20, 30, 40, 50]
    },
    align: { // left, center, right
      type: String,
      default: 'center'
    },
    firstText: {
      type: String,
      default: '首页'
    },
    lastText: {
      type: String,
      default: '尾页'
    },
    prevText: {
      type: String,
      default: '上一页'
    },
    nextText: {
      type: String,
      default: '下一页'
    }
  },
  data () {
    return {
      sizeValue: this.size,
      pageValue: this.page,
      totalValue: this.total,
      jumpValue: '',
      renderList: []
    }
  },
  computed: {
    info () {
      return {
        start: (this.pageValue - 1) * 10 + 1,
        end: this.pageValue * 10
      }
    },
    sizeList () {
      let arr = []
      this.sizes.forEach(item => {
        arr.push({
          id: item,
          name: item
        })
      })
      return arr
    },
    pageCount () {
      return Math.ceil(this.totalValue / this.sizeValue)
    },
    hasPrev () {
      return this.pageValue > 1
    },
    hasNext () {
      return this.pageValue < this.pageCount
    }
  },
  watch: {
    page (n) {
      this.pageValue = n
      this.createRenderList(n - 1)
    },
    total (n) {
      this.totalValue = n
      this.pageChange(1)
      this.createRenderList(this.pageValue - 1)
    },
    size (n) {
      this.sizeValue = n
      this.pageChange(1)
      this.createRenderList(this.pageValue - 1)
    }
  },
  mounted () {
    this.createRenderList(this.pageValue - 1)
  },
  methods: {
    createTwinList (index, maxCount, count) {
      function sort (arr) {
        return arr.sort((a, b) => (a - b))
      }
      let arr = []
      let dis = (maxCount - 1) / 2
      let len = (maxCount + 1) / 2
      if (count < maxCount) {
        for (let i = 0; i < count; i++) {
          arr.push(i)
        }
      } else {
        let middle = null
        if (index < dis) {
          middle = dis
        } else if (count - 1 - index < dis) {
          middle = count - 1 - dis
        } else {
          middle = index
        }
        arr.push(middle)
        for (let i = 1; i < len; i++) {
          arr.push(middle - i, middle + i)
        }
        arr = sort(arr)
        if (index < dis) {
          arr[maxCount - 1] = 100000000
        } else if (count - 1 - index < dis) {
          arr[0] = -1
        } else {
          arr[0] = -1
          arr[maxCount - 1] = 100000000
        }
      }
      return arr
    },
    createRenderList (page) {
      let list = this.createTwinList(page, this.pagerCount, this.pageCount)
      let arr = []
      list.forEach((item, index) => {
        arr.push({
          text: item + 1,
          type: item === -1 ? 'left-ellipsis' : item === 100000000 ? 'right-ellipsis' : 'item'
        })
      })
      this.renderList = arr
      return arr
    },
    first () {
      if (this.pageValue === 1) return
      this.pageChange(1)
    },
    last () {
      if (this.pageValue === this.pageCount) return
      this.pageChange(this.pageCount)
    },
    prev (page) {
      if (!this.hasPrev) return
      this.pageChange(page - 1)
    },
    next (page) {
      if (!this.hasNext) return
      this.pageChange(page + 1)
    },
    jump () {
      console.log('回车了')
      if (!this.jumpValue) return
      let jumpValue = Number(this.jumpValue)
      if (jumpValue < 1) {
        this.pageChange(1)
      } else if (jumpValue >= 1 && jumpValue <= this.pageCount) {
        this.pageChange(jumpValue)
      } else if (jumpValue > this.pageCount) {
        this.pageChange(this.pageCount)
      } else {
        console.error('xin-ui ERROR! 请联系开发者检查')
      }
      this.jumpValue = ''
    },
    itemEvent (pageInfo) {
      if (pageInfo.type !== 'item') return
      this.pageChange(pageInfo.text)
    },
    sizeChange (size) {
      this.$emit('size-change', size)
    },
    pageChange (page) {
      this.$emit('page-change', page)
    }
  }
}
</script>
