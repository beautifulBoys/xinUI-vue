<template>
  <div class="xin-select" @click="selectEvent()">
    <xin-input
      rightIcon="iconGroup-6"
      placeholder="请选择"
    ></xin-input>
    <div
      class="xin-select-cover"
      v-show="visible"
      @click.stop="coverEvent()"
    ></div>
    <div class="xin-select-options" v-show="visible">
      <div class="xin-options-ul">
        <xin-option
          v-for="(item, index) in list"
          :key="index"
          :item="item"
          :value="inputValue"
          :itemValue="itemValue"
          :itemLabel="itemLabel"
          :multiple="multiple"
          @option-event="optionEvent($event, item)"
        ></xin-option>
      </div>
    </div>
  </div>
</template>

<script>
import option from './option'
export default {
  name: 'xinSelect',
  components: {
    'xin-option': option
  },
  props: {
    value: {
      type: [String, Number, Boolean, Array],
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
  computed: {
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
    optionEvent (isSelected, item) {
      if (this.multiple) {
        let arr = []
        if (isSelected) {
          this.inputValue.forEach(val => {
            if (item[this.itemValue] !== val) {
              arr.push(val)
            }
          })
        } else {
          arr = [...this.inputValue, item[this.itemValue]]
        }
        this.$emit('input', arr)
      } else {
        this.$emit('input', item[this.itemValue])
        this.coverEvent()
      }
    }
  }
}
</script>
