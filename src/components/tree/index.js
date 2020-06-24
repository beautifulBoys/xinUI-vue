import Main from './main'
import Leaf from './leaf'

Main.install = (Vue) => {
  Vue.component(Main.name, Main)
  Vue.component(Leaf.name, Leaf)
}

export default Main
