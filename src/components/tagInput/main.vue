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
      ref="input"
      v-model="innerValue"
      :placeholder="tags.length ? '' : placeholder"
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
    maxSize: {
      type: Number,
      default: 10
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
      this.$refs.input.focus()
    },
    keydownEvent (e) {
      if (e.keyCode === 8) {
        this.backSpace && !this.innerValue && this.backspace()
      } else if (e.keyCode === 13) {
        this.add()
      }
    },
    add () {
      if (!this.innerValue) return
      if (this.tags.length >= this.maxSize) {
        this.$emit('maxSize', this.tags.length)
      }
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
