import input from './input'
import button from './button'
import label from './label'
import radio from './radio'
import checkbox from './checkbox'
import select from './select'
import switch1 from './switch'
import rate from './rate'
import datePicker from './datePicker'
import colorPicker from './colorPicker'
import tagInput from './tagInput'
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
import icon from './icon'
import tree from './tree'

const xinComponents = {
  input,
  label,
  button,
  radio,
  checkbox,
  select,
  switch1,
  rate,
  datePicker,
  colorPicker,
  tagInput,
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
  popover,
  icon,
  tree
}

function install (Vue) {
  for (let index in xinComponents) {
    xinComponents[index].install && xinComponents[index].install(Vue)
  }
}

xinComponents.install = install

export default xinComponents

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
  colorPicker,
  tagInput,
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
  popover,
  icon,
  tree
}

export const components = {
  install
}
