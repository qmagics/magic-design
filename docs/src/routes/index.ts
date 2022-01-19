import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/start",
    },
    {
        path: "/start",
        component: () => import("@/views/start/index.vue"),
        children: [

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
            }
        ]
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
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