# Steps 步骤条

## 引用
```js
import { Steps } from 'xin-ui'
```

## 示例
<example-steps/>

## 参数

### value / v-model

* 类型：`Number`
* 默认值：`1`
* 描述：步骤条值，双向绑定。

### status

* 类型：`String`
* 默认值：`""`
* 描述：步骤条状态。

| 值 | 描述 |
| - | - |
| error | 失败 |

### list

* 类型：`Array<Object>`
* 默认值：`[]`
* 描述：步骤条数据。

| Object 键 | 描述 | 是否必须 |
| - | - | - |
| title | 标题 | 是 |
| activeTitle | 进行中状态的标题 | 否，会继承`title`内容 |
| desc | 描述 | 否 |
| activeDesc | 进行中状态的描述 | 否，会继承`desc`内容 |
| successDesc | 完成状态的描述 | 否，会继承`desc`内容 |
| errorDesc | 失败状态的描述 | 否，会继承`desc`内容 |

## 事件

### change
* 描述：值改变的时候。
* 回调参数: `(value)`；改变后的值，在步骤条值更新之后触发。

## 依赖情况

无依赖。

## 代码示例
<<< ./src/examples/steps.vue






