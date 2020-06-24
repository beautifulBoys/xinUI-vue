<template>
  <div
    :class="['xin-tag-input', {
      'xin-default': color === 'default'
    }]"
    :style="{
      'width': width.indexOf('px') > -1 ? width : width + 'px'
    }"
  >
    <xin-tag
      small
      :closable="closable"
      v-for="(item, index) in tags"
      :key="index"
      @close="closeTagEvent(index)"
      :message="item"
    ></xin-tag>
    <input
      class="tag-input"
      v-model="innerValue"
      @keydown="keydownEvent($event)"
      @blur="blurEvent($event)"
    />
  </div>
</template>

<script>
export default {
  name: 'xinTagInput',
  components: {
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    width: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'default'
    },
    closable: {
      type: Boolean,
      default: true
    },
    backSpace: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请输入'
    }
  },
  data () {
    return {
      innerValue: '',
      tags: this.value
    }
  },
  computed: {
  },
  watch: {
    value (n) {
      this.tags = n
    }
  },
  created () {
  },
  methods: {
    closeTagEvent (index) {
      let arr = []
      this.tags.forEach((message, idx) => {
        if (index !== idx) {
          arr.push(message)
        }
      })
      this.$emit('input', arr)
    },
    keydownEvent (e) {
      if (e.keyCode === 8) {
        this.backSpace && !this.innerValue && this.backspace()
      } else if (e.keyCode === 13) {
        this.innerValue && this.add()
      }
    },
    add () {
      this.$emit('input', [...this.tags, this.innerValue])
      this.innerValue = ''
    },
    backspace () {
      if (this.tags.length) this.closeTagEvent(this.tags.length - 1)
    },
    blurEvent (e) {
      this.add()
    }
  }
}
</script>
