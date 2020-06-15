<template>
  <div class="xin-select" @click="selectEvent()">
    <xin-input
      rightIcon="iconGroup-6"
    ></xin-input>
    <div
      class="xin-select-cover"
      v-show="visible"
      @click.stop="coverEvent()"
    ></div>
    <div class="xin-select-options" v-show="visible">
      <ul class="xin-options-ul">
        <li
          :class="['xin-option', {
            'selected': multiple ? inputValue.indexOf(item[itemValue]) : (inputValue === item[itemValue])
          }]"
          v-for="(item, index) in list"
          :key="index"
          @click.stop="optionEvent(item)"
        >{{item[itemLabel]}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xinSelect',
  components: {
  },
  props: {
    value: {
      type: [String, Number, Array],
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    },
    width: {
      type: String,
      default: 'auto'
    },
    itemValue: {
      type: String,
      default: ''
    },
    itemLabel: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: false,
      inputValue: this.value
    }
  },
  watch: {
    value (n, o) {
      this.inputValue = n
    }
  },
  created () {
    if (this.multiple && !Array.isArray(this.inputValue)) {
      if (this.inputValue) {
        this.$emit('input', [this.inputValue])
      } else {
        this.$emit('input', [])
      }
    }
  },
  methods: {
    selectEvent () {
      this.visible = true
    },
    coverEvent () {
      this.visible = false
    },
    optionEvent (item) {
      if (this.multiple) {
        this.$emit('input', [...this.inputValue, item[this.itemValue]])
      } else {
        this.$emit('input', item[this.itemValue])
        this.coverEvent()
      }
    }
  }
}
</script>
