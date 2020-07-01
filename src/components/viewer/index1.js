import Vue from 'vue'
import Main from './main'

let ModelComponent = Vue.extend(Main)

const Viewer = function (options) {
  let option = {
    message: options.message || ''
  }
  let instance = new ModelComponent({
    data: option
  })
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.visible = true
  return instance
}
Viewer.install = function () {
  Vue.prototype.$viewer = Viewer
}

export default Viewer
