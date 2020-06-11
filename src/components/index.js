import input from './input'
import button from './button'
import label from './label'
import radio from './radio'
import checkbox from './checkbox'
import select from './select'
import switch1 from './switch'
import rate from './rate'
import datePicker from './datePicker'
import table from './table'
import page from './page'
import tabs from './tabs'
import dialog from './dialog'
import message from './message'
import model from './model'
import steps from './steps'
import progress from './progress'

const lixinComponents = {
  input,
  label,
  button,
  radio,
  checkbox,
  select,
  switch1,
  rate,
  datePicker,
  table,
  page,
  tabs,
  dialog,
  message,
  model,
  steps,
  progress
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
  select,
  switch1,
  rate,
  datePicker,
  table,
  page,
  tabs,
  dialog,
  message,
  model,
  steps,
  progress
}

export const components = {
  install
}
