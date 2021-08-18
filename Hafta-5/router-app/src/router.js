import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import NewPerson from './views/NewPerson.vue'

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home
    },
    {
        name: "NewPerson",
        path: "/new",
        component: NewPerson
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router