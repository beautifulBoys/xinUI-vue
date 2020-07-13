# Tag 标签

## 引用
```js
import { Tag } from 'xin-ui'
```

## 示例
<example-tag/>

## 参数

### message

* 类型：`String`
* 默认值：`""`
* 描述：标签内容。

### color

* 类型：`String`
* 默认值：`"default"`
* 描述：标签风格。

| 值 | 描述 | 文字颜色 |
| - | - | - |
| default | 灰色，默认色 | #ffffff |
| info | 蓝色，消息色 | #ffffff |
| success | 绿色，成功色 | #ffffff |
| warning | 黄色，警告色 | #ffffff |
| error | 红色，错误色 | #ffffff |

### fill

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否背景色填充。

### closable

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否可关闭，暂未支持。

## 事件

### @close
* 描述：标签关闭事件。
* 回调参数: `(value)`，`value = message`；显示内容，再点击关闭按钮时触发。

## 依赖情况

依赖内部组件`Icon`。

## 代码示例
<<< ./src/examples/tag.vue






