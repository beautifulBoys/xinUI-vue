import Vue from 'vue'
import Main from './main'

let ViewerComponent = Vue.extend(Main)

const Viewer = function (options = {}) {
  let instance = new ViewerComponent({
    data: {
      list: options.list || [],
      viewIndex: options.index || 0,
      itemValue: options.itemValue || 'url'
    }
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
