<template>
  <div>
    <ul>
      <li v-for="(item, index) in woodItems" :key="index">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "UserList",
  computed: {
    /*  ...mapGetters(["_woodItems", "_activeUser"]) */
    ...mapGetters({
      woodItems: "_woodItems",
      activeUser: "_activeUser",
    }),
  },
};
</script>

<style></style>
