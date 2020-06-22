# Dialog 弹出框

## 引用
```js
import { Dialog } from 'xin-ui'
```

## 示例
<div>
  <example-dialog/>
</div>

## 代码示例
<<< ./src/examples/dialog.vue

## 参数

### visible

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否显示，sync 同步。

### title

* 类型：`String`
* 默认值：`"提示"`
* 描述：弹出框标题。

### width

* 类型：`String`
* 默认值：`""`
* 描述：输入框宽度，不带单位。

### disabled

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否禁用。

### noPadding

* 类型：`Boolean`
* 默认值：`false`
* 描述：弹出框是否去除内边距。

### confirmVisible

* 类型：`Boolean`
* 默认值：`true`
* 描述：弹出框是否需要确定按钮。

### cancelVisible

* 类型：`Boolean`
* 默认值：`true`
* 描述：弹出框是否需要取消按钮。

### confirmLabel

* 类型：`String`
* 默认值：`"确 认"`
* 描述：确认按钮文字。

### cancelLabel

* 类型：`String`
* 默认值：`"确 认"`
* 描述：取消按钮文字。

### closable

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否显示关闭按钮。

## 插槽

### name = header
* 描述：自定义弹出框头部内容。
* 示例：`<div slot="header">自定义头部</div>`

### slot
* 描述：自定义弹出框内容。
* 示例：`<div slot="header">自定义头部</div>`

### name = footer
* 描述：自定义弹出框底部内容。
* 示例：`<div slot="footer">自定义底部</div>`

## 事件

### confirm
* 描述：确认按钮事件。
* 回调参数: 无。

### cancel
* 描述：取消按钮事件。
* 回调参数: 无。

### close
* 描述：关闭按钮事件。
* 回调参数: 无。

## 依赖情况

无依赖。






