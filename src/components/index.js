import input from './input'
import button from './button'
import label from './label'
import radio from './radio'
import checkbox from './checkbox'

const lixinComponents = {
  input,
  label,
  button,
  radio,
  checkbox
}

function install (Vue) {
  for (let index in lixinComponents) {
    lixinComponents[index].install && lixinComponents[index].install(Vue)
  }
}

lixinComponents.install = install

export default lixinComponents

export {
  input,
  label,
  button,
  radio,
  checkbox
}

export const components = {
  install
}
