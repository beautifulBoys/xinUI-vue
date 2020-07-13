# Split 分割面板

## 引用
```js
import { Split } from 'xin-ui'
```

## 示例
<example-split/>

## 参数

### value / v-model

* 类型：`String`
* 默认值：`"50%"`
* 描述：分割面板宽度，双向绑定。

### mode

* 类型：`String`
* 默认值：`"horizontal"`
* 描述：排布模式。

| 值 | 描述 |
| - | - |
| horizontal | 水平排布 |
| vertical | 垂直排布 |

### min

* 类型：`Number`
* 默认值：`50`
* 描述：允许的最小宽度，单位：像素。

## 事件

### change
* 描述：宽度改变的时候。
* 回调参数: `(value)`；改变后的值，在输入框值更新之后触发。


## 依赖情况

无依赖。

## 代码示例
<<< ./src/examples/split.vue






