<template>
  <div>
    <!-- <div>
      {{ $store.state.user }}
      <hr />
      {{ $store.state.permissions }}
    </div>
    <ul>
      <li v-for="(permission, index) in $store.state.permissions" :key="index">
        {{ permission }}
      </li>
    </ul>
    <ul>
      <li v-for="(user, index) in $store.state.userList" :key="index">
        {{ user }}
      </li>
    </ul>
    <hr />
    
    <ul>
      <li v-for="(active, index) in activeUser" :key="index">
        {{active}}
      </li>
    </ul> -->
    <UserList/>
    <NewUser/>
  </div>
</template>

<script>
import UserList from './components/UserList.vue'
import NewUser from './components/NewUser.vue'
export default {
  name: "App",
  created() {
    console.log(this.$store.state.user);
    console.log(this.$store.state.theme);
    console.log(this.$store.getters._woodItems);
    console.log("user",this.$store.getters._activeUser);
  },  
  components: {
    UserList,
    NewUser
  }
};
</script>

<style></style>
