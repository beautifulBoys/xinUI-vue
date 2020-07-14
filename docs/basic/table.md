# Table 表格

## 引用
```js
import { Table } from 'xin-ui'
```

## 示例
<example-table/>

## 参数

### thead

* 类型：`Array`
* 默认值：`[]`
* 描述：表格标题数据。

### tbody

* 类型：`Array`
* 默认值：`[]`
* 描述：表格内容数据。

### itemValue

* 类型：`String`
* 默认值：`"value"`
* 描述：取值的字段名称，非必需，在启用`radio`或`checkbox`时候必需。

### tableIndex

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否显示序号。

### tableRheckbox

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否显示复选框。

### tableRadio

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否显示单选框。

## 事件

### @radio-change
* 描述：单选框值改变的时候触发。
* 回调参数: `(radio)`；`radio = tbody[i][itemValue]`。

### @checkbox-change
* 描述：获取焦点。
* 回调参数: `(checkbox)`；`checkbox = tbody[i][itemValue]`。

## 依赖情况

依赖组件 Radio 和 Checkbox 。

## 代码示例
<<< ./src/examples/table.vue






