<template>
  <div class="page">
    <div class="line">
      <xin-label>表格展示</xin-label>
    </div>
    <div class="line">
      <xin-table
        :thead="thead"
        :tbody="tbody"
        itemValue="id"
        tableIndex
        tableCheckbox
        tableRadio
      >
        <template slot-scope="props">
          <td>{{props.item.text}}</td>
          <td>{{props.item.text}}</td>
          <td>{{props.item.text}}</td>
          <td>{{props.item.text}}</td>
          <td>{{props.item.text}}</td>
          <td>{{props.item.text}}</td>
          <td>
            <!-- <xin-button color="info" fill>编辑</xin-button>
            <xin-button color="success" fill>新增</xin-button> -->
            <xin-button color="error" fill>删除</xin-button>
          </td>
        </template>
      </xin-table>
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
      tbody: [
        {id: 1, text: '空军'},
        {id: 2, text: '陆军'},
        {id: 3, text: '海军'},
        {id: 4, text: '导弹军'},
        {id: 5, text: '后勤军'},
        {id: 6, text: '指挥军'}
      ]
    }
  },
  mounted () {
  },
  methods: {
    changeEvent (v) {
      console.log('change事件', v)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
