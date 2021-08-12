<template>
  <div>
    <UserList />
    <input type="text" v-model="text" />
    <button @click="$emit('new-item', new Date().getTime())">Set data</button>
    <button @click="newItem(text)">Ekle</button>
  </div>
</template>

<script>
import UserList from "./UserList.vue";
export default {
  data() {
    return {
      text: "",
    };
  },
  inject: ["newItem"],

  components: {
    UserList,
  },
};
</script>

<style></style>
