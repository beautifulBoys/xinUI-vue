<template>
  <div class="example-page">
    <div class="line">
      <xin-label width="100">基础及间隔</xin-label>
      <xin-tree :list="list" itemValue="id" itemLabel="name"></xin-tree>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      list: [
        {
          id: 1,
          name: '辽宁省',
          childrens: [
            {
              id: 2,
              name: '沈阳市',
              childrens: [
                {
                  id: 3,
                  name: '浑南区',
                  childrens: [
                    {
                      id: 4,
                      name: '站东街道'
                    },
                    {
                      id: 5,
                      name: '白塔街道'
                    }
                  ]
                },
                {
                  id: 6,
                  name: '皇姑区'
                },
                {
                  id: 7,
                  name: '铁西经济技术开发区'
                }
              ]
            },
            {
              id: 8,
              name: '大连市',
              childrens: [
                {
                  id: 9,
                  name: '金州区',
                  childrens: [
                    {
                      id: 10,
                      name: '金州一街道'
                    },
                    {
                      id: 11,
                      name: '金州二街道'
                    }
                  ]
                },
                {
                  id: 12,
                  name: '甘井子区'
                }
              ]
            }
          ]
        },
        {
          id: 13,
          name: '甘肃省',
          childrens: [
            {
              id: 14,
              name: '兰州市',
              childrens: [
                {
                  id: 15,
                  name: '七里河区'
                },
                {
                  id: 16,
                  name: '城关区'
                }
              ]
            },
            {
              id: 17,
              name: '武威市',
              childrens: [
                {
                  id: 18,
                  name: '凉州区'
                },
                {
                  id: 19,
                  name: '古浪县'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    closeEvent (val) {
      this.$message.info('点击了关闭按钮: ' + val)
    }
  }
}
</script>
