# 使用方法

## xin-ui

### 整体引用

```js
import xinUI from 'xin-ui'
import 'xin-ui/styles.css'
Vue.use(xinUI)
```

### 单组件引用

```js
import { Button, Checkbox } from 'xin-ui'
// 样式不提供单独打包。
import 'xin-ui/styles.css'
Vue.use(Button)
Vue.use(Checkbox)
```

## isesol-skill

### 组件引用

```js
import { Upload, Crop } from 'xin-ui/skill'
Vue.use(Upload)
Vue.use(Crop)
```
