import { createStore } from 'vuex'

const store = createStore({
    state: {
        user: {
            name: "Ugurcan",
            lname: "TÜRK",
            age: 26,
            address: "",
            password: 123456,
            tc: 111111
        },
        fullName: "Alex de Souza",
        theme: "dark",
        permissions: [1, 2, 3, 4, 5],
        userList: ["Ugur", "Ahmet", "Ayşe", "Fatma", "Esra", "Ramazan", "Hıdır", "Sülo", "Hayriye"],
        itemList: [
            { id: 1, title: "Masa", type: "mobilya" },
            { id: 2, title: "Ev", type: "konut" },
            { id: 3, title: "Tv", type: "elektronik" },
            { id: 4, title: "Araba", type: "Taşıt" },
            { id: 5, title: "Bardak", type: "züccaciye" },
            { id: 6, title: "Dolap", type: "mobilya" },
        ]
    },
    // state değerini anlık olarak hızlı bir şekilde update etmemizi sağlar
    mutations: {
        newItem(state, item) {
            state.itemList.push(item)
        }
    },
    // actions asenkron çalışıyor
    // context 
    actions: {
        newItem(context, item){
            console.log(item)
            setTimeout(() => {
                context.commit("newItem", item)
            } ,2000)
        }
    },
    // getters işi statedeki bilgileri bize geri döndürmesidir
    // getters olduğunu anlamamız için başına alt tire koyduk
    getters: {
        _woodItems: state => state.itemList.filter(i => i.type === "mobilya"),
        _activeUser(state) {
            const user = { ...state.user }
            delete user.password;
            return user
        }
    }
})

export default store