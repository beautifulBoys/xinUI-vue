# Input 输入框

## 引用
```js
import { Input } from 'xin-ui'
```

## 示例
<example-input/>

## 代码示例
<<< ./src/examples/input.vue

## 参数

### value / v-model

* 类型：`String`
* 默认值：`""`
* 描述：输入框值，双向绑定。

### type

* 类型：`String`
* 默认值：`"text"`
* 描述：原生属性；支持所有原生属性。

### color

* 类型：`String`
* 默认值：`"default"`
* 描述：输入框颜色，也可用来区分输入状态。

| 可选值 | 颜色 |
| - | - |
| default | 灰色 |
| info | 蓝色 |
| success | 绿色 |
| warning | 黄色 |
| error | 红色 |

### disabled

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否禁用。

### placeholder

* 类型：`String`
* 默认值：`"请输入"`
* 描述：未输入时，输入框提示语。

### leftIcon

* 类型：`String`
* 默认值：`""`
* 举例：`"loading"`
* 描述：左边按钮图标，传值为内置图标名称。所有图标请查看【图标列表】。

### rightIcon

* 类型：`String`
* 默认值：`""`
* 举例：`loading`
* 描述：右边按钮图标，传值为内置图标名称。所有图标请查看【图标列表】。

### maxLength

* 类型：`Number`
* 默认值：`100000`
* 描述：最多输入字数。

### rule

* 类型：`[String, RegExp]`
* 默认值：`""`
* 描述：输入规则；在已提供的输入规则无法满足需求的情况下，我们提供了输入规则自定义，您可以编写符合您预期的正则表达式来控制输入内容；用法如示例。

### fixed

* 类型：`Number`
* 默认值：`2`
* 描述：保留小数位数。

### max

* 类型：`Number`
* 默认值：`999999999999`
* 描述：输入的最大值，但是只有 `rule === "float"` 或 `rule === "positive"` 时候有效。

### textarea

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否是输入区域，即 `<textarea/>`。

### width

* 类型：`String`
* 默认值：`""`
* 描述：输入框宽度。

### round

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否圆角。

## 事件

### keyup
* 描述：键盘按键按下。
* 回调参数: `(event)`；原生事件回调参数。

### focus
* 描述：获取焦点。
* 回调参数: `(event)`；原生事件回调参数。

### blur
* 描述：失去焦点。
* 回调参数: `(event)`；原生事件回调参数。

### change
* 描述：值改变得时候。
* 回调参数: `(value)`；改变后的值，在输入框值更新之后回调。

## 依赖情况

无依赖。






