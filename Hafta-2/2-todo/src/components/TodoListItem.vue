<template>
    <div>
        <li
        class="d-flex justify-content-between align-items-center"
      >
        <span>{{todo.text}}</span>
        <button @click="deleteTodo(todo)" class="sm red">Sil</button>
      </li>
    </div>
</template>
<script>
export default {
    name: "TodoListItem",
    inject: ["deleteTodo"],
    props: {
        todo: {
            required: true,
            type: String
        }
    }
}
</script>
<style>
    
</style>