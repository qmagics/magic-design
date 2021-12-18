import { defineAsyncComponent } from "vue";
import { DemoItemRaw } from "../../../types";

export default {
    demos: [
        {
            title: "基础用法",
            description: "按钮分为 primary - 主要按钮、secondary - 次要按钮（默认）、outline - 线形按钮、text - 文本按钮四种类型。",
            id: "basic",
            component: defineAsyncComponent(() => import("./demo-store/basic.vue"))
        },
        {
            title: "按钮状态",
            id: "state",
            component: defineAsyncComponent(() => import("./demo-store/state.vue"))
        },
        {
            title: "图标按钮",
            id: "icon",
            component: defineAsyncComponent(() => import("./demo-store/icon.vue"))
        },
        {
            title: "按钮尺寸",
            id: "size",
            component: defineAsyncComponent(() => import("./demo-store/size.vue"))
        }
    ] as DemoItemRaw[]
}