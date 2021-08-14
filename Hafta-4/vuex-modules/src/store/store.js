import { createStore } from 'vuex'
import contact from './modules/contact'
import taskManeger from './modules/taskManeger'

const store = createStore({
    namespaced: true,
    state: {
        mainName: "kablosuzkedi"
    },
    modules: {
        contact,
        taskManeger
    }
})

export default store