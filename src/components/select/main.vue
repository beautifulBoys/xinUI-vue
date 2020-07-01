<template>
  <div
    :class="['xin-select', {
      'disabled': disabled
    }]"
    :style="{
      'width': width.indexOf('px') > -1 ? width : width + 'px'
    }"
  >
    <div @click="selectEvent()" @mouseover="mouseover($event)" @mouseleave="mouseleave($event)">
      <div class="xin-select-icon icon-left" v-if="icon">
        <xin-icon :name="icon"/>
      </div>
      <div class="xin-select-icon icon-right" v-if="rightIcon">
        <xin-icon
          :class="[{rotate: visible}]"
          :name="clearable && !multiple ? iconMap[hover] : iconMap['0']"
          @click.native="rightIconEvent($event)"
        />
      </div>
      <div
        :class="['xin-select-input', 'has-right-icon', {
          'xin-select-default': color === 'default',
          'placeholder': multiple ? !tags.length : !inputValue,
          'has-left-icon': icon,
          'multiple': multiple,
          'focus': visible
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
    <transition name="xin-select">
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
    </transition>
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
      default: ''
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
    disabled: {
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
      rightIcon: 'arrow-down',
      inputText: '',
      iconMap: {
        '1': 'reeor',
        '0': 'arrow-down'
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
        this.emit([this.inputValue])
      } else {
        this.emit([])
      }
    }
    this.createTags(this.inputValue)
  },
  methods: {
    closeTagEvent (item) {
      this.optionEvent(true, item)
      this.$emit('close', item[this.itemValue])
    },
    createTags (arr) {
      if (!this.multiple) {
        if (!arr) {
          this.inputText = ''
          return
        }
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
      if (this.disabled) return
      this.hover = '1'
    },
    mouseleave (e) {
      if (this.disabled) return
      this.hover = '0'
    },
    rightIconEvent (e) {
      if (this.hover === '1' && this.clearable && !this.multiple) {
        e.stopPropagation()
        this.emit('clear')
      }
    },
    selectEvent () {
      if (this.disabled) return
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
        this.emit(arr)
      } else {
        this.emit(item[this.itemValue])
        this.coverEvent()
      }
    },
    emit (val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  }
}
</script>
