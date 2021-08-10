<template>
    <div>
        <TodoList @delete-todo-item="$emit('delete-todo-item', $event)" :todoList="todoList"/>
        <ResultBar :todoList="provideData.todoList"/>
    </div>
</template>
<script>
import TodoList from "./TodoList.vue"
import ResultBar from "./ResultBar.vue"

export default {
    name: "ListSection",
    props: {
        todoList: {
            type: Array,
            required: true
        }
    },
    inject: ["provideData"],
  components: {
      TodoList,
      ResultBar,
    },
}
</script>
<style>
    
</style>