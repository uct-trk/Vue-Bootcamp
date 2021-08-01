const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0
        }
    },
    methods: {
        increament() {
            this.counter++
        },
        decreament() {
            this.counter--
        }
    },
    // sadece ilgili yerlerin update edilmesini sağlar
    computed: {
        getCounter() {
            console.log("Counter 1 çalıştı")
            return this.counter > 5 ? "BÜYÜK" : "KÜCÜK"
        },
        getCounter2() {
            console.log("Counter 2 çalıştı")
            return this.counter2 > 5 ? "BÜYÜK" : "KÜCÜK"
        }
    },
    // eski bilgiyi ve yeni bilgiyi bize verir
    watch: {
        counter(newValue, oldValue) {
            console.log(oldValue, "=>", newValue);
        },
        getCounter(newValue, oldValue) {
            console.log(oldValue, "=>", newValue);
        },
    }

}).mount("#app")