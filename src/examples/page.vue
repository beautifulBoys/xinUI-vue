<template>
  <div class="page">
    <div class="line">
      <xin-label>默认展示</xin-label>
      <xin-page
        :page="pageInfo.page"
        :size="pageInfo.size"
        :total="pageInfo.total"
        @page-change="pageChange"
      >
      </xin-page>
    </div>
    <div class="line">
      <xin-label>左中右展示</xin-label>
      <xin-page
        :page="pageInfo.page"
        :size="pageInfo.size"
        :total="pageInfo.total"
        align="left"
        @page-change="pageChange"
      >
      </xin-page>
      <xin-page
        :page="pageInfo.page"
        :size="pageInfo.size"
        :total="pageInfo.total"
        align="center"
        @page-change="pageChange"
      >
      </xin-page>
      <xin-page
        :page="pageInfo.page"
        :size="pageInfo.size"
        :total="pageInfo.total"
        align="right"
        @page-change="pageChange"
      >
      </xin-page>
    </div>
    <div class="line">
      <xin-label>完整展示</xin-label>
      <xin-page
        :page="pageInfo.page"
        :size="pageInfo.size"
        :total="pageInfo.total"
        :pagerCount="9"
        firstText="第一页"
        lastText="最后一页"
        prevText="上页"
        nextText="下页"
        :layout="['info', 'sizes', 'first', 'prev', 'pages', 'next', 'last', 'jump']"
        @page-change="pageChange"
        @size-change="sizeChange"
      >
      </xin-page>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      thead: [
        '学校',
        '学院',
        '年级',
        '班级',
        '小组',
        '姓名',
        '操作'
      ],
      pageInfo: {
        page: 1,
        size: 10,
        total: 111
      },
      tbody: [
        {id: 1, text: '空军'},
        {id: 2, text: '陆军'},
        {id: 3, text: '海军'},
        {id: 4, text: '导弹军'},
        {id: 5, text: '后勤军'},
        {id: 6, text: '指挥军'}
      ],
      radioValue: '',
      checkboxValue: []
    }
  },
  mounted () {
  },
  methods: {
    pageChange (val) {
      this.pageInfo.page = val
      console.log('pageChange 事件: ', val)
    },
    sizeChange (val) {
      this.pageInfo.size = val
      console.log('sizeChange 事件: ', val)
    },
    radioChange (val, item) {
      this.radioValue = val
      console.log('radio chage 事件: ', val, item)
    },
    changeEvent (v) {
      console.log('change事件', v)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
