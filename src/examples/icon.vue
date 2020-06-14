<template>
  <div class="page">
    <div class="line">
      <xin-label>xinUI Icon 集合</xin-label>
    </div>
    <div class="line">
      <div
        class="area"
        v-for="(item, index) in list"
        :key="index"
        :data-clipboard-text="item.name"
        @click="copy()"
      >
        <xin-icon class="icon" :name="item.name"/>
        <div class="name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import iconList from './iconfont-list'
export default {
  components: {
  },
  data () {
    return {
      list: iconList
    }
  },
  mounted () {
  },
  methods: {
    copy () {
      this.$message.success('复制成功')
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
  cursor: pointer;
  .icon {
    width: 70px;
    height: 70px;
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
  }
  &:hover {
    border: 1px solid #aaa;
    .icon {
      font-size: 40px;
    }
  }
}
</style>
