import input from './input'
import button from './button'
import label from './label'
import radio from './radio'

const lixinComponents = {
  input,
  label,
  button,
  radio
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
  radio
}

export const components = {
  install
}
