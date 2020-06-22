# Checkbox 复选框

## 引用
```js
import { Checkbox } from 'xin-ui'
```

## 示例
<div>
  <example-checkbox/>
</div>

## 代码示例
<<< ./src/examples/checkbox.vue

## 参数

### value / v-model

* 类型：`[Array, Boolean]`
* 默认值：`false`
* 描述：复选框值，双向绑定。

### disabled

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否禁用。

## 事件

### change
* 描述：值改变得时候。
* 回调参数: `(value)`；改变后的值，在输入框值更新之后回调。

## 依赖情况

依赖 ElementUI 的 Checkbox 组件。






