# Tooltip 文字提示

## 引用
```js
import { Tooltip } from 'xin-ui'
```

## 示例
<example-tooltip/>

## 参数

### position

* 类型：`String`
* 默认值：`"top"`
* 描述：浮动框显示位置。

| 值 | 描述 |
| - | - |
| top | 上方 |
| bottom | 下方 |
| left | 左侧 |
| right | 右侧 |

### content

* 类型：`String`
* 默认值：`""`
* 描述：文字提示内容。

### color

* 类型：`String`
* 默认值：`"white"`
* 描述：文字提示背景色，已默认以下种类，暂不提供自定义。

| 值 | 描述 | 文字颜色 |
| - | - | - |
| dark | 黑色 | #ffffff |
| white | 白色 | 继承 |
| info | 蓝色，消息色 | #ffffff |
| success | 绿色，成功色 | #ffffff |
| warning | 黄色，警告色 | #ffffff |
| error | 红色，错误色 | #ffffff |

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
* 描述：是否弧角。

## 事件

无事件。

## 依赖情况

依赖内部组件`Popover`。

## 代码示例
<<< ./src/examples/tooltip.vue






