import Vue from 'vue'
import Main from './main'

let ModelComponent = Vue.extend(Main)

const Alert = function (options) {
  let option = {
    message: options.message || '',
    closable: options.closable || false,
    title: options.title || '提示',
    align: options.align || '',
    confirmLabel: options.confirmLabel || '知道了'
  }
  let instance = new ModelComponent({
    data: { type: 'alert', ...option }
  })
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.visible = true
  return instance
}

const Confirm = function (options) {
  let option = {
    message: options.message || '',
    closable: options.closable || false,
    title: options.title || '确认框',
    align: options.align || '',
    confirmLabel: options.confirmLabel || '确 定',
    cancelLabel: options.cancelLabel || '取 消'
  }
  let instance = new ModelComponent({
    data: { type: 'confirm', ...option }
  })
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.visible = true
  return instance
}

const Model = function () {}

Model.install = function () {
  Vue.prototype.$alert = Alert
  Vue.prototype.$confirm = Confirm
}

export default Model
