<template>
  <div class="xin-select">
    <div @mouseover="mouseover($event)" @mouseleave="mouseleave($event)" @click="selectEvent()">
      <div class="xin-input-icon icon-left" v-if="icon">
        <xin-icon class="icon" :name="icon"/>
      </div>
      <div class="xin-input-icon icon-right" v-if="rightIcon">
        <xin-icon
          :class="['icon', {rotate: visible}]"
          :name="iconMap['1']"
          v-if="clearable && !multiple && hover === '1'"
          @click="rightIconEvent()"
        />
        <xin-icon
          :class="['icon', {rotate: visible}]"
          :name="iconMap['0']"
          v-else
        />
      </div>
      <div
        :class="['xin-select-input', {
          'xin-input-default': color === 'default',
          'placeholder': multiple ? !tags.length : !inputValue,
          'multiple': multiple
        }]"
      >
        <template v-if="multiple">
          <template v-if="tags.length">
            <xin-tag
              small
              closable
              v-for="(item, index) in tags"
              :key="index"
              @close="closeTagEvent(item)"
              :message="item[itemLabel]"
            ></xin-tag>
          </template>
          <span v-else>{{placeholder}}</span>
        </template>
        <template v-else>
          <span v-if="inputText">{{inputText}}</span>
          <span v-else>{{placeholder}}</span>
        </template>
      </div>
    </div>
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
    color: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
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
    },
    clearable: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请选择'
    }
  },
  data () {
    return {
      visible: false,
      inputValue: this.value,
      tags: [],
      rightIcon: 'Group-4',
      inputText: '',
      iconMap: {
        '1': 'Group-6',
        '0': 'Group-4'
      },
      hover: 0 // 0：false, 1: true
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
      this.optionEvent(true, item)
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
    mouseover (e) {
      this.hover = '1'
    },
    mouseleave (e) {
      this.hover = '0'
    },
    rightIconEvent () {
      console.log('-----------')
      if (this.hover === '1' && this.clearable && !this.multiple) {
        this.$emit('input', '')
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
