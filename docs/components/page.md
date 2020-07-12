# Page 分页

## 引用
```js
import { Page } from 'xin-ui'
```

## 示例
<example-page/>

## 参数

### layout

* 类型：`String`
* 默认值：`['prev', 'pages', 'next']`
* 描述：显示组件部分及排序。

### page

* 类型：`Number`
* 默认值：`1`
* 描述：页码。

### size

* 类型：`Number`
* 默认值：`10`
* 描述：一页数量。

### total

* 类型：`Number`
* 默认值：`0`
* 描述：数量。

### pagerCount

* 类型：`Number`
* 默认值：`7`
* 描述：最多显示页码模块数量。

### sizes

* 类型：`Array`
* 默认值：`[10, 20, 30, 40, 50]`
* 描述：页面数量选择器数据。

### align

* 类型：`String`
* 默认值：`"center"`
* 描述：水平分步模式。

### firstText

* 类型：`String`
* 默认值：`"首页"`
* 描述：首页按钮显示文字。

### lastText

* 类型：`String`
* 默认值：`"尾页"`
* 描述：尾页按钮显示文字。

### prevText

* 类型：`String`
* 默认值：`"上一页"`
* 描述：上一页按钮显示文字。

### nextText

* 类型：`String`
* 默认值：`"下一页"`
* 描述：下一页按钮显示文字。

## 事件

无事件。

## 依赖情况

无依赖。

## 代码示例
<<< ./src/examples/page.vue






