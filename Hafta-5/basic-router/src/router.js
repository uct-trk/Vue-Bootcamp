import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Details from './views/Details.vue'

const routes = [
    {
        name: "home",
        path: "/",
        component: Home
    },
    {
        name: "about",
        path: "/about",
        component: About
    },
    {
        name: "details",
        path: "/detail/:userID",
        component: Details
    }
]

const router = createRouter({
   routes,
   history: createWebHistory()
})

export default router