<template>
    <div>
        <label for="todoText"></label>
    <input
      v-model="todoText"
      @keydown.enter="addNewTodo(todoText)"
      type="text"
      id="todoText"
      placeholder="Birşeyler yaz.."
    />
    <button class="green" @click="sendData">Gönder</button>
    </div>
</template>
<script>
export default {
    name: "AddSection",
    data() {
        return {
            todoText: ""
        }
    },
    props: {
        addNewTodo: {
            type: Function,
            required: true
        }
    },
    methods: {
        sendData(){
            this.$emit("test-event", "Bu benım mesajım")
        },
        /* addNewTodo(){
            this.$emit("add-todo", this.todoText)
            this.todoText = ""
        } */
    }
}
</script>
<style>
    
</style>