# DatePicker 日期选择器

## 引用
```js
import { DatePicker } from 'xin-ui'
```

## 示例
<example-date-picker/>

## 代码示例
<<< ./src/examples/datePicker.vue

## 参数

### value / v-model

* 类型：`[String, Date, Array]`
* 默认值：`""`
* 描述：日期选择器值，双向绑定。

### width

* 类型：`String`
* 默认值：`""`
* 描述：选择器宽度，不带单位。

### icon

* 类型：`String`
* 默认值：`"Group-"`
* 描述：左边图标，传值为内置图标名称。所有图标请查看【图标列表】。

### readonly

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否只读。

### clearable

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否显示清空按钮。

### disabled

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否禁用。

### range

* 类型：`Boolean`
* 默认值：`false`
* 描述：时间段选择。

### placeholder

* 类型：`String`
* 默认值：`"请选择"`
* 描述：未输入提示语。

### startPlaceholder

* 类型：`String`
* 默认值：`"开始时间"`
* 描述：开始时间未输入提示语。

### endPlaceholder

* 类型：`String`
* 默认值：`"结束时间"`
* 描述：结束时间未输入提示语。

### format

* 类型：`String`
* 默认值：`""`
* 描述：输出日期格式。

### disabledDate

* 类型：`Function`
* 默认值：`function (date) {}`
* 描述：禁用日期，日历渲染的时候，每天调用此方法，由您决定是否禁用当天。

## 事件

### change
* 描述：值改变得时候。
* 回调参数: `(value)`；改变后的值，在输入框值更新之后回调。

### clear
* 描述：清空事件。
* 回调参数: 无回调参数。

## 依赖情况

Icon。






