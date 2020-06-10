import Vue from 'vue'
import Main from './main'
let messageConstructor = Vue.extend(Main)
console.log(messageConstructor)
let id = 1

export default class Message {
  constructor (options = Object) {
    this.options = {
      type: options.type || 'info',
      message: options.message || '',
      closable: options.closable || false,
      duration: options.duration || 3,
      offsetTop: options.offsetTop || 100
    }
    this.messageId = id++
  }

  create () {

  }
}
