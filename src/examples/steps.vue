<template>
  <div class="page">
    <div class="line">
      <xin-label width="60">默认展示</xin-label>
      <xin-steps :list="list" v-model="step1"></xin-steps>
    </div>
    <div class="line">
      <xin-button fill color="success" @click="step1 > 1 && step1--">后退一步</xin-button>
      <xin-button fill color="active" @click="step1 < list.length + 1 && step1++">前进一步</xin-button>
    </div>
    <div class="line">
      <xin-label width="60">全面</xin-label>
      <xin-steps :list="list" v-model="step2" :status="errStatus2"></xin-steps>
    </div>
    <div class="line">
      <xin-button fill color="success" @click="step2 > 1 && step2--">后退一步</xin-button>
      <xin-button fill color="active" @click="step2 < list.length + 1 && step2++">前进一步</xin-button>
      <xin-button fill color="error" @click="errStatus2 ? errStatus2 = '' : errStatus2 = 'error'">失败</xin-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      stepsOptions: {},
      list: [
        {
          title: '上门取件',
          activeTitle: '取件中',
          desc: '【顺丰速运】，市内五区，免费上门取件',
          activeDesc: '快件员【黄某某】正在赶来的路上',
          successDesc: '快件员【黄某某】已取件成功',
          errorDesc: '快件员【黄某某】取件途中身体不适，将于明天联系您再次取件'
        },
        {
          title: '装车',
          activeTitle: '装车中',
          desc: '快件将在浑南区集散中心装车发出',
          activeDesc: '您的快件正在装车，即将起运',
          successDesc: '快件已装车发出，车牌号【辽A·2T4G2】',
          errorDesc: '快件装车时损坏，请联系客服协商理赔'
        },
        {
          title: '运输',
          activeTitle: '运输中',
          desc: '顺丰陆运公司负责长途运输',
          activeDesc: '快件正在城市间飞奔，请耐心等待',
          successDesc: '快件已到达目的地城市',
          errorDesc: '运输途中车辆故障，正在协调其他车辆'
        },
        {
          title: '分拣',
          activeTitle: '分拣中',
          desc: '快件将在蜀山区集散中心进行分拣',
          activeDesc: '快件已到达目的地城市，正在分拣',
          successDesc: '快件分拣完毕，已运往白塔河营业二部',
          errorDesc: '快件运输中损坏，请联系客服协商理赔'
        },
        {
          title: '派送',
          activeTitle: '派送中',
          desc: '快件即由黄某某派送',
          activeDesc: '快件即将送达您的手中，请注意接听电话',
          successDesc: '快件已送达，本次任务圆满完成，【顺丰速运】期待与您再次合作',
          errorDesc: '快件派送时被偷，请联系客服协商理赔'
        }
      ],
      step1: 1,
      step2: 1,
      errStatus2: ''
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
