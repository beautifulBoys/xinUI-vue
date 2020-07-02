<template>
  <div class="example-page example-viewer">
    <div class="line">
      <img
        v-for="(item, index) in list"
        :key="index"
        class="img"
        :src="item.url"
        @click="viewer(index)"
      />
    </div>
    <!-- <xin-viewer :images="images"></xin-viewer> -->
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      list: [
        {name: '', url: '//weiliicimg1.pstatp.com/weili/om/195469175792468004.webp'},
        {name: '', url: '//icweiliimg1.pstatp.com/weili/om/656483973141626885.webp'},
        {name: '', url: '//weiliicimg1.pstatp.com/weili/om/656483964551692300.webp'},
        {name: '', url: '//weiliicimg9.pstatp.com/weili/om/668387878730203163.webp'},
        {name: '', url: '//icweiliimg6.pstatp.com/weili/om/912709318147047592.webp'},
        {name: '', url: '//icweiliimg1.pstatp.com/weili/om/201561269073346566.webp'}
      ]
    }
  },
  mounted () {
  },
  methods: {
    viewer (index) {
      this.$viewer({ list: this.list, index: index })
    }
  }
}
</script>
