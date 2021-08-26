import {createRouter, createWebHistory} from 'vue-router'
import Home from '../Views/Home.vue'
import Login from '../Views/Login.vue'
import Register from '../Views/Register.vue'
import NewBookmarkPage from '../Views/NewBookmark.vue'

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home
    },
    {
        name: "Login",
        path: "/login",
        component: Login
    },
    {
        name: "Register",
        path: "/register",
        component: Register
    },
    {
        name: "NewBookmarkPage",
        path: "/newbook",
        component: NewBookmarkPage
    },
]

export default createRouter({
    routes,
    history: createWebHistory()
})