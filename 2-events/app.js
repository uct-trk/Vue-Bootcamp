const app = Vue.createApp({
    data() {
        return {
            fullName: "Ugur",
        }
    },
    methods: {
        updateValue(event) {
            console.log(event.target.value)
            this.fullName = event.target.value
        }
    },
}).mount("#app");