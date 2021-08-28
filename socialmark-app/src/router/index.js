import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Views/Home.vue'
import Login from '../Views/Login.vue'
import Register from '../Views/Register.vue'
import NewBookmarkPage from '../Views/NewBookmark.vue'
import store from '../store'
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

const router = createRouter({
    routes,
    history: createWebHistory()
})

// route guard eger kulanıcı giriş yapmadıysa otomatik olarak login sayfasına yönlendirilir
router.beforeEach((to, from, next) => {
    const authRequiredRoutes = ["Home"]
    const authNotRequiredRoutes = ["Login", "Register"]
    const _isAuthenticated = store.getters._isAuthenticated

    if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) next(false)

    if (authRequiredRoutes.indexOf(to.name) > -1) {
        if (_isAuthenticated) next();
        else next({ name: "Login" })
    } else {
        next()
    }
    console.log(from, to)
})

export default router