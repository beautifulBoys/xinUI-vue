<template>
  <div class="xin-select" @click="selectEvent()">
    <xin-input
      rightIcon="iconGroup-4"
      placeholder="请选择"
      v-model="inputText"
    ></xin-input>
    <!-- <div class="xin-input visible">
      <div class="xin-input-inner"></div>
      <div class="xin-input-icon icon-left">
        <xin-icon name=""></xin-icon>
      </div>
      <div class="xin-input-icon icon-right">
        <xin-icon name="rightIcon"></xin-icon>
      </div>
    </div> -->
    <div
      class="xin-select-cover"
      v-show="visible"
      @click.stop="coverEvent()"
    ></div>
    <div class="xin-select-tags" v-if="tags.length">
      <xin-tag
        small
        closable
        v-for="(item, index) in tags"
        :key="index"
        @close="closeTagEvent(item)"
        :message="item[itemLabel]"
      ></xin-tag>
    </div>
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
    rightIcon: {
      type: String,
      default: 'iconGroup-4'
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
      inputValue: this.value,
      tags: [],
      inputText: ''
    }
  },
  computed: {
  },
  watch: {
    value (n, o) {
      this.inputValue = n
    },
    inputValue (n, o) {
      this.createTags(n)
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
    this.createTags(this.inputValue)
  },
  methods: {
    closeTagEvent (item) {
      console.log(item)
    },
    createTags (arr) {
      if (!this.multiple) {
        this.list.forEach(item => {
          if (arr === item[this.itemValue]) {
            this.inputText = item[this.itemLabel]
          }
        })
      } else {
        let list = []
        this.list.forEach(item => {
          arr.forEach(ar => {
            if (ar === item[this.itemValue]) {
              list.push(item)
            }
          })
        })
        this.tags = list
      }
    },
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
