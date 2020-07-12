# Badge 标记

## 引用
```js
import { Badge } from 'xin-ui'
```

## 示例
<example-badge/>

## 参数

### color

* 类型：`String`
* 默认值：`"error"`
* 描述：输入框颜色，也可用来区分输入状态。

| 可选值 | 颜色 | 描述及说明 |
| - | - |
| default | 灰色 | 默认颜色 |
| info | 蓝色 | 提示色 |
| success | 绿色 | 成功色 |
| warning | 黄色 | 警告色 |
| error | 红色 | 错误色 |

### dot

* 类型：`Boolean`
* 默认值：`false`
* 描述：小圆点提示，不显示数量。

### round

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否圆角。

### fill

* 类型：`Boolean`
* 默认值：`true`
* 描述：是否背景色填充。

### max

* 类型：`Number`
* 默认值：`0`
* 描述：传值为真的时候，会做最大值判断，如果大于最大值，会显示：`99+`。

### disabled

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否禁用。

## 事件

无事件。

## 依赖情况

无依赖。

## 代码示例
<<< ./src/examples/badge.vue





