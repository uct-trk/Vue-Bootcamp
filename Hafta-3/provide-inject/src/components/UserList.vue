<template>
  <div>
    <ul>
      <li v-for="(user, index) in userList" :key="index">{{ user }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ["userList"],
};
</script>

<style></style>
