<template>
  <div
    class="xin-textarea"
    v-if="textarea"
  >
    <textarea
      :type="type"
      v-model.trim="inputValue"
      :class="['xin-textarea-inner', {
        'xin-textarea-error': status === 'error' && !disabled,
        'xin-textarea-success': status === 'success' && !disabled,
        'xin-textarea-round': round
      }]"
      :style="{
        width: width.indexOf('px') > -1 ? width : width + 'px'
      }"
      :disabled="disabled"
      :placeholder="placeholder"
      v-bind="$attrs"
      @keyup="$emit('keyup', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @change="$emit('change', $event.target.value)"
    >
    </textarea>
  </div>
  <div
    :class="['xin-input', disabled ? 'disabled' : 'visible']"
    v-else
  >
    <div class="xin-input-icon icon-left">
      <xin-icon class="icon" v-if="leftIcon" :name="leftIcon"/>
    </div>
    <div class="xin-input-icon icon-right">
      <xin-icon class="icon" v-if="rightIcon" :name="rightIcon" @click="rightIconEvent()"/>
    </div>
    <input
      :type="type"
      v-model.trim="inputValue"
      :class="['xin-input-inner', {
        'xin-input-error': status === 'error' && !disabled,
        'xin-input-success': status === 'success' && !disabled,
        'xin-input-round': round,
        'has-left-icon': leftIcon,
        'has-right-icon': rightIcon
      }]"
      :style="{
        width: width.indexOf('px') > -1 ? width : width + 'px'
      }"
      :disabled="disabled"
      :placeholder="placeholder"
      v-bind="$attrs"
      @keyup="$emit('keyup', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @change="$emit('change', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'xinInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    status: { // success error
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    leftIcon: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
    maxLength: {
      type: Number,
      default: 0
    },
    rule: { // 整数（int），小数（float），正数（positive），非中文（noChinese），正则表达式（regexp）
      type: [String, RegExp],
      default: ''
    },
    fixed: {
      type: Number,
      default: 2
    },
    max: {
      type: Number,
      default: 999999999999
    },
    textarea: {
      type: Boolean,
      default: false
    },
    // 宽度
    width: {
      type: String,
      default: 'auto'
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  components: {
  },
  data () {
    return {
      inputValue: this.value
    }
  },
  watch: {
    value (n, o) {
      this.inputValue = n
    },
    inputValue (n, o) {
      let val = n
      if (this.maxLength && this.inputValue.length > this.maxLength) {
        val = o
      }
      if (this.rule === 'int') {
        if (!(/^-?[0-9]*$/g.test(val))) {
          val = o
        }
      }
      if (this.rule === 'positive') {
        if (!(/^[0-9.]*$/g.test(val))) {
          val = o
        }
      }
      if (this.rule === 'float') {
        if (!(/^-?[0-9.]*$/g.test(val))) {
          val = o
        }
      }
      if (this.rule === 'noChinese') {
        if (/[\u4e00-\u9fa5]/g.test(val)) {
          val = o
        }
      }
      if (this.fixed && (this.rule === 'float' || this.rule === 'positive')) {
        let float = String(val).split('.')[1]
        if (float && float.length > this.fixed) {
          val = o
        }
      }
      if (this.max && (this.rule === 'int' || this.rule === 'float' || this.rule === 'positive')) {
        if (Number(val) > this.max) {
          val = o
        }
      }
      if (typeof this.rule === 'object' && val) {
        if (!(this.rule.test(val))) {
          val = o
        }
        console.log(val)
      }
      this.inputValue = val
      this.$emit('input', this.inputValue)
    }
  },
  mounted () {
  },
  methods: {
    rightIconEvent () {
      this.$emit('right-icon-event')
    }
  }
}
</script>
