# Crop 裁切器

## 引用
```js
import { Crop } from 'xin-ui'
```

## 示例
<example-crop/>

## 代码示例
<<< ./src/examples/crop.vue

## 参数

### src

* 类型：`String`
* 默认值：`""`
* 描述：图片链接，互联网绝对路径，不支持相对路径使用。

### width

* 类型：`String`
* 默认值：`"500"`
* 描述：裁切器宽度，不带单位。

### height

* 类型：`String`
* 默认值：`"350"`
* 描述：裁切器高度，不带单位。

### viewMode

* 类型：`Number`
* 默认值：`1`
* 描述：显示模式。

| 值 | 描述 |
| - | - |
| 0 | 无限制 |
| 1 | 选取只能在图片内部 |
| 2 | 限制最小画布大小以适合容器。如果画布和容器的比例不同，则最小画布将在其中一个维度中被多余的空间包围 |
| 3 | 限制最小画布大小以适合容器。如果画布和容器的比例不同，则容器将无法以一个尺寸容纳整个画布 |

### aspectRatio

* 类型：`Number`
* 默认值：`NaN`
* 描述：选取框长宽比。

### background

* 类型：`String`
* 默认值：`"#fff"`
* 描述：背景色。

### imgType <xin-tag message="暂未实现" color="warning" fill></xin-tag>

* 类型：`String`
* 默认值：`"png"`
* 描述：输出图片格式。

| 值 | 描述 |
| - | - |
| png | PNG格式 |
| jpg | JPEG格式 |
| base64 | 图片的base64数据 |

## 方法

### reset

* 描述：重置。
* 参数：无。

### anticlockwise

* 描述：逆时针旋转45度。
* 参数：无。

### clockwise

* 描述：顺时针旋转45度。
* 参数：无。

### enlarge

* 描述：放大0.1倍。
* 参数：无。

### narrow

* 描述：缩小0.1倍。
* 参数：无。

### getImage

* 描述：获取裁切图片。
* 参数：`imgType`。

## 事件

无事件。

## 依赖情况

依赖于NPM包：`cropperjs`。






