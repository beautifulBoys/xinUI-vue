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
import tooltip from './tooltip'
import badge from './badge'
import transfer from './transfer'
import split from './split'
import loading from './loading'
import tips from './tips'
import tag from './tag'
import { row, col } from './grid'
import popover from './popover'

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
  progress,
  tooltip,
  badge,
  transfer,
  split,
  loading,
  tips,
  tag,
  row,
  col,
  popover
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
  progress,
  tooltip,
  badge,
  transfer,
  split,
  loading,
  tips,
  tag,
  row,
  col,
  popover
}

export const components = {
  install
}
