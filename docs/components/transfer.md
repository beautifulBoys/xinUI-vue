# Transfer 穿梭框

## 引用
```js
import { Transfer } from 'xin-ui'
```

## 示例
<example-transfer/>

## 参数

### value / v-model

* 类型：`Array`
* 默认值：`[]`
* 描述：穿梭框值，双向绑定。

### list

* 类型：`Array`
* 默认值：`[]`
* 描述：穿梭框数据源。

### itemValue

* 类型：`String`
* 默认值：`"value"`
* 描述：穿梭框数据对象中值字段名称。

### itemLabel

* 类型：`String`
* 默认值：`"label"`
* 描述：穿梭框数据对象显示文字字段名称。

### disabled

* 类型：`Array`
* 默认值：`[]`
* 描述：穿梭框禁用的数据，关联 `itemValue`。

### checked

* 类型：`Array`
* 默认值：`[]`
* 描述：穿梭框默认勾选状态的数据，关联 `itemValue`。

### direction

* 类型：`String`
* 默认值：`"left"`
* 描述：穿梭框选中方向，该值暂未实现。

| 可选值 | 描述 |
| - | - |
| left | 从左向右选择 |
| right | 从右向左选择 |

### leftTitle

* 类型：`String`
* 默认值：`"左侧列表"`
* 描述：穿梭框左侧标题。

### rightTitle

* 类型：`String`
* 默认值：`"右侧列表"`
* 描述：穿梭框右侧标题。

## 事件

### @change
* 描述：值改变的时候。
* 回调参数: `(value)`，`value = list[i][itemValue]`；穿梭框值更新之后触发。

## 依赖情况

无依赖。

## 代码示例
<<< ./src/examples/transfer.vue






