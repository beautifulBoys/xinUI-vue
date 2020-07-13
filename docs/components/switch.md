# Switch 开关

## 引用
```js
import { Switch } from 'xin-ui'
```

## 示例
<example-switch/>

## 参数

### value / v-model

* 类型：`[String, Number, Boolean]`
* 默认值：`false`
* 描述：开关值，双向绑定。

### color

* 类型：`String`
* 默认值：`"white"`
* 描述：浮动框背景色，已默认以下种类，暂不提供自定义。

| 值 | 描述 | 文字颜色 |
| - | - | - |
| info | 蓝色，消息色，默认值 | #ffffff |
| success | 绿色，成功色 | #ffffff |
| warning | 黄色，警告色 | #ffffff |
| error | 红色，错误色 | #ffffff |

### disabled

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否禁用。

### openLabel

* 类型：`String`
* 默认值：`""`
* 描述：开关打开状态的提示文字。

### closeLabel

* 类型：`String`
* 默认值：`""`
* 描述：开关关闭状态的提示文字。

### openValue

* 类型：`[String, Number, Boolean]`
* 默认值：`true`
* 描述：开关打开状态时的值。

### closeValue

* 类型：`[String, Number, Boolean]`
* 默认值：`false`
* 描述：开关关闭状态时的值。

## 事件

### change
* 描述：值改变的时候。
* 回调参数: `(value)`；改变后的值，在开关值更新之后触发。

## 依赖情况

无依赖。

## 代码示例
<<< ./src/examples/switch.vue






