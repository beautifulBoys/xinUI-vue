# Rate 评分

## 引用
```js
import { Rate } from 'xin-ui'
```

## 示例
<example-rate/>

## 参数

### value / v-model

* 类型：`Number`
* 默认值：`0`
* 描述：评分值，双向绑定。

### size

* 类型：`Number`
* 默认值：`5`
* 描述：评分图标数量。

### disabled

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否禁用。

### color

* 类型：`String`
* 默认值：`"white"`
* 描述：颜色。

| 值 | 描述 |
| - | - |
| info | 蓝色，消息色 |
| success | 绿色，成功色 |
| warning | 黄色，警告色 |
| error | 红色，错误色 |

### icon

* 类型：`String`
* 默认值：`"collection-fill"`
* 描述：图标名称，参考`Icon`组件。

## 事件

无事件。

## 依赖情况

依赖内部组件`Icon`。

## 代码示例
<<< ./src/examples/rate.vue






