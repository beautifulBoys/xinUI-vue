<template>
  <div class="example-page example-dialog">
    <div class="line">
      <xin-button fill @click="dialog1.show = true">基础展示</xin-button>
      <xin-button fill @click="dialog2.show = true">表单展示</xin-button>
      <xin-button fill @click="dialog3.show = true">自定义展示</xin-button>
    </div>
    <xin-dialog title="删除确认" :visible.sync="dialog1.show">
      您确认要删除当前选项吗？
    </xin-dialog>
    <xin-dialog title="信息登记" :visible.sync="dialog2.show">
      <div class="content">
        <div class="line">
          <xin-label>姓名：</xin-label>
          <xin-input></xin-input>
        </div>
        <div class="line">
          <xin-label>性别：</xin-label>
          <xin-input></xin-input>
        </div>
      </div>
    </xin-dialog>
    <xin-dialog title="自定义" :visible.sync="dialog3.show" width="800px">
      <div slot="header" class="header">
        <xin-label>请选择城市：</xin-label>
        <xin-select :list="list" itemValue="id" itemLabel="name" v-model="val"></xin-select>
        <xin-icon class="close" name="ashbin-fill" @click.native="dialog3.show = false" />
      </div>
      <xin-table
        :thead="['学校', '学院', '年级', '班级', '小组', '姓名']"
        :tbody="tbody"
      >
        <template slot-scope="props">
          <td>{{props.item.text}}</td>
          <td>{{props.item.text}}</td>
          <td>{{props.item.text}}</td>
          <td>{{props.item.text}}</td>
          <td>{{props.item.text}}</td>
          <td>{{props.item.text}}</td>
        </template>
      </xin-table>
      <div slot="footer" class="footer">
        <xin-button color="success" fill>新增</xin-button>
        <xin-button color="info" fill>编辑</xin-button>
        <xin-button color="error" fill>删除</xin-button>
        <xin-button color="warning" fill>取消</xin-button>
      </div>
    </xin-dialog>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      dialog1: {
        show: false
      },
      dialog2: {
        show: false
      },
      dialog3: {
        show: false
      },
      tbody: [
        {id: 1, text: '空军'},
        {id: 2, text: '陆军'},
        {id: 3, text: '海军'},
        {id: 4, text: '导弹军'},
        {id: 5, text: '后勤军'},
        {id: 6, text: '指挥军'}
      ],
      list: [
        { id: 1, name: '清华大学' },
        { id: 2, name: '北京大学' },
        { id: 3, name: '复旦大学' },
        { id: 4, name: '浙江大学' },
        { id: 5, name: '西安大学' },
        { id: 6, name: '东北大学' }
      ],
      val: 1,
    }
  },
  mounted () {
  },
  methods: {
    tabChange (val) {
      this.active = val
      console.log('tabChange 事件: ', val)
    },
    tabChange1 (val) {
      this.active1 = val
      console.log('tabChange 事件: ', val)
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
