<template>
    <div class="demo-page__main is--full">
        <div class="b-1">
            <h1 class="t-1">快速开始</h1>
            <p>跟随以下介绍，快速将 <b>magic-design</b> 应用在你的项目中</p>

            <div class="b-2">
                <h2>版本要求</h2>
                <p>vue >= 3.2.24</p>
            </div>

            <div class="b-2">
                <h2>安装</h2>
                <app-highlight :code="code1" lang="shell"></app-highlight>
            </div>

            <div class="b-2">
                <h2>完整引入</h2>
                <app-highlight :code="code2" lang="ts"></app-highlight>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const code1 = `# npm
$ npm install magic-design -S

# yarn
$ yarn add magic-design

# pnpm
$ pnpm install magic-design -S
`;


const code2 = `import { createApp } from 'vue'

// 引入组件库
import MagicDesign from 'magic-design'

// 引入样式
import 'magic-design/lib/theme-chalk/index.css'

import App from './App.vue'

const app = createApp(App)

app.use(MagicDesign).mount('#app')
`;
</script>

<style lang="scss" scoped>
.b-1 {
    margin-top: 80px;

    &:first-child {
        margin-top: 0;
    }
}
.b-2 {
    margin-top: 50px;
}
.t-1{
    // margin-bottom: 30px;
}
</style>