# Tips 提示条

## 引用
```js
import { Tips } from 'xin-ui'
```

## 示例
<example-tips/>

## 参数

### message

* 类型：`String`
* 默认值：`""`
* 描述：提示条文字。

### width

* 类型：`String`
* 默认值：`""`
* 描述：提示条宽度，不带单位。

### color

* 类型：`String`
* 默认值：`""`
* 描述：提示条风格。

| 值 | 描述 | 文字颜色 |
| - | - | - |
| info | 蓝色，消息色 | #ffffff |
| success | 绿色，成功色 | #ffffff |
| warning | 黄色，警告色 | #ffffff |
| error | 红色，错误色 | #ffffff |

### closable

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否显示关闭按钮。

### value

* 类型：`[String, Number, Boolean, Object]`
* 默认值：`""`
* 描述：关闭的时候用来区分关闭的是哪个提示条，随`@close`事件返回。

### fill

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否填充背景色。

### closeLabel

* 类型：`String`
* 默认值：`""`
* 描述：自定义关闭按钮文字，如：`"知道了"`。

## 事件

### @close
* 描述：关闭事件。
* 回调参数: `(value)`；`value = value || message`。


## 依赖情况

依赖内部组件`Icon`。

## 代码示例
<<< ./src/examples/tips.vue






