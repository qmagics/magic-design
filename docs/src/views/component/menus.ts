import { MenuItemRaw } from "../../types";

const menus: MenuItemRaw[] = [
    {
        type: "group",
        label: "基础",
        children: [
            {
                type: "menu",
                label: "Button 按钮",
                path: "button",
            },
            {
                type: "menu",
                label: "Icon 图标",
                path: "icon"
            },
            {
                type: "menu",
                label: "Link 链接",
                path: "link"
            },
        ]
    },
    {
        type: "group",
        label: "布局",
        children: [
            {
                type: "menu",
                label: "Space 间距",
                path: "space"
            },
            {
                type: "menu",
                label: "Layout 布局",
                path: "layout"
            }
        ]
    },
    {
        type: "group",
        label: "表单",
        children: [
            {
                type: "menu",
                label: "Input 输入框",
                path: "input"
            },
            {
                type: "menu",
                label: "Select 选择器",
                path: "select"
            },
            {
                type: "menu",
                label: "Radio 单选框",
                path: "radio"
            },
            {
                type: "menu",
                label: "Checkbox 多选框",
                path: "checkbox"
            },
            {
                type: "menu",
                label: "Uploader 文件上传器",
                path: "uploader"
            }
        ]
    },
    {
        type: "group",
        label: "数据展示",
        children: [
            {
                type: "menu",
                label: "Table 表格",
                path: "table"
            },
            {
                type: "menu",
                label: "Pagination 分页",
                path: "pagination"
            },
            {
                type: "menu",
                label: "Tag 标签",
                path: "tag"
            },
            {
                type: "menu",
                label: "Vlist 虚拟列表",
                path: "vlist"
            }
        ]
    },
    {
        type: "group",
        label: "导航",
        children: [
            {
                type: "menu",
                label: "Dropdown 下拉框",
                path: "dropdown"
            },
            {
                type: "menu",
                label: "Menu 菜单",
                path: "menu"
            },
            {
                type: "menu",
                label: "Tabs 标签页",
                path: "tabs"
            }
        ]
    },
    {
        type: "group",
        label: "反馈",
        children: [
            {
                type: "menu",
                label: "Message 消息",
                path: "message"
            },
            {
                type: "menu",
                label: "Modal 对话框",
                path: "modal"
            },
            {
                type: "menu",
                label: "Popconfirm 气泡确认框",
                path: "popconfirm"
            },
            {
                type: "menu",
                label: "Trigger 触发器",
                path: "trigger"
            }
        ]
    }
]

export default menus;