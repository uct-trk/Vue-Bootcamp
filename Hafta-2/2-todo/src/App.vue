<template>
  <div class="container">
    <h3 class="text-center">Todo App</h3>
    <hr class="my-2" />
    <AddSection :addNewTodo="addNewTodo"  @test-event="testEvent"/>
    <ListSection/>
  </div>
</template>

<script>
import AddSection from "./components/AddSection.vue"
import ListSection from "./components/ListSection.vue"

export default {
  name: "App",
  components: {
      AddSection,
      ListSection
    },
  data() {
    return {
      provideData: {
        todoList: [
        { id: 1, text: "Bootcamp #2" },
        { id: 2, text: "Bootcamp #2.1" },
        { id: 3, text: "Bootcamp #2.2" },
        { id: 4, text: "Bootcamp #2.3" },
        { id: 5, text: "Bootcamp #2.4" },
        { id: 6, text: "Bootcamp #2.5" },
      ],
      }
    };
  },
  provide(){
    return {
      provideData: this.provideData,
      deleteTodo: this.deleteTodo
    }
  },
    methods: {
      testEvent(data){
        alert(data)
      },
    addNewTodo(todo) {
      console.log(todo)
      this.provideData.todoList.push({
        id: new Date().getTime(),
        text: todo,
      }); 
      event.target.value = ""
    },
    deleteTodo (todo) {
      console.log(todo.id);
      this.provideData.todoList = this.provideData.todoList.filter((i) => i.id != todo.id);
  },
  }
}
</script>

<style></style>
