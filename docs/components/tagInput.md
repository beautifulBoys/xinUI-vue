# TagInput 标签输入框

## 引用
```js
import { TagInput } from 'xin-ui'
```

## 示例
<example-tag-input/>

## 参数

### value / v-model

* 类型：`Array`
* 默认值：`[]`
* 描述：标签输入框值，双向绑定。

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

### maxSize

* 类型：`Number`
* 默认值：`10`
* 描述：最多输入标签数量。

### closable

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否可关闭。

### backSpace

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否启用键盘回退按键删除。

### placeholder

* 类型：`String`
* 默认值：`"请输入"`
* 描述：未输入时候提示文字。

### fill

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否背景色填充。

## 事件

无事件。

## 依赖情况

无依赖。

## 代码示例
<<< ./src/examples/tagInput.vue






