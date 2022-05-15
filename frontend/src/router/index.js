import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/Home2.vue";
import Events from "/src/views/Events.vue";
import EventDetail from "/src/views/EventDetail.vue";
import Day from "/src/views/Day.vue";
import NotFound from "/src/views/NotFound.vue";
import About from "/src/views/About.vue";
import Sponsors from "/src/views/Sponsors.vue";
import store from "../store/index"

const routes = [
    {
        path: "/", name: "Home", component: Home, meta: {
            enterClass: 'animate__animated animate__fadeInRight',
            leaveClass: 'animate__animated animate__fadeOutLeft'
        }
    }, {
        path: "/day/:id", name: "Day", component: Day, props: true, meta: {
            enterClass: 'animate__animated animate__fadeInRight',
            leaveClass: 'animate__animated animate__fadeOutLeft'
        }
    },
    {
        path: "/events/", name: "Events", component: Events, props: true, meta: {
            enterClass: 'animate__animated animate__fadeInRight',
            leaveClass: 'animate__animated animate__fadeOutLeft'
        }
    }, {
        path: "/events/details/:id", name: "EventDetail", component: EventDetail, props: true, meta: {
            enterClass: 'animate__animated animate__fadeInRight',
            leaveClass: 'animate__animated animate__fadeOutLeft'
        }
    }, {
        path: "/sponsors", name: "Sponsors", component: Sponsors, meta: {
            enterClass: 'animate__animated animate__fadeInRight',
            leaveClass: 'animate__animated animate__fadeOutLeft'
        }
    }, {
        path: "/about", name: "About", component: About, meta: {
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