# Progress 进度条

## 引用
```js
import { Progress } from 'xin-ui'
```

## 示例
<example-progress/>

## 参数

### value / v-model

* 类型：`Number`
* 默认值：`0`
* 描述：输入框值，双向绑定。

### color

* 类型：`String`
* 默认值：`"info"`
* 描述：进度条颜色。

| 值 | 描述 |
| - | - |
| info | 蓝色，消息色 |
| success | 绿色，成功色 |
| warning | 黄色，警告色 |
| error | 红色，错误色 |

### disabled

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否禁用。

### stripe

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否显示条纹。

### inside

* 类型：`Boolean`
* 默认值：`false`
* 描述：进度文字显示在内部。

### round

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否圆角。

### width

* 类型：`String`
* 默认值：`""`
* 描述：进度条宽度。

## 事件

无事件。

## 依赖情况

无依赖。

## 代码示例
<<< ./src/examples/progress.vue






