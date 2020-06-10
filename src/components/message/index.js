import Vue from 'vue'
import Main from './main'

let MessageComponent = Vue.extend(Main)
let id = 1
let pools = []
const typeMap = [
  'info',
  'success',
  'warning',
  'error'
]

function closeById (id) {
  let index = -1
  let del = null
  for (let i = 0; i < pools.length; i++) {
    if (id === pools[i].id) {
      let arr = pools.splice(i, 1)
      del = arr[0]
      index = i
      break
    }
  }
  for (let i = index; i < pools.length; i++) {
    let delHeight = del.contentHeight + 15
    console.log('del.contentHeight: ', del.contentHeight)
    let top = pools[i].$el.offsetTop - delHeight
    pools[i].$el.style.top = top + 'px'
  }
}

const Message = function (options) {
  let option = {
    type: options.type || 'info',
    message: options.message || '',
    closable: options.closable || false,
    duration: options.duration || 3000,
    offsetTop: options.offsetTop || 70
  }

  let top = option.offsetTop
  pools.forEach(item => {
    top += item.$el.offsetHeight + 15
  })
  let instance = new MessageComponent({
    data: { ...option, closeById, top }
  })
  instance.id = id++
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.visible = true
  pools.push(instance)
  return instance
}

Message.closeAll = function () {
  pools.forEach(item => {
    item.close()
  })
}

typeMap.forEach(type => {
  Message[type] = (message) => {
    return Message({ type, message })
  }
})

Message.install = function () {
  Vue.prototype.$message = Message
}

export default Message
