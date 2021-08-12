<template>
  <div class="container">
    <UserSection @new-item="provideData.userList.push($event)" />
  </div>
</template>

<script>
import UserSection from "./components/UserSection.vue";
export default {
  name: "App",
  components: { UserSection },
  data() {
    return {
      provideData: {
        userList: ["ugur", "esra", "ali", "ahmet", "fatma"],
      },
    };
  },
  provide() {
    return {
      userList: this.provideData.userList,
      newItem: this.newItem,
    };
  },
  methods: {
    newItem(item) {
      this.provideData.userList.push(item);
    },
  },
};
</script>

<style></style>
