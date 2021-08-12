<template>
  <div class="container">
    <button class="red" @click="activeComponent = 'Red'">Red</button>
    <button class="green" @click="activeComponent = 'Green'">Green</button>
    <button class="blue" @click="activeComponent = 'Blue'">Blue</button>
    <!-- <Red v-if="activeComponent == 'Red'" class="mb-2" />
    <Green v-if="activeComponent == 'Green'" />
    <Blue v-if="activeComponent == 'Blue'" /> -->
    {{ activeComponent }}
    <!--keep alive sayesinde componentteki bilgigiyi tutabiliyoruz-->
    <keep-alive>
      <component :is="activeComponent" :msg="msg" />
    </keep-alive>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  name: "App",
  data() {
    return {
      activeComponent: "Red",
      msg: "Mavi Component",
    };
  },
  components: {
    Red,
    Green,
    Blue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
