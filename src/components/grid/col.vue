<template>
    <div
      :class="['xin-col', 'xin-col-span-' + span, {
      }]"
      :style="{
        'padding': '0 ' + gutter + 'px',
        'margin-left': offset ? (offset / 24 * 100) + '%' : 0
      }"
    >
      <div :class="className">
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'xinCol',
  components: {
  },
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    className: {
      type: String,
      default: 'xin-col-content'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    gutter () {
      let gutter = this.getParentGutter(this.$parent)
      return gutter / 2
    }
  },
  watch: {
  },
  mounted () {
    // console.log('')
    // window.lixin = this
  },
  methods: {
    getParentGutter (xin) {
      if (xin.gutter || xin.gutter === 0) {
        return xin.gutter
      } else {
        if (xin.$parent) {
          return this.getParentGutter(xin.$parent)
        } else {
          return 0
        }
      }
    },
    close () {
      this.visible = false
      this.$emit('close', this.value || this.message)
    }
  }
}
</script>
