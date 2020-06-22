# Button 按钮

## 引用
```js
import { button } from 'xin-ui'
```

## 示例
<example-button/>

## 代码示例
<<< ./src/examples/button.vue

## 参数

### color

* 类型：`String`
* 默认值：`default`
* 描述：按钮颜色，也用来区分按钮状态。

| 可选值 | 颜色 |
| - | - |
| default | 灰色 |
| info | 蓝色 |
| success | 绿色 |
| warning | 黄色 |
| error | 红色 |

### icon

* 类型：`String`
* 默认值：`""`
* 举例：`loading`
* 描述：按钮图标，传值为内置图标名称。所有图标请查看【图标列表】。

### width

* 类型：`String`
* 默认值：`""`
* 举例：`"80"`，请不要带单位。
* 描述：按钮宽度，默认宽度为自适应。

### round

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否圆角。

### fill

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否填充背景色。

### inline

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否为文字链接样式。

### disabled

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否禁用。

## 事件

所有原生事件均可使用。

## 依赖情况

无依赖。






