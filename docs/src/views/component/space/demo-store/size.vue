<template>
    <h3>mini</h3>
    <m-space size="mini">
        <m-button v-for="i in 5">按钮</m-button>
    </m-space>
    <br />
    <br />
    <h3>small</h3>
    <m-space size="small">
        <m-button v-for="i in 5">按钮</m-button>
    </m-space>
    <br />
    <br />
    <h3>medium</h3>
    <m-space size="medium">
        <m-button v-for="i in 5">按钮</m-button>
    </m-space>
    <br />
    <br />
    <h3>large</h3>
    <m-space size="large">
        <m-button v-for="i in 5">按钮</m-button>
    </m-space>
    <br />
    <br />
    <h3>自定义</h3>
    <m-space :size="30">
        <m-button v-for="i in 5">按钮</m-button>
        <br />
        <br />
    </m-space>
</template>

<demo-meta>
{
    "sort": 3,
    "title": "设置间距",
    "description": "通过设置size属性可以控制子元素的间距，默认为medium",
}
</demo-meta>