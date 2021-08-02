const app = Vue.createApp({
    data() {
        return {
            boxClass: "border red",
            showBorder: false,
            redBg: false,
            bgColor: "cyan"
        }
    },
    computed: {
        boxClasses(){
            return {border : this.showBorder, red: this.redBg}
        }
    }
}).mount("#app");