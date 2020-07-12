# Tree 树

## 引用
```js
import { Tree } from 'xin-ui'
```

## 示例
<div>
  <example-tree/>
</div>

## 参数

### list

* 类型：`Array`
* 默认值：`[]`
* 描述：数据源。

### itemValue

* 类型：`String`
* 默认值：`"id"`
* 描述：对象取值键名称。

### itemLabel

* 类型：`String`
* 默认值：`"name"`
* 描述：对象显示键名称。

### model

* 类型：`String`
* 默认值：`""`
* 描述：暂不支持。

### readonly

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否只读。

## 事件

### change

* 描述：值改变事件。
* 回调参数: `value`。

## 方法

### change

* 描述：。
* 回调参数: ``。

## 依赖情况

依赖`Checkbox`、`Icon`组件。

## 代码示例
<<< ./src/examples/tree.vue






