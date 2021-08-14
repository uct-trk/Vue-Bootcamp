<template>
  <div>
    <button @click="changeName">İsim değiştir</button>
  </div>
</template>

<script>
export default {
  name: "NewUser",
  methods: {
    changeName() {
      // commit mutation çağırır
      const userData = {
        id: new Date().getTime(),
        title: "Raf + " + new Date().getTime(),
        type: "mobilya",
      };
      // this.$store.commit("newItem", userData);
      this.$store.dispatch("newItem", userData)
      // this.$store.state.itemList.push();
      this.$store.state.fullName = new Date().getTime();
    },
  },
};
</script>

<style></style>
