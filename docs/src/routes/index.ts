import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/guide",
    },
    {
        path: "/guide",
        component: () => import("@/views/guide/index.vue"),
        redirect: "/guide/start",
        children: [
            {
                path: "start",
                component: () => import("@/views/guide/start.vue"),
            }
        ]
    },
    {
        path: "/component",
        component: () => import("@/views/component/index.vue"),
        redirect: "/component/button",
        children: [
            {
                path: "button",
                component: () => import("@/views/component/button/index.vue")
            },
            {
                path: "icon",
                component: () => import("@/views/component/icon/index.vue")
            },
            {
                path: "input",
                component: () => import("@/views/component/input/index.vue")
            },
            {
                path: "space",
                component: () => import("@/views/component/space/index.vue")
            },
            {
                path: "radio",
                component: () => import("@/views/component/radio/index.vue")
            },
            {
                path: "checkbox",
                component: () => import("@/views/component/checkbox/index.vue")
            },
            {
                path: "trigger",
                component: () => import("@/views/component/trigger/index.vue")
            },
            {
                path: "select",
                component: () => import("@/views/component/select/index.vue")
            },
            {
                path: "tag",
                component: () => import("@/views/component/tag/index.vue")
            },
            {
                path: "link",
                component: () => import("@/views/component/link/index.vue")
            },
            {
                path: "table",
                component: () => import("@/views/component/table/index.vue")
            },
            {
                path: "uploader",
                component: () => import("@/views/component/uploader/index.vue")
            },
            {
                path: ":pathMatch(.*)",
                component: () => import("@/views/common/todo.vue")
            },
        ]
    },
    {
        path: "/404",
        component: () => import("@/views/common/404.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import("@/views/common/404.vue")
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                top: 70,
                behavior: 'smooth',
            }
        }
    },
});

export default router;