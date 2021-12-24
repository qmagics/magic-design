<template>
    <h3>横向</h3>
    <m-space>
        <m-button v-for="i in 5">按钮</m-button>
    </m-space>
    <h3>纵向</h3>
    <m-space direction="vertical">
        <m-button v-for="i in 5">按钮</m-button>
    </m-space>
</template>

<demo-meta>
{
    "sort": 2,
    "title": "布局方向",
    "description": "可以通过direction属性设置子元素的布局方向，默认为horizontal",
}
</demo-meta>