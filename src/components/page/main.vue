<template>
  <div class="xin-page">
    <div class="xin-page-item">显示 {{info.start}} 到 {{info.end}} 条，共 {{pageInfo.total}} 条记录</div>
    <div class="xin-page-item">
      <xin-select
        :list="sizes"
        v-model="sizesValue"
        class="xin-page-select"
      ></xin-select>
    </div>
    <div class="xin-page-item padding cursor bg">{{firstText}}</div>
    <div class="xin-page-item padding cursor bg">上一页</div>
    <div
      :class="['xin-page-item', 'padding', 'bg', {
        'cursor': item.type === 'item'
      }]"
      v-for="(item, index) in renderList"
      :key="index"
    >
      <span v-if="item.type === 'left-ellipsis'">···</span>
      <span v-if="item.type === 'item'">{{item.text}}</span>
      <span v-if="item.type === 'right-ellipsis'">···</span>
    </div>
    <div class="xin-page-item padding cursor bg">下一页</div>
    <div class="xin-page-item padding cursor bg">{{lastText}}</div>
    <div class="xin-page-item">
      <xin-input
        class="xin-page-input"
        placeholder="跳转到"
      ></xin-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xinPage',
  components: {
  },
  props: {
    layout: { // info, sizes, first, prev, pages, next, last, jump
      type: Array,
      default: () => ['prev', 'pages', 'next']
    },
    pageInfo: {
      type: Object,
      default: {
        page: 1,
        total: 0,
        size: 10,
        align: 'center'
      }
    },
    sizes: {
      type: Array,
      default: () => [10, 20, 30, 40, 50]
    },
    count: {
      type: Number,
      default: 7
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
    }
  },
  data () {
    return {
      renderPageInfo: this.pageInfo,
      sizesValue: 10,
      renderList: [
        { page: 1, text: 1, type: 'num' }
      ],
      checkboxAllValue: false
    }
  },
  created () {
  },
  computed: {
    info () {
      return {
        start: (this.renderPageInfo.page - 1) * 10 + 1,
        end: this.renderPageInfo.page * 10
      }
    }
  },
  watch: {
    pageInfo (n) {
      this.renderPageInfo = n
    }
  },
  mounted () {
    this.createRenderListFunc()
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
    createRenderList (index1) {
      let list = this.createTwinList(index1, this.count, this.pageInfo.total)
      let arr = []
      list.forEach((item, index) => {
        arr.push({
          index: item,
          text: index + 1,
          type: item === -1 ? 'left-ellipsis' : item === 100000000 ? 'right-ellipsis' : 'item'
        })
      })
      return arr
    },
    createRenderListFunc (page, count) {
      this.renderList = this.createRenderList(13)
      console.log(this.renderList)
    },
    pageChange () {
    }
  }
}
</script>
