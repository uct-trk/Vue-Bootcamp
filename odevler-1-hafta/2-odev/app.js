const app = Vue.createApp({
    data() {
        return {
            value: "",
            value2: ""
        }
    },
    methods: {
        showAlert() {
            alert("Hello")
        },
        showValue(event) {
            console.log(event.target.value)
            this.value = event.target.value
        },
        showValue2(event) {
            console.log(event.target.value)
            this.value2 = event.target.value
        }
    },

}).mount("#app")