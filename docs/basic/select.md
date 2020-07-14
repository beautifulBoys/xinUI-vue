# Select 下拉选择器

## 引用
```js
import { Select } from 'xin-ui'
```

## 示例
<example-select/>

## 参数

### value / v-model

* 类型：`[String, Number, Boolean, Array]`
* 默认值：`""`
* 描述：下拉选择器值，双向绑定。

### list

* 类型：`Array`
* 默认值：`[]`
* 描述：下拉选择器数据列表。

### width

* 类型：`String`
* 默认值：`""`
* 描述：是否圆角。

### icon

* 类型：`String`
* 默认值：`""`
* 举例：`"loading"`
* 描述：按钮图标，传值为内置图标名称。所有图标请查看【图标列表】。

### itemValue

* 类型：`String`
* 默认值：`""`
* 描述：列表单项取值的字段名称。

### itemLabel

* 类型：`String`
* 默认值：`""`
* 描述：列表单项显示字段名称。

### multiple

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否多选。

### clearable

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否显示清空按钮。

### closable

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否显示标签的关闭按钮，多选的时候使用。

### disabled

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否禁用。

### placeholder

* 类型：`String`
* 默认值：`"请选择"`
* 描述：空值提示文字。

## 事件

### change
* 描述：值改变事件。
* 回调参数: `(value)`。

### close
* 描述：标签关闭事件。
* 回调参数: `(value)`；关闭当前的标签的值。

### clear
* 描述：清空事件。
* 回调参数: 无。

## 依赖情况

无依赖。

## 代码示例
<<< ./src/examples/select.vue






