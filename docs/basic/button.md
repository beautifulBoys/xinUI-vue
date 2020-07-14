# Button 按钮

## 引用
```js
import { Button } from 'xin-ui'
```

## 示例
<example-button/>

## 参数

### color

* 类型：`String`
* 默认值：`default`
* 描述：按钮颜色，也用来区分按钮状态。

| 可选值 | 颜色 | 状态 | 
| - | - | - |
| default | 灰色 | 默认 |
| info | 蓝色 | 提示信息 |
| success | 绿色 | 成功 |
| warning | 黄色 | 警告 |
| error | 红色 | 错误 |

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

### click
* 描述：点击事件。
* 回调参数: `(event)`；原生事件回调参数。

## 依赖情况

无依赖。

## 代码示例
<<< ./src/examples/button.vue





