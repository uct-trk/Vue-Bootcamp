<template>
    <div>
        <ul>
            <TodoListItem v-for="todo in provideData.todoList" :key="todo.id" :todo="todo"/>
        </ul>
    </div>
</template>
<script>
import TodoListItem from './TodoListItem.vue'
export default {
    name: "TodoList",
    /* props: {
        todoList: {
            required: true,
            type: String
        }
    }, */
    inject: ["provideData"],
    components: {
        TodoListItem
    },

}
</script>
<style>
    
</style>