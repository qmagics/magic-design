import { MenuItemRaw } from "../../types";

const menus: MenuItemRaw[] = [
    {
        type: "group",
        label: "指南",
        children: [
            {
                type: "menu",
                label: "快速开始",
                path: "start"
            }
        ]
    }
]

export default menus;