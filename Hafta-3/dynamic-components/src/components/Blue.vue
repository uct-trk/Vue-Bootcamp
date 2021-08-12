<template>
  <div>
    <h3 class="bg-blue text-white">{{ msg }}</h3>
    <input type="text" />
  </div>
</template>

<script>
export default {
  props: ["msg"],
  mounted() {
      console.log("blue mounted")
  },
  activated() {
      console.log("blue activated")
  },
  deactivated() {
      console.log("blue deactivated")
  },
};
</script>

<style></style>
