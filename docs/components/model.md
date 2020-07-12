# Model 确认框

## 引用
```js
import { Model } from 'xin-ui'
```

## 示例
<example-model/>

## 参数

### title

* 类型：`String`
* 默认值：`""`
* 描述：标题。

### message

* 类型：`String`
* 默认值：`""`
* 描述：提示消息。

### closable

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否显示关闭按钮。

### align

* 类型：`String`
* 默认值：`""`
* 描述：内容的水平分布。

### confirmLabel

* 类型：`String`
* 默认值：`"确定"`
* 描述：确定按钮显示文字。

### cancelLabel

* 类型：`String`
* 默认值：`"取消"`
* 描述：取消按钮显示文字。

## 方法

### $alert
* 描述：提示框事件。
* 回调参数: 无回调参数。

### $confirm
* 描述：确认框事件。
* 回调参数: 无回调参数。

## 事件

### confirm
* 描述：确认事件。
* 回调参数: 无回调参数。

### cancel
* 描述：取消事件。
* 回调参数: 无回调参数。

### close
* 描述：关闭事件。
* 回调参数: 无回调参数。

## 依赖情况

无依赖。

## 代码示例
<<< ./src/examples/model.vue






