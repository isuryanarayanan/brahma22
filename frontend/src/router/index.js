import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/Home.vue";
import Events from "/src/views/Events.vue";
import NotFound from "/src/views/NotFound.vue";
import store from "../store/index"

const routes = [
    {
        path: "/", name: "Home", component: Home, meta: {
            enterClass: 'animate__animated animate__fadeInLeft',
            leaveClass: 'animate__animated animate__fadeOutLeft'
        }
    },
    {
        path: "/events/:id", name: "Events", component: Events, props: true, meta: {
            enterClass: 'animate__animated animate__fadeInRight',
            leaveClass: 'animate__animated animate__fadeOutLeft'
        }
    },
    {
        path: "/:catchAll(.*)", name: "NotFound", component: NotFound, meta: {
            enterClass: 'animate__animated animate__fadeInRight',
            leaveClass: 'animate__animated animate__fadeOutLeft'
        }
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    store.dispatch("START_LOADING")
    next()
})

router.afterEach(() => {
    setTimeout(() => store.dispatch("STOP_LOADING"), 2500)
})

export default router;