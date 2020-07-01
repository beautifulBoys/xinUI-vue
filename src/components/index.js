import Input from './input'
import Button from './button'
import Label from './label'
import Radio from './radio'
import Checkbox from './checkbox'
import Select from './select'
import Switch from './switch'
import Rate from './rate'
import DatePicker from './datePicker'
import ColorPicker from './colorPicker'
import TagInput from './tagInput'
import Table from './table'
import Page from './page'
import Tabs from './tabs'
import Dialog from './dialog'
import Message from './message'
import Model from './model'
import Steps from './steps'
import Progress from './progress'
import Tooltip from './tooltip'
import Badge from './badge'
import Transfer from './transfer'
import Split from './split'
import Loading from './loading'
import Tips from './tips'
import Tag from './tag'
import { Row, Col } from './grid'
import Popover from './popover'
import Icon from './icon'
import Tree from './tree'
import Slide from './slide'
import Viewer from './viewer'

const xinComponents = {
  Input,
  Label,
  Button,
  Radio,
  Checkbox,
  Select,
  Switch,
  Rate,
  DatePicker,
  ColorPicker,
  TagInput,
  Table,
  Page,
  Tabs,
  Dialog,
  Message,
  Model,
  Steps,
  Progress,
  Tooltip,
  Badge,
  Transfer,
  Split,
  Loading,
  Tips,
  Tag,
  Row,
  Col,
  Popover,
  Icon,
  Tree,
  Slide,
  Viewer
}

function install (Vue) {
  for (let index in xinComponents) {
    xinComponents[index].install && xinComponents[index].install(Vue)
  }
}

xinComponents.install = install

export default xinComponents

export {
  Input,
  Label,
  Button,
  Radio,
  Checkbox,
  Select,
  Switch,
  Rate,
  DatePicker,
  ColorPicker,
  TagInput,
  Table,
  Page,
  Tabs,
  Dialog,
  Message,
  Model,
  Steps,
  Progress,
  Tooltip,
  Badge,
  Transfer,
  Split,
  Loading,
  Tips,
  Tag,
  Row,
  Col,
  Popover,
  Icon,
  Tree,
  Slide,
  Viewer
}

export const components = {
  install
}
