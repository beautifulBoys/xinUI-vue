import input from './input'
import button from './button'
import label from './label'
import radio from './radio'
import checkbox from './checkbox'
import select from './select'

const lixinComponents = {
  input,
  label,
  button,
  radio,
  checkbox,
  select
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
  checkbox,
  select
}

export const components = {
  install
}
