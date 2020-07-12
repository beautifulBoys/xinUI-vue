# Popover 浮动框

## 引用
```js
import { Popover } from 'xin-ui'
```

## 示例
<example-popover/>

## 参数

### position

* 类型：`String`
* 默认值：`"top"`
* 描述：浮动框显示位置。

| 值 | 描述 |
| top | 上方 |
| bottom | 下方 |
| left | 左侧 |
| right | 右侧 |

### trigger

* 类型：`String`
* 默认值：`"hover"`
* 描述：浮动框显示方式。

### minWidth

* 类型：`Number`
* 默认值：`200`
* 描述：浮动框最小宽度。

### minHeight

* 类型：`Number`
* 默认值：`70`
* 描述：浮动框最小高度。

### color

* 类型：`String`
* 默认值：`"white"`
* 描述：浮动框颜色。

| 值 | 描述 |
| dark | 黑色 |
| white | 白色 |
| info | 蓝色，消息色 |
| success | 绿色，成功色 |
| warning | 黄色，警告色 |
| error | 红色，错误色 |

### disabled

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否禁用。

### animate

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否启用动画。

### radius

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否圆角。

## 事件

无事件。

## 依赖情况

无依赖。

## 代码示例
<<< ./src/examples/popover.vue






