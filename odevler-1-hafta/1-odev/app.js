const app = Vue.createApp({
    data() {
        return {
            name: "Uğurcan",
            age: 26,
            url: "https://images.unsplash.com/photo-1627910204751-62a41b344f03?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    },
    methods: {
        ageTimes() {
            const newAge = this.age * 5
            return newAge
        }
    },
    computed: {
        randomNumber(){
            return Math.random()
        }
    }
}).mount("#app")