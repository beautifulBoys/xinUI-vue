<template>
    <div class="xin-loading">
      <div
        :class="['xin-loading-content', {
          'start': status === 'start',
          'success': status === 'success',
          'error': status === 'error'
        }]"
      ></div>
    </div>
</template>

<script>
export default {
  name: 'xinLoading',
  components: {
  },
  props: {
  },
  data () {
    return {
      // bar, screen
      mode: 'bar',
      // start, success, error
      status: ''
    }
  },
  created () {

  },
  watch: {
  },
  mounted () {
  },
  methods: {
    start () {
      setTimeout(() => {
        this.status = 'start'
      }, 100)
    },
    success () {
      this.status = 'success'
      this.close()
    },
    error () {
      this.status = 'error'
      this.close()
    },
    close () {
      this.timer = setTimeout(() => {
        clearTimeout(this.timer)
        this.status = ''
      }, 1200)
      
    }
  }
}
</script>
