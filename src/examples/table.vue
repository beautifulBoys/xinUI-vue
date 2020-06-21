<template>
  <div class="page">
    <div class="line">
      <xin-label>表格展示（radio 值：{{radioValue}}）；（checkbox 值：{{checkboxValue}}）</xin-label>
      <xin-table
        :thead="thead"
        :tbody="tbody"
        itemValue="id"
        tableIndex
        tableCheckbox
        @checkbox-change="checkboxChange"
        tableRadio
        @radio-change="radioChange"
      >
        <template slot-scope="props">
          <td>{{props.item.text}}</td>
          <td>{{props.item.text}}</td>
          <td>{{props.item.text}}</td>
          <td>{{props.item.text}}</td>
          <td>{{props.item.text}}</td>
          <td>{{props.item.text}}</td>
          <td>
            <!-- <xin-button color="info" fill>编辑</xin-button> -->
            <xin-button color="success" inline>新增</xin-button>
            <xin-button color="error" inline>删除</xin-button>
          </td>
        </template>
      </xin-table>
    </div>
    <div class="line">
      <xin-label>空表格</xin-label>
      <xin-table
        :thead="thead"
        :tbody="[]"
      >
        <template slot-scope="props">
          <td>{{props.item.text}}</td>
          <td>{{props.item.text}}</td>
          <td>{{props.item.text}}</td>
          <td>{{props.item.text}}</td>
          <td>{{props.item.text}}</td>
          <td>{{props.item.text}}</td>
          <td>
            <xin-button color="error" fill>删除</xin-button>
          </td>
        </template>
      </xin-table>
    </div>
    <div class="line">
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
      ],
      radioValue: '',
      checkboxValue: []
    }
  },
  mounted () {
  },
  methods: {
    checkboxChange (val, list) {
      this.checkboxValue = val
      console.log('checkbox chage 事件: ', val, list)
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
