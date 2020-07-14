# Tabs 标签页

## 引用
```js
import { Tabs } from 'xin-ui'
```

## 示例
<example-tabs/>

## 参数

### value / v-model

* 类型：`[Number, String]`
* 默认值：`""`
* 描述：标签页值，双向绑定。

### list

* 类型：`Array`
* 默认值：`[]`
* 描述：标签页数据源列表。

### color

* 类型：`String`
* 默认值：`""`
* 描述：色调样式，暂时提供默认色和蓝色，其他颜色可以后续支持。

| 可选值 | 颜色 | 描述 |
| - | - | - |
| default | 灰色 | 默认颜色 |
| info | 蓝色 | 蓝色颜色 |

### height

* 类型：`String`
* 默认值：`"auto"`
* 描述：是否限高，输入高度值即限高，不需要单位。

### itemValue

* 类型：`String`
* 默认值：`"name"`
* 描述：数据源内容字段名称，`content = list[i][itemValue]`。

### itemLabel

* 类型：`String`
* 默认值：`"title"`
* 描述：数据源标签字段名称，`tab = list[i][itemLabel]`。

### closable <xin-tag message="暂未实现" color="warning" fill></xin-tag>

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否可关闭，暂未支持。

### disabled <xin-tag message="暂未实现" color="warning" fill></xin-tag>

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否禁用，暂未支持。

## 方法

### getValue
* 描述：获取当前激活的是标签页值。
* 回调参数: `(value)`；`value = list[i][itemValue]`。

## 事件

### @tab-change
* 描述：标签页切换的时候。
* 回调参数: `(value)`，`value = list[i][itemValue]`；改变后的值，在标签切换后触发。


## 依赖情况

无依赖。

## 代码示例
<<< ./src/examples/tabs.vue






