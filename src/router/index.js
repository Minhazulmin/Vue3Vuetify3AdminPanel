import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: '/', component: () => import('../views/Layout.vue'),
        children: [
            // For Home page
            { path: '/', component: () => import('../views/Index.vue')},
            { path: '/tab', component: () => import('../components/Tab.vue')},
            { path: '/alerts', component: () => import('../components/Alerts.vue')},
        ],
       

    },
      // if any component or view not found then showing 404 page
      {
        path: '/:catchAll(.*)', component: () => import('./../views/Layout.vue'),
        children: [
            { path: '/:catchAll(.*)', name: '404', component: () => import('./../views/errors/404.vue'),}
        ]
    }

]

const router = createRouter({
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    history: createWebHistory(),
    // base: process.env.BASE_URL,
    routes
});

export default router;