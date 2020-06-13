import Row from './row'
import Col from './col'

Row.install = (Vue) => {
  Vue.component(Row.name, Row)
}

Col.install = (Vue) => {
  Vue.component(Col.name, Col)
}

export const row = Row
export const col = Col
