<template>
  <div class="page">
    <div class="line">
      <xin-label>xinUI Icon 集合</xin-label>
    </div>
    <div class="line">
      <div
        :class="['area', {copy: copyStatus}]"
        v-for="(item, index) in list"
        :key="index"
        ref="image"
        :data-clipboard-text="getTagString(item.name)"
        @click="copyStatus = true"
        @mouseout="copyStatus = false"
      >
        <div class="cover">{{copyStatus ? '已复制' : '点击复制标签'}}</div>
        <xin-icon class="icon" :name="item.name"/>
        <div class="name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
import iconList from './iconfont-list'
export default {
  components: {
  },
  data () {
    return {
      list: iconList,
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

<style lang="scss" scoped>
@import "./index.scss";
.area {
  width: 100px;
  height: 100px;
  display: inline-block;
  box-sizing: border-box;
  margin: 10px;
  border: 1px dashed #ccc;
  border-radius: 5px;
  vertical-align: top;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &:hover {
    border: 1px solid $color-blue;
    .cover {
      left: 0;
      top: 0;
    }
    &.copy {
      border: 1px solid $color-green;
      .cover {
        color: $color-green;
      }
    }
  }
  .cover {
    position: absolute;
    top: -200%;
    left: -200%;
    width: 100%;
    height: 100%;
    background: #fff;
    color: $color-blue;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 12px;
  }
  .icon {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }
  .name {
    text-align: center;
    font-size: 12px;
    word-break: break-all;
    padding: 0 10px;
  }
}
</style>
