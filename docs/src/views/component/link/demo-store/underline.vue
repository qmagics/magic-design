<template>
    <m-space>
        <m-link state="secondary" underline>一直显示</m-link>
        <m-link state="primary" underline="hover">移入显示</m-link>
        <m-link state="success" :underline="false">始终不显示</m-link>
    </m-space>
</template>

<demo-meta>
{
    "sort": 2,
    "title": "下划线",
    "description": "使用underline属性设置链接下划线逻辑",
}
</demo-meta>