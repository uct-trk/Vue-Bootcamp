const app = Vue.createApp({
    data() {
        return {
            title: "Vue.js Bootcamp 1. Gün",
            content: "Lorem ipsum dolar sit amet",

            eduflow: {
                title: "Müfredat ve açıklamalar için tıklayınız",
                target: "_blank",
                url: "https://eduflow.kablosuzkedi.com",
                alt: "mufredat-kablosuz-kedi"
            },
            coords: {
                x: 0,
                y: 0,
            },
            owner: "Pogaca"
        }
    },
    methods: {
        changeTitle(pTitle) {
            this.title = pTitle
        },
        updateCoords(message, event) {
            this.changeTitle(`${event.x} ${event.y}`)
            this.coords = {
                x: event.x,
                y: event.y
            }
        }
    },
}).mount("#app");