# Upload 上传

## 引用
```js
import { Upload } from 'xin-ui'
```

## 示例
<example-upload/>

## 代码示例
<<< ./src/examples/upload.vue

## 参数

### name

* 类型：`String`
* 默认值：`"file"`
* 描述：`FormData` 上传文件时的 `key`，`input[type=file]`原生属性。

### action

* 类型：`String`
* 默认值：`""`
* 是否必需：是
* 描述：上传地址。

### accept

* 类型：`String`
* 默认值：`""`
* 描述：上传文件类型，`input[type=file]`原生属性。

### headers

* 类型：`Object`
* 默认值：`{}`
* 描述：补充请求头信息。

### multiple

* 类型：`Boolean`
* 默认值：`false`
* 描述：是否多选，`input[type=file]`原生属性。

### data

* 类型：`Object`
* 默认值：`{}`
* 描述：上传文件时附带信息，常用于传送`CDN`合法校验参数。

### itemLabel

* 类型：`String`
* 默认值：`"name"`
* 描述：文件名所在字段名称。

### itemValue

* 类型：`String`
* 默认值：`"url"`
* 描述：文件地址所在字段名称。

### fileList

* 类型：`Array`
* 默认值：`[]`
* 描述：文件集合。

### disabled

* 类型：`Boolean`
* 默认值：`false`
* 描述：上传禁用。

### limit

* 类型：`Object`
* 默认值：`100000000`
* 描述：最多上传文件数。

## 钩子函数

### before-upload

* 类型：`Function`
* 默认值：`function () {}`
* 描述：上传前校验文件，常用于校验文件类型及控制文件大小。

### before-remove

* 类型：`Function`
* 默认值：`function () {}`
* 描述：移除文件前校验。

### on-success

* 类型：`Function`
* 默认值：`function () {}`
* 描述：上传成功。

### on-remove

* 类型：`Function`
* 默认值：`function () {}`
* 描述：移除成功。

### on-progress

* 类型：`Function`
* 默认值：`function () {}`
* 描述：上传进度。

### on-error

* 类型：`Function`
* 默认值：`function () {}`
* 描述：上传报错。

## 事件

无事件。

## 依赖情况

无依赖。






