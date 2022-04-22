# `magic-design`

> A Vue3.0 Component Lib

## Install
```shell
npm install magic-design -S
```

## Usage
``` javascript
import Vue from 'vue'

// 全局注册
import MagicDesign from 'magic-design'

Vue.use(MagicDesign)


// 局部注册
import {
  Select,
  Button
} from 'magic-design'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)

```

## Docs
More usage read [MagicDesign Documents](http://magic-design.qmagics.com/)
