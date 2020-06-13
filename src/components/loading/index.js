import Vue from 'vue'
import Main from './main'

let Component = Vue.extend(Main)
let instance = null
let config = null
let status = false

const Loading = function (options) {
  config = options
}

Loading.config = (options) => {
  config = options
}

Loading.start = () => {
  if (instance) {
    instance.start()
  } else {
    instance = new Component({
      data: {}
    })
    instance.$mount()
    document.body.appendChild(instance.$el)
    instance.start()
  }
  status = true
  return instance
}

Loading.success = () => {
  if (!instance) return
  status && instance.success()
  status = false
  return instance
}

Loading.error = () => {
  if (!instance) return
  status && instance.error()
  status = false
  return instance
}

Loading.install = function () {
  Vue.prototype.$loading = Loading
}

export default Loading
