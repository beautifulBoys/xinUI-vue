import input from './input'
import button from './button'
import label from './label'

const lixinComponents = {
  input,
  label,
  button
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
  button
}

export const components = {
  install
}
