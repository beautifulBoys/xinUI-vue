# Slide 滑块

## 引用
```js
import { Slide } from 'xin-ui'
```

## 示例
<div>
  <example-slide/>
</div>

## 代码示例
<<< ./src/examples/slide.vue

## 参数

### value / v-model

* 类型：`[Number, Object]`
* 默认值：`0`
* 描述：滑块值，双向绑定。

### min

* 类型：`Number`
* 默认值：`0`
* 描述：起始值。

### max

* 类型：`Number`
* 默认值：`100`
* 描述：终止值。

### step

* 类型：`Number`
* 默认值：`1`
* 描述：步长，移动一个刻度值的长度，`step`应该被`max - min`整除。

### disabled

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否禁用。

### readonly

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否只读。

### dot

* 类型：`Boolean`
* 默认值：`false`
* 是否显示点状刻度。

### range

* 类型：`Boolean`
* 默认值：`false`
* 描述：区间选择。

### unit

* 类型：`String`
* 默认值：`""`
* 描述：单位，如摄氏度，毫米，秒，赫兹等。

## 事件

### change
* 描述：值改变事件。
* 回调参数: `value`。

## 依赖情况

依赖`Tooltip`组件。






