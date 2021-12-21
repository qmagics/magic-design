<template>
    <div>
        <m-button type="primary">默认</m-button>
        <m-button type="primary" state="success">成功</m-button>
        <m-button type="primary" state="warning">警告</m-button>
        <m-button type="primary" state="danger">危险</m-button>
        <m-button type="outline">默认</m-button>
        <m-button type="outline" state="success">成功</m-button>
        <m-button type="outline" state="warning">警告</m-button>
        <m-button type="outline" state="danger">危险</m-button>
    </div>
    <div>
        <m-button>默认</m-button>
        <m-button state="success">成功</m-button>
        <m-button state="warning">警告</m-button>
        <m-button state="danger">危险</m-button>
        <m-button type="text">默认</m-button>
        <m-button type="text" state="success">成功</m-button>
        <m-button type="text" state="warning">警告</m-button>
        <m-button type="text" state="danger">危险</m-button>
    </div>
</template>

<demo-meta>
{
    "sort": 2,
    "title": "按钮状态",
    "description": "可以通过 state 属性给按钮设置状态，按钮状态可与按钮类型同时使用。可选项为 success / warning / danger ",
}
</demo-meta>