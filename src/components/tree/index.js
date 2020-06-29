import Tree from './tree'
import Leaf from './leaf'

Tree.install = (Vue) => {
  Vue.component(Tree.name, Tree)
  Vue.component(Leaf.name, Leaf)
}

export default Tree
