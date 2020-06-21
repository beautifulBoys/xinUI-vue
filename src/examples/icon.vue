<template>
  <div class="page-icon">
    <div class="line">
      <xin-label>xinUI Icon 集合</xin-label>
    </div>
    <div class="line">
      <div
        :class="['area', {copy: copyStatus}]"
        v-for="(item, index) in list"
        :key="index"
        ref="image"
        :data-clipboard-text="getTagString(item.font_class)"
        @click="copyStatus = true"
        @mouseout="copyStatus = false"
      >
        <div class="cover">{{copyStatus ? '已复制' : '点击复制标签'}}</div>
        <xin-icon class="icon" :name="item.font_class"/>
        <div class="name">{{item.font_class}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
import iconJson from '../styles/xin-iconfont/iconfont.json'
export default {
  components: {
  },
  data () {
    return {
      list: iconJson.glyphs,
      copyStatus: false
    }
  },
  mounted () {
    this.$refs.image.forEach(item => {
      new Clipboard(item)
    })
  },
  methods: {
    getTagString (name) {
      return `<xin-icon name="${name}"/>`
    }
  }
}
</script>
