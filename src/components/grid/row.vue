<template>
    <div
      :class="['xin-row', {
        'align-start': align === 'start',
        'align-center': align === 'center',
        'align-end': align === 'end',
        'justify-start': justify === 'start',
        'justify-end': justify === 'end',
        'justify-center': justify === 'center',
        'justify-space-around': justify === 'space-around',
        'justify-space-between': justify === 'space-between'
      }]"
      :style="{
        margin: '0 -' + gutter / 2 + 'px'
      }"
    >
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'xinRow',
  components: {
  },
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    align: { // start, center, end
      type: String,
      default: 'top'
    },
    justify: { // start, center, end, space-around, space-between
      type: String,
      default: 'center'
    },
    className: {
      type: String,
      default: 'xin-row-content'
    }
  },
  data () {
    return {
    }
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    afterLeaveEvent () {}
  }
}
</script>
