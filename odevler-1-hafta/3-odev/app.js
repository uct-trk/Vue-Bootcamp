const app = Vue.createApp({
    data() {
        return {
            value: 0,
            result2: ""
        }
    },
    methods: {
        
    },
    computed: {
        result(){
            return this.value === 33 ? "Tamamlandı" : "Henüz Bitmedi"
        }
    },
    watch: {
        value(v){
            if(v === 33){
                this.result2 = "Tamamlandı"
            } else {
                this.result2 = "Tamamlanmadı"
            }
        },
        result(){
            setTimeout(() => {
                this.value = 0
            }, 5000)
        }
    }
}).mount("#app")